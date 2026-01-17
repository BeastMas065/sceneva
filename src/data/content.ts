// Re-export types
export type { Region, ContentType, ContentItem, Genre, Pace, Mood, Complexity, Violence } from './types';

// Import content from organized files
import { movies } from './movies';
import { anime } from './anime';
import { webseries } from './webseries';
import { animated } from './animated';
import type { ContentItem, ContentType, Region } from './types';

// Re-export for backwards compatibility
export const moviesContent = movies;
export const animeContent = anime;
export const webSeries = webseries;
export const animatedContent = animated;

// Get all content combined
export function getAllContent(): ContentItem[] {
  return [...movies, ...anime, ...webseries, ...animated];
}

// Get content filtered by type and region
export function getContentByType(types: ContentType[], region: Region): ContentItem[] {
  return getAllContent().filter(item => 
    types.includes(item.contentType) && item.region === region
  );
}
