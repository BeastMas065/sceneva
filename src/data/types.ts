// ========== CORE TYPES ==========

export type Region = 'indian' | 'international' | 'japanese' | 'korean';
export type ContentType = 'movies' | 'anime' | 'webseries' | 'animated';

export type Genre = 
  | 'action' 
  | 'romance' 
  | 'comedy' 
  | 'thriller' 
  | 'drama' 
  | 'scifi' 
  | 'fantasy' 
  | 'horror' 
  | 'slice-of-life';

export type Pace = 'fast' | 'slow' | 'medium';

export type Mood = 
  | 'dark' 
  | 'light' 
  | 'emotional' 
  | 'intense' 
  | 'uplifting' 
  | 'melancholic' 
  | 'thrilling' 
  | 'cozy';

export type Complexity = 'simple' | 'moderate' | 'complex';

export type Violence = 'none' | 'mild' | 'moderate' | 'graphic';

// ========== CONTENT ITEM INTERFACE ==========
export interface ContentItem {
  // Required fields
  name: string;                   // Internal identifier (no spaces)
  displayName: string;            // Human-readable title
  genre: Genre;                   // Primary genre
  secondaryGenres?: Genre[];      // Additional genres for better matching
  pace: Pace;                     // Story pacing
  region: Region;                 // Content origin
  contentType: ContentType;       // Type of content
  
  // Descriptive fields
  year: number;                   // Release year
  tagline: string;                // Short catchy phrase
  synopsis: string;               // Brief plot description
  
  // Credits
  director: string;               // Director/Creator name
  rating: number;                 // IMDb/MAL rating (1-10)
  
  // Enhanced matching properties
  mood: Mood[];                   // Overall mood/atmosphere
  themes: string[];               // Key themes (e.g., "revenge", "love", "survival")
  complexity: Complexity;         // Plot complexity
  violence: Violence;             // Violence level
  emotionalIntensity: 1 | 2 | 3 | 4 | 5;  // How emotionally heavy (1=light, 5=devastating)
  
  // Optional fields
  language?: string;              // Primary language
  seasons?: number;               // For series
  runtime?: number;               // Runtime in minutes (for movies)
  isComplete?: boolean;           // Is the series finished?
}
