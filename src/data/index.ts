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

// Recommend content based on scores - IMPROVED ALGORITHM
export function recommendContent(
  scores: Scores, 
  region: Region, 
  contentTypes: ContentType[],
  excludeNames: string[] = []
): { item: ContentItem; reasons: string[]; matchPercent: number } {
  // Get all content matching the filters
  let candidates = getAllContent().filter(item => 
    contentTypes.includes(item.contentType) && 
    item.region === region &&
    !excludeNames.includes(item.name)
  );

  if (candidates.length === 0) {
    candidates = getAllContent().filter(item => 
      contentTypes.includes(item.contentType) &&
      !excludeNames.includes(item.name)
    );
  }

  if (candidates.length === 0) {
    candidates = getAllContent().filter(item => !excludeNames.includes(item.name));
  }

  if (candidates.length === 0) {
    candidates = getAllContent();
  }

  // Calculate max possible score for normalization
  const scoreValues = [
    scores.action, scores.romance, scores.comedy, scores.thriller,
    scores.drama, scores.scifi, scores.fantasy, scores.horror || 0
  ];
  const maxGenreScore = Math.max(...scoreValues, 1);

  const scored: { item: ContentItem; score: number; genreMatch: number; paceMatch: number; preferenceMatch: number }[] = [];

  for (const item of candidates) {
    let genreScore = 0;
    let paceScore = 0;
    let preferenceScore = 0;

    // Primary genre matching - weighted by how strongly user prefers this genre
    const genreScoreMap: Record<string, number> = {
      action: scores.action,
      romance: scores.romance,
      comedy: scores.comedy,
      thriller: scores.thriller,
      drama: scores.drama,
      scifi: scores.scifi,
      fantasy: scores.fantasy,
      horror: scores.horror || 0,
      'slice-of-life': (scores.drama + scores.comedy) / 2, // Map slice-of-life
    };
    
    genreScore = (genreScoreMap[item.genre] || 0) * 3;

    // Pace matching - strong multiplier
    if (item.pace === 'fast' && scores.fast > scores.slow) {
      paceScore = (scores.fast - scores.slow) * 2;
    } else if (item.pace === 'slow' && scores.slow > scores.fast) {
      paceScore = (scores.slow - scores.fast) * 2;
    } else if (item.pace === 'fast' && scores.fast < scores.slow) {
      paceScore = (scores.fast - scores.slow); // Negative if mismatch
    } else if (item.pace === 'slow' && scores.slow < scores.fast) {
      paceScore = (scores.slow - scores.fast);
    }

    // Sub-preference matching
    if (scores.emotional > 0) {
      if (['drama', 'romance'].includes(item.genre)) {
        preferenceScore += scores.emotional * 1.5;
      }
    }
    if (scores.intellectual > 0) {
      if (['thriller', 'scifi'].includes(item.genre)) {
        preferenceScore += scores.intellectual * 1.5;
      }
    }
    if (scores.escapist > 0) {
      if (['fantasy', 'scifi', 'action'].includes(item.genre)) {
        preferenceScore += scores.escapist * 1.2;
      }
    }
    if (scores.grounded > 0) {
      if (['drama', 'thriller', 'comedy'].includes(item.genre)) {
        preferenceScore += scores.grounded * 1.2;
      }
      if (['fantasy', 'scifi'].includes(item.genre)) {
        preferenceScore -= scores.grounded * 0.5;
      }
    }

    // Rating bonus - higher rated content gets slight preference
    const ratingBonus = item.rating ? (item.rating - 7) * 0.5 : 0;

    const totalScore = genreScore + paceScore + preferenceScore + ratingBonus;

    scored.push({ 
      item, 
      score: totalScore, 
      genreMatch: genreScore, 
      paceMatch: paceScore,
      preferenceMatch: preferenceScore
    });
  }

  scored.sort((a, b) => b.score - a.score);
  
  // Pick from top 3 with weighted randomness (better scores = higher chance)
  const topCandidates = scored.slice(0, 3);
  const weights = topCandidates.map((c, i) => Math.max(1, c.score) * (3 - i));
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
  
  const pick = topCandidates[pickIndex];
  const bestScore = scored[0]?.score || 1;
  const worstScore = scored[scored.length - 1]?.score || 0;
  const scoreRange = Math.max(bestScore - worstScore, 1);
  
  // Calculate REAL match percent based on how well this item scored
  const normalizedScore = (pick.score - worstScore) / scoreRange;
  const matchPercent = Math.round(65 + normalizedScore * 30); // 65-95% range based on actual match

  // Generate specific reasons based on WHY this matched
  const reasons: string[] = [];
  
  // Genre-specific reasons
  const genreReasons: Record<string, string[]> = {
    action: [
      "Your answers show you crave adrenaline and excitement",
      "You're in the mood for high-octane thrills"
    ],
    romance: [
      "You appreciate emotional, heartfelt connections",
      "Your responses indicate you want something touching"
    ],
    comedy: [
      "You're looking to laugh and unwind",
      "Your answers suggest you need some lighthearted fun"
    ],
    thriller: [
      "You enjoy suspense and keeping guessing",
      "Your preferences lean toward psychological intensity"
    ],
    drama: [
      "You value meaningful, character-driven stories",
      "Your responses show you want depth and emotion"
    ],
    scifi: [
      "You're drawn to imaginative, thought-provoking concepts",
      "Your answers reveal a love for big ideas"
    ],
    fantasy: [
      "You want to escape into magical worlds",
      "Your preferences show you love fantastical adventures"
    ],
    horror: [
      "You're ready to be scared and thrilled",
      "Your answers indicate you enjoy the dark side"
    ],
  };

  const genre = pick.item.genre;
  if (genreReasons[genre]) {
    reasons.push(genreReasons[genre][Math.floor(Math.random() * genreReasons[genre].length)]);
  }

  // Pace-based reason
  if (pick.paceMatch > 0) {
    if (pick.item.pace === 'fast') {
      reasons.push("Matches your desire for quick, engaging pacing");
    } else {
      reasons.push("Aligns with your preference for thoughtful, deliberate storytelling");
    }
  }

  // Rating reason
  if (pick.item.rating && pick.item.rating >= 8.5) {
    reasons.push(`Exceptionally highly rated at ${pick.item.rating}/10`);
  } else if (pick.item.rating && pick.item.rating >= 8.0) {
    reasons.push(`Well-regarded with a ${pick.item.rating}/10 rating`);
  }

  // Preference-based reasons
  if (pick.preferenceMatch > 2) {
    if (scores.emotional > scores.intellectual && scores.emotional > scores.escapist) {
      reasons.push("Perfect for the emotional experience you're seeking");
    } else if (scores.intellectual > scores.emotional && scores.intellectual > scores.escapist) {
      reasons.push("Will give you plenty to think about");
    } else if (scores.escapist > 0) {
      reasons.push("Great for escaping reality for a while");
    }
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
