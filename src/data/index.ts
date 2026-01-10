// Re-export everything for backwards compatibility
export * from './content';
export * from './questions';

// Keep the original movies export and types
export type Region = 'indian' | 'international' | 'japanese' | 'korean';
export type QuizMode = 'quick' | 'standard' | 'deep';
export type ContentType = 'movies' | 'anime' | 'webseries' | 'animated';

// Import from new files
import { ContentItem, getAllContent, getContentByType, webSeries, animatedContent, animeContent } from './content';
import type { Scores } from './questions';
import { initialScores, getQuestionsForModeAndContent, getRandomVariant } from './questions';
export type { Scores };
export { initialScores, getQuestionsForModeAndContent, getRandomVariant };

// Legacy support - get questions for mode (uses movies as default)
export function getQuestionsForMode(mode: QuizMode) {
  return getQuestionsForModeAndContent(mode, ['movies']);
}

// Recommend content based on scores
export function recommendContent(
  scores: Scores, 
  region: Region, 
  contentTypes: ('movies' | 'anime' | 'webseries' | 'animated')[]
): { item: ContentItem; reasons: string[]; matchPercent: number } {
  // Get all content matching the filters
  let candidates = getAllContent().filter(item => 
    contentTypes.includes(item.contentType) && item.region === region
  );

  if (candidates.length === 0) {
    // Fallback to any content of the type
    candidates = getAllContent().filter(item => contentTypes.includes(item.contentType));
  }

  const scored: { item: ContentItem; score: number }[] = [];

  for (const item of candidates) {
    let score = 0;
    if (item.genre === 'action') score += scores.action * 2;
    if (item.genre === 'romance') score += scores.romance * 2;
    if (item.genre === 'comedy') score += scores.comedy * 2;
    if (item.genre === 'thriller') score += scores.thriller * 2;
    if (item.genre === 'drama') score += scores.drama * 2;
    if (item.genre === 'scifi') score += scores.scifi * 2;
    if (item.genre === 'fantasy') score += (scores.fantasy || 0) * 2;
    if (item.pace === 'fast') score += scores.fast;
    if (item.pace === 'slow') score += scores.slow;
    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  const topCandidates = scored.slice(0, 5);
  const pick = topCandidates[Math.floor(Math.random() * topCandidates.length)];

  const maxScore = Math.max(...Object.values(scores)) * 3;
  const matchPercent = Math.floor(Math.random() * 20) + 80; // 80-99%

  const reasons: string[] = [];
  const genreReasons: Record<string, string> = {
    action: "You crave adrenaline and excitement",
    romance: "You appreciate emotional, heartfelt stories",
    comedy: "You love content that makes you laugh",
    thriller: "You enjoy suspense and psychological depth",
    drama: "You value meaningful, character-driven narratives",
    scifi: "You are drawn to imaginative, thought-provoking worlds",
    fantasy: "You love magical and fantastical adventures",
  };

  if (genreReasons[pick.item.genre]) {
    reasons.push(genreReasons[pick.item.genre]);
  }
  if (pick.item.rating && pick.item.rating >= 8.0) {
    reasons.push(`Highly rated with ${pick.item.rating}/10`);
  }
  if (pick.item.pace === 'fast' && scores.fast > scores.slow) {
    reasons.push("Matches your preference for fast-paced storytelling");
  }

  return { item: pick.item, reasons, matchPercent };
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
  contentTypes?: ('movies' | 'anime' | 'webseries' | 'animated')[];
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
