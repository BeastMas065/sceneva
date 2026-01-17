// Import types and values from organized content files
import type { Region, ContentType, ContentItem, Mood, Complexity, Violence } from './content';
import { getAllContent, getContentByType, webSeries, animatedContent, animeContent, moviesContent } from './content';
import type { QuizMode, Scores, Question, QuestionVariant } from './questions';
import { initialScores, getQuestionsForModeAndContent, getRandomVariant, universalQuestions, animeQuestions, webSeriesQuestions, animatedQuestions, movieQuestions } from './questions';

// Re-export everything
export type { Region, ContentType, ContentItem, Mood, Complexity, Violence };
export { getAllContent, getContentByType, webSeries, animatedContent, animeContent, moviesContent };
export type { QuizMode, Scores, Question, QuestionVariant };
export { initialScores, getQuestionsForModeAndContent, getRandomVariant, universalQuestions, animeQuestions, webSeriesQuestions, animatedQuestions, movieQuestions };

// Legacy support - get questions for mode (uses movies as default)
export function getQuestionsForMode(mode: QuizMode) {
  return getQuestionsForModeAndContent(mode, ['movies']);
}

// Recommend content based on scores - PRECISION ALGORITHM
export function recommendContent(
  scores: Scores, 
  region: Region, 
  contentTypes: ContentType[],
  excludeNames: string[] = [],
  preferredGenre?: string // Optional: user's explicitly selected genre
): { item: ContentItem; reasons: string[]; matchPercent: number } {
  
  // Find the user's dominant genre from scores
  const genreScores = {
    action: scores.action,
    romance: scores.romance,
    comedy: scores.comedy,
    thriller: scores.thriller,
    drama: scores.drama,
    scifi: scores.scifi,
    fantasy: scores.fantasy,
    horror: scores.horror || 0,
  };
  
  // Get top genres (sorted by score)
  const sortedGenres = Object.entries(genreScores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0);
  
  const topGenre = preferredGenre || sortedGenres[0]?.[0];
  const topGenreScore = genreScores[topGenre as keyof typeof genreScores] || 0;
  const hasStrongGenrePreference = topGenreScore >= 5; // User really wants this genre
  
  // Step 1: Get all matching content
  let allCandidates = getAllContent().filter(item => 
    contentTypes.includes(item.contentType) && 
    !excludeNames.includes(item.name)
  );
  
  // Step 2: Filter by region (soft filter - prefer but don't require)
  let regionFiltered = allCandidates.filter(item => item.region === region);
  
  // Step 3: STRICT genre filtering if user has a strong preference
  let genreFiltered: ContentItem[] = [];
  if (hasStrongGenrePreference && topGenre) {
    // Primary: exact genre match
    genreFiltered = regionFiltered.filter(item => 
      item.genre === topGenre || 
      (item.secondaryGenres && item.secondaryGenres.includes(topGenre as any))
    );
    
    // If no matches in preferred region, expand to all regions but keep genre strict
    if (genreFiltered.length === 0) {
      genreFiltered = allCandidates.filter(item => 
        item.genre === topGenre || 
        (item.secondaryGenres && item.secondaryGenres.includes(topGenre as any))
      );
    }
  }
  
  // Use genre filtered if we have matches, otherwise fall back
  let candidates = genreFiltered.length > 0 ? genreFiltered : 
                   regionFiltered.length > 0 ? regionFiltered : 
                   allCandidates;
  
  // Last resort fallback
  if (candidates.length === 0) {
    candidates = getAllContent().filter(item => !excludeNames.includes(item.name));
  }
  if (candidates.length === 0) {
    candidates = getAllContent();
  }

  // Score each candidate with enhanced properties
  const scored: { 
    item: ContentItem; 
    score: number; 
    genreScore: number;
    moodScore: number;
    paceScore: number;
    complexityScore: number;
    emotionalScore: number;
    ratingBonus: number;
  }[] = [];

  for (const item of candidates) {
    let genreScore = 0;
    let moodScore = 0;
    let paceScore = 0;
    let complexityScore = 0;
    let emotionalScore = 0;
    
    // === GENRE SCORING (Primary factor) ===
    const genreMap: Record<string, number> = {
      action: scores.action,
      romance: scores.romance,
      comedy: scores.comedy,
      thriller: scores.thriller,
      drama: scores.drama,
      scifi: scores.scifi,
      fantasy: scores.fantasy,
      horror: scores.horror || 0,
      'slice-of-life': (scores.drama + scores.comedy) / 2,
    };
    
    // Primary genre: 5x weight
    genreScore += (genreMap[item.genre] || 0) * 5;
    
    // Secondary genres: 2x weight each
    if (item.secondaryGenres) {
      for (const sg of item.secondaryGenres) {
        genreScore += (genreMap[sg] || 0) * 2;
      }
    }
    
    // Bonus if genre matches user's explicit preference
    if (preferredGenre && (item.genre === preferredGenre || item.secondaryGenres?.includes(preferredGenre as any))) {
      genreScore += 10;
    }
    
    // === MOOD SCORING (Uses new enhanced properties) ===
    if (item.mood) {
      // Emotional preference -> emotional, melancholic moods
      if (scores.emotional > 0) {
        if (item.mood.includes('emotional') || item.mood.includes('melancholic')) {
          moodScore += scores.emotional * 2;
        }
        if (item.mood.includes('light') || item.mood.includes('cozy')) {
          moodScore += scores.emotional * 0.5;
        }
      }
      
      // Intellectual preference -> dark, thrilling moods
      if (scores.intellectual > 0) {
        if (item.mood.includes('dark') || item.mood.includes('thrilling')) {
          moodScore += scores.intellectual * 2;
        }
        if (item.mood.includes('intense')) {
          moodScore += scores.intellectual * 1.5;
        }
      }
      
      // Escapist preference -> uplifting, cozy, light moods
      if (scores.escapist > 0) {
        if (item.mood.includes('uplifting') || item.mood.includes('cozy') || item.mood.includes('light')) {
          moodScore += scores.escapist * 2;
        }
      }
      
      // Grounded preference -> dark, intense, emotional moods
      if (scores.grounded > 0) {
        if (item.mood.includes('dark') || item.mood.includes('intense')) {
          moodScore += scores.grounded * 1.5;
        }
        // Penalize fantasy/escapist moods for grounded preference
        if (item.mood.includes('cozy') && item.genre === 'fantasy') {
          moodScore -= scores.grounded * 0.5;
        }
      }
    }
    
    // === PACE SCORING ===
    const paceDiff = scores.fast - scores.slow;
    if (item.pace === 'fast' && paceDiff > 0) {
      paceScore = paceDiff * 2;
    } else if (item.pace === 'slow' && paceDiff < 0) {
      paceScore = Math.abs(paceDiff) * 2;
    } else if (item.pace === 'medium') {
      paceScore = 1; // Neutral, slight bonus
    } else {
      // Mismatch penalty
      paceScore = -Math.abs(paceDiff);
    }
    
    // === COMPLEXITY SCORING ===
    if (item.complexity) {
      // Intellectual users prefer complex content
      if (scores.intellectual > scores.escapist) {
        if (item.complexity === 'complex') complexityScore += scores.intellectual * 1.5;
        else if (item.complexity === 'moderate') complexityScore += scores.intellectual * 0.5;
      } else {
        // Escapist users prefer simpler content
        if (item.complexity === 'simple') complexityScore += scores.escapist * 1;
        else if (item.complexity === 'complex') complexityScore -= scores.escapist * 0.5;
      }
    }
    
    // === EMOTIONAL INTENSITY SCORING ===
    if (item.emotionalIntensity) {
      if (scores.emotional > 3) {
        // High emotional preference = prefer high intensity
        emotionalScore += (item.emotionalIntensity - 2.5) * scores.emotional * 0.5;
      } else if (scores.escapist > scores.emotional) {
        // Escapist = prefer lower intensity
        emotionalScore += (3.5 - item.emotionalIntensity) * scores.escapist * 0.3;
      }
    }
    
    // === RATING BONUS ===
    const ratingBonus = item.rating ? (item.rating - 7) * 1.5 : 0;
    
    // === TOTAL SCORE ===
    const totalScore = genreScore + moodScore + paceScore + complexityScore + emotionalScore + ratingBonus;
    
    scored.push({ 
      item, 
      score: totalScore, 
      genreScore,
      moodScore,
      paceScore,
      complexityScore,
      emotionalScore,
      ratingBonus,
    });
  }

  // Sort by score
  scored.sort((a, b) => b.score - a.score);
  
  // Pick from top 3 with weighted randomness
  const topCandidates = scored.slice(0, Math.min(3, scored.length));
  const weights = topCandidates.map((c, i) => Math.max(1, c.score + 10) * (3 - i));
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let random = Math.random() * totalWeight;
  let pickIndex = 0;
  for (let i = 0; i < weights.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      pickIndex = i;
      break;
    }
  }
  
  const pick = topCandidates[pickIndex] || scored[0];
  
  // Calculate match percent
  const bestScore = scored[0]?.score || 1;
  const worstScore = scored[scored.length - 1]?.score || 0;
  const scoreRange = Math.max(bestScore - worstScore, 1);
  const normalizedScore = (pick.score - worstScore) / scoreRange;
  const matchPercent = Math.round(70 + normalizedScore * 25); // 70-95% range

  // Generate specific reasons
  const reasons: string[] = [];
  
  // Genre reason
  const genreReasons: Record<string, string[]> = {
    action: ["You're craving high-octane thrills", "Perfect for your adrenaline fix"],
    romance: ["Matches your desire for emotional connections", "For the hopeless romantic in you"],
    comedy: ["You need something to make you laugh", "Light-hearted fun incoming"],
    thriller: ["For your love of suspense and tension", "Will keep you guessing throughout"],
    drama: ["Rich, character-driven storytelling awaits", "Deep emotional journey ahead"],
    scifi: ["Feeds your curiosity for big ideas", "Thought-provoking concepts await"],
    fantasy: ["Perfect escape into magical worlds", "For your imagination to run wild"],
    horror: ["Ready to embrace the dark side", "Thrilling scares await you"],
    'slice-of-life': ["Warm, relatable everyday moments", "Cozy and heartwarming"],
  };
  
  if (genreReasons[pick.item.genre]) {
    reasons.push(genreReasons[pick.item.genre][Math.floor(Math.random() * genreReasons[pick.item.genre].length)]);
  }
  
  // Mood reason
  if (pick.moodScore > 2 && pick.item.mood) {
    const moodDescriptions: Record<string, string> = {
      dark: "Has the dark, intense atmosphere you enjoy",
      light: "Light and easy to watch",
      emotional: "Will take you on an emotional ride",
      intense: "Matches your need for intensity",
      uplifting: "Will leave you feeling good",
      melancholic: "Beautifully bittersweet",
      thrilling: "Edge-of-your-seat excitement",
      cozy: "Warm and comforting vibes",
    };
    for (const mood of pick.item.mood) {
      if (moodDescriptions[mood]) {
        reasons.push(moodDescriptions[mood]);
        break;
      }
    }
  }
  
  // Pace reason
  if (pick.paceScore > 1) {
    if (pick.item.pace === 'fast') {
      reasons.push("Quick pacing to keep you engaged");
    } else if (pick.item.pace === 'slow') {
      reasons.push("Thoughtful pacing you'll appreciate");
    }
  }
  
  // Themes reason
  if (pick.item.themes && pick.item.themes.length > 0) {
    const themeStr = pick.item.themes.slice(0, 2).join(' and ');
    reasons.push(`Explores ${themeStr}`);
  }
  
  // Rating reason
  if (pick.item.rating && pick.item.rating >= 8.5) {
    reasons.push(`Critically acclaimed at ${pick.item.rating}/10`);
  } else if (pick.item.rating && pick.item.rating >= 8.0) {
    reasons.push(`Highly rated at ${pick.item.rating}/10`);
  }

  return { item: pick.item, reasons: reasons.slice(0, 3), matchPercent };
}

// Legacy movie interface for backwards compatibility
export interface Movie {
  name: string;
  displayName: string;
  genre: 'action' | 'romance' | 'comedy' | 'thriller' | 'drama' | 'scifi';
  pace: 'fast' | 'slow';
  year?: number;
  tagline?: string;
  synopsis?: string;
  director?: string;
  rating?: number;
  region: 'indian' | 'foreign';
  language?: string;
}

// Keep original movies array for backwards compatibility - will load from old file
export { movies } from './movies-legacy';

export interface SavedResult {
  id: string;
  movie: Movie | ContentItem;
  reasons: string[];
  matchPercent: number;
  date: string;
  mode: QuizMode;
  region: Region;
  contentTypes?: ContentType[];
  scores?: Scores;
  watchedNames?: string[];
  preferredGenre?: string; // User's explicitly selected genre preference
}

export function saveResult(result: Omit<SavedResult, 'id' | 'date'>): SavedResult {
  const saved: SavedResult = {
    ...result,
    id: Date.now().toString(36),
    date: new Date().toISOString(),
  };
  
  const history = getHistory();
  history.unshift(saved);
  localStorage.setItem('sceneva-history', JSON.stringify(history.slice(0, 20)));
  
  return saved;
}

export function getHistory(): SavedResult[] {
  try {
    return JSON.parse(localStorage.getItem('sceneva-history') || '[]');
  } catch {
    return [];
  }
}

export function clearHistory(): void {
  localStorage.removeItem('sceneva-history');
}

// Legacy function
export function recommendMovie(scores: Scores, region: 'indian' | 'foreign') {
  const { movies } = require('./movies-legacy');
  const regionMovies = movies.filter((m: Movie) => m.region === region);
  let bestScore = -1;
  const candidates: { movie: Movie; score: number }[] = [];

  for (const movie of regionMovies) {
    let score = 0;
    if (movie.genre === 'action') score += scores.action * 2;
    if (movie.genre === 'romance') score += scores.romance * 2;
    if (movie.genre === 'comedy') score += scores.comedy * 2;
    if (movie.genre === 'thriller') score += scores.thriller * 2;
    if (movie.genre === 'drama') score += scores.drama * 2;
    if (movie.genre === 'scifi') score += scores.scifi * 2;
    if (movie.pace === 'fast') score += scores.fast;
    if (movie.pace === 'slow') score += scores.slow;

    if (score > bestScore) {
      bestScore = score;
      candidates.length = 0;
      candidates.push({ movie, score });
    } else if (score >= bestScore - 2) {
      candidates.push({ movie, score });
    }
  }

  const pick = candidates[Math.floor(Math.random() * Math.min(candidates.length, 3))];
  const matchPercent = Math.floor(Math.random() * 20) + 80;

  const reasons: string[] = [];
  const genreReasons: Record<string, string> = {
    action: "You crave adrenaline and excitement",
    romance: "You appreciate emotional, heartfelt stories",
    comedy: "You love movies that make you laugh",
    thriller: "You enjoy suspense and psychological depth",
    drama: "You value meaningful, character-driven narratives",
    scifi: "You are drawn to imaginative, thought-provoking worlds",
  };

  if (genreReasons[pick.movie.genre]) {
    reasons.push(genreReasons[pick.movie.genre]);
  }

  return { movie: pick.movie, reasons, matchPercent };
}
