import { ContentType } from './content';

export type QuizMode = 'quick' | 'standard' | 'deep';

export interface Scores {
  action: number;
  romance: number;
  comedy: number;
  thriller: number;
  drama: number;
  scifi: number;
  fantasy: number;
  fast: number;
  slow: number;
}

export const initialScores: Scores = {
  action: 0,
  romance: 0,
  comedy: 0,
  thriller: 0,
  drama: 0,
  scifi: 0,
  fantasy: 0,
  fast: 0,
  slow: 0,
};

export interface QuestionVariant {
  text: string;
  subtext?: string;
}

export interface Question {
  id: number;
  variants: QuestionVariant[]; // Multiple ways to ask the same question
  options: {
    text: string;
    subtext?: string;
    effects: Partial<Scores>;
  }[];
  mode: QuizMode[];
  contentTypes?: ContentType[]; // If specified, only show for these content types
}

// Helper to get random variant
export function getRandomVariant(question: Question): QuestionVariant {
  return question.variants[Math.floor(Math.random() * question.variants.length)];
}

// ========== UNIVERSAL QUESTIONS (All content types) ==========
export const universalQuestions: Question[] = [
  // Quick Mode Questions (3) - Core mood questions
  {
    id: 1,
    variants: [
      { text: "What's your mood tonight?", subtext: "First instinct, don't overthink it" },
      { text: "How are you feeling right now?", subtext: "Go with your gut" },
      { text: "What vibe are you chasing?", subtext: "No wrong answers" },
      { text: "What energy do you need?", subtext: "Trust your instinct" },
    ],
    options: [
      { text: "I want excitement", subtext: "Action, thrills, edge-of-seat stuff", effects: { action: 2, thriller: 1, fast: 1 } },
      { text: "I want to feel something", subtext: "Emotions, love, real stories", effects: { romance: 2, drama: 1, slow: 1 } },
      { text: "I want to escape", subtext: "Laughs, wonder, new worlds", effects: { comedy: 2, scifi: 1, fantasy: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  {
    id: 2,
    variants: [
      { text: "Pick your perfect moment" },
      { text: "What scene gets you hyped?" },
      { text: "Which moment makes your heart race?" },
    ],
    options: [
      { text: "An epic showdown", effects: { action: 2, thriller: 1, fast: 1 } },
      { text: "Two strangers connect", effects: { romance: 2, drama: 1, slow: 1 } },
      { text: "A perfectly timed joke", effects: { comedy: 2, fast: 1 } },
      { text: "A mind-bending twist", effects: { thriller: 2, scifi: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  {
    id: 3,
    variants: [
      { text: "How do you want to feel after?" },
      { text: "What feeling should stay with you?" },
      { text: "When it ends, you want to feel..." },
    ],
    options: [
      { text: "Energized and pumped", effects: { action: 1, comedy: 1, fast: 2 } },
      { text: "Thoughtful and moved", effects: { drama: 2, slow: 2 } },
      { text: "Satisfied and happy", effects: { romance: 1, comedy: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  
  // Standard Mode: +4 questions = 7 total (engaging, variety-focused)
  {
    id: 4,
    variants: [
      { text: "Choose your hero" },
      { text: "Who do you root for?" },
      { text: "Pick your protagonist" },
    ],
    options: [
      { text: "The unstoppable fighter", effects: { action: 2, fast: 1 } },
      { text: "The hopeless romantic", effects: { romance: 2, slow: 1 } },
      { text: "The lovable underdog", effects: { comedy: 1, drama: 1 } },
      { text: "The brilliant mind", effects: { thriller: 1, scifi: 2 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 5,
    variants: [
      { text: "Your attention span right now?", subtext: "Be honest" },
      { text: "How patient are you feeling?", subtext: "No judgment" },
      { text: "Energy level check", subtext: "Be real" },
    ],
    options: [
      { text: "Hook me fast", effects: { fast: 2, comedy: 1 } },
      { text: "I can be patient", effects: { slow: 2, drama: 1 } },
      { text: "Depends on the story", effects: { thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 6,
    variants: [
      { text: "Pick a soundtrack" },
      { text: "What music fits your mood?" },
      { text: "The score should be..." },
    ],
    options: [
      { text: "Epic orchestral", effects: { action: 2, drama: 1, fantasy: 1 } },
      { text: "Melancholic and soft", effects: { romance: 2, slow: 1 } },
      { text: "Upbeat and fun", effects: { comedy: 2, fast: 1 } },
      { text: "Electronic and moody", effects: { scifi: 2, thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 7,
    variants: [
      { text: "Last one: What matters most?" },
      { text: "Final question: Your priority?" },
      { text: "To wrap up: What's key?" },
    ],
    options: [
      { text: "A crowd-pleaser", effects: { action: 1, comedy: 1, fast: 1 } },
      { text: "A hidden gem", effects: { drama: 2, romance: 1, slow: 1 } },
      { text: "Something balanced", effects: { thriller: 1, scifi: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  
  // Deep Mode: +8 questions = 15 total (for deep exploration)
  {
    id: 8,
    variants: [
      { text: "Great stories make you question..." },
      { text: "What themes resonate with you?" },
      { text: "The best narratives explore..." },
    ],
    options: [
      { text: "What you're capable of", effects: { action: 2, drama: 1 } },
      { text: "Who and how you love", effects: { romance: 2, drama: 1 } },
      { text: "If life is too serious", effects: { comedy: 2 } },
      { text: "What reality even is", effects: { scifi: 2, thriller: 2, fantasy: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 9,
    variants: [
      { text: "How do you feel about sad endings?" },
      { text: "Can you handle emotional devastation?" },
      { text: "Ready for potential heartbreak?" },
    ],
    options: [
      { text: "Bring on the tears", effects: { romance: 1, drama: 2, slow: 1 } },
      { text: "Only if it's earned", effects: { thriller: 1, slow: 1 } },
      { text: "I'd rather not", effects: { comedy: 2, action: 1, fast: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 10,
    variants: [
      { text: "Pick an era" },
      { text: "When should this be set?" },
      { text: "Choose your time period" },
    ],
    options: [
      { text: "The distant future", effects: { scifi: 2, action: 1 } },
      { text: "Modern day", effects: { comedy: 1, romance: 1, thriller: 1 } },
      { text: "A historical setting", effects: { romance: 2, drama: 2, slow: 1 } },
      { text: "Somewhere imaginary", effects: { fantasy: 2, action: 1, comedy: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 11,
    variants: [
      { text: "Your visual style preference?" },
      { text: "What aesthetic appeals to you?" },
      { text: "The cinematography should be..." },
    ],
    options: [
      { text: "Sleek and stylized", effects: { action: 1, thriller: 1, fast: 1 } },
      { text: "Warm and intimate", effects: { romance: 2, drama: 1, slow: 1 } },
      { text: "Bright and colorful", effects: { comedy: 2, fast: 1 } },
      { text: "Dark and moody", effects: { thriller: 2, scifi: 1, slow: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 12,
    variants: [
      { text: "What draws you into a story?" },
      { text: "What hooks you immediately?" },
      { text: "The opening should..." },
    ],
    options: [
      { text: "Explosive action sequence", effects: { action: 2, fast: 2 } },
      { text: "Mysterious setup", effects: { thriller: 2, slow: 1 } },
      { text: "Funny introduction", effects: { comedy: 2, fast: 1 } },
      { text: "Beautiful establishing shot", effects: { drama: 1, romance: 1, slow: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 13,
    variants: [
      { text: "Your favorite type of conflict?" },
      { text: "What kind of tension excites you?" },
      { text: "Stakes you care about?" },
    ],
    options: [
      { text: "Good vs. Evil", effects: { action: 2, fantasy: 1 } },
      { text: "Person vs. Society", effects: { drama: 2, thriller: 1 } },
      { text: "Internal struggle", effects: { drama: 2, slow: 1 } },
      { text: "Love conquers all", effects: { romance: 2, comedy: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 14,
    variants: [
      { text: "How important are plot twists?" },
      { text: "Do you like surprises?" },
      { text: "Should it subvert expectations?" },
    ],
    options: [
      { text: "Twist my brain", effects: { thriller: 2, scifi: 1, slow: 1 } },
      { text: "Some surprises are nice", effects: { drama: 1, action: 1 } },
      { text: "I prefer straightforward", effects: { comedy: 1, romance: 1, fast: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 15,
    variants: [
      { text: "Finally: What should this deliver?" },
      { text: "The ultimate goal?" },
      { text: "What's the takeaway?" },
    ],
    options: [
      { text: "Pure entertainment", effects: { action: 1, comedy: 2, fast: 1 } },
      { text: "Emotional depth", effects: { drama: 2, romance: 1, slow: 1 } },
      { text: "Something thought-provoking", effects: { thriller: 1, scifi: 2, slow: 1 } },
    ],
    mode: ['deep'],
  },
];

// ========== ANIME-SPECIFIC QUESTIONS (3 for standard, +2 for deep = 5 total) ==========
export const animeQuestions: Question[] = [
  {
    id: 101,
    variants: [
      { text: "What anime style appeals to you?" },
      { text: "Pick your animation preference" },
      { text: "Visual aesthetic for tonight?" },
    ],
    options: [
      { text: "Fluid, high-action sequences", effects: { action: 2, fast: 2 } },
      { text: "Beautiful, atmospheric art", effects: { drama: 1, romance: 1, slow: 2 } },
      { text: "Expressive character comedy", effects: { comedy: 2, fast: 1 } },
      { text: "Dark, detailed worlds", effects: { thriller: 2, fantasy: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['anime'],
  },
  {
    id: 102,
    variants: [
      { text: "Episode count preference?" },
      { text: "How long a commitment?" },
      { text: "Binge capacity check" },
    ],
    options: [
      { text: "12-24 episodes is perfect", effects: { fast: 1, thriller: 1 } },
      { text: "I can binge hundreds", effects: { action: 1, slow: 1 } },
      { text: "Just give me a movie", effects: { drama: 1, romance: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['anime'],
  },
  {
    id: 103,
    variants: [
      { text: "Anime tropes you enjoy?" },
      { text: "Classic anime elements?" },
      { text: "Favorite anime conventions?" },
    ],
    options: [
      { text: "Tournament arcs", effects: { action: 2, fast: 1 } },
      { text: "School settings", effects: { comedy: 1, romance: 2 } },
      { text: "Found family", effects: { drama: 2, action: 1 } },
      { text: "Isekai (another world)", effects: { fantasy: 2, scifi: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['anime'],
  },
  {
    id: 104,
    variants: [
      { text: "Power systems and abilities?" },
      { text: "Magic system complexity?" },
    ],
    options: [
      { text: "Yes! Explain every detail", effects: { action: 2, scifi: 1 } },
      { text: "Keep it simple", effects: { drama: 1, romance: 1 } },
      { text: "Magic is better unexplained", effects: { fantasy: 2, slow: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['anime'],
  },
  {
    id: 105,
    variants: [
      { text: "Studio preference?" },
      { text: "Which studio vibe?" },
    ],
    options: [
      { text: "Action-focused (MAPPA, ufotable)", effects: { action: 2, fast: 1 } },
      { text: "Artistic (Ghibli, KyoAni)", effects: { drama: 2, slow: 1, romance: 1 } },
      { text: "Comedy masters (Bones, A-1)", effects: { comedy: 2 } },
    ],
    mode: ['deep'],
    contentTypes: ['anime'],
  },
];

// ========== WEB SERIES-SPECIFIC QUESTIONS (3 for standard, +2 for deep = 5 total) ==========
export const webSeriesQuestions: Question[] = [
  {
    id: 201,
    variants: [
      { text: "How many seasons can you commit to?" },
      { text: "Binge capacity?" },
      { text: "Season commitment level?" },
    ],
    options: [
      { text: "One complete story (1 season)", effects: { fast: 1, thriller: 1 } },
      { text: "A few seasons (2-4)", effects: { drama: 1 } },
      { text: "I want an epic saga (5+)", effects: { action: 1, slow: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 202,
    variants: [
      { text: "Cliffhangers - love or hate?" },
      { text: "End-of-episode suspense?" },
      { text: "Can you handle the wait?" },
    ],
    options: [
      { text: "Love the suspense!", effects: { thriller: 2, fast: 1 } },
      { text: "They stress me out", effects: { comedy: 1, romance: 1 } },
      { text: "Only if there's resolution", effects: { drama: 1, slow: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 203,
    variants: [
      { text: "Episodic or serialized?" },
      { text: "Story structure preference?" },
    ],
    options: [
      { text: "Standalone episodes", subtext: "Each episode is complete", effects: { comedy: 2, fast: 1 } },
      { text: "Serialized story", subtext: "One continuous narrative", effects: { thriller: 2, drama: 1, slow: 1 } },
      { text: "Mix of both", effects: { action: 1, drama: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 204,
    variants: [
      { text: "Episode length preference?" },
      { text: "Ideal runtime per episode?" },
    ],
    options: [
      { text: "Quick 20-30 min episodes", effects: { comedy: 2, fast: 2 } },
      { text: "Standard 45-50 min", effects: { drama: 1, thriller: 1 } },
      { text: "Movie-length episodes (1hr+)", effects: { slow: 2, drama: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 205,
    variants: [
      { text: "Streaming platform vibes?" },
      { text: "Production style?" },
    ],
    options: [
      { text: "HBO prestige", effects: { drama: 2, slow: 1 } },
      { text: "Netflix blockbuster", effects: { action: 1, thriller: 1 } },
      { text: "Amazon epic", effects: { fantasy: 1, scifi: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['webseries'],
  },
];

// ========== ANIMATED/CARTOON-SPECIFIC QUESTIONS (3 for standard, +2 for deep = 5 total) ==========
export const animatedQuestions: Question[] = [
  {
    id: 301,
    variants: [
      { text: "Who are you watching with?" },
      { text: "Audience for tonight?" },
      { text: "Solo or group watch?" },
    ],
    options: [
      { text: "Just me - anything goes", effects: { action: 1, drama: 1 } },
      { text: "With kids - keep it fun", effects: { comedy: 2, fast: 1 } },
      { text: "Family movie night", effects: { comedy: 1, drama: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['animated'],
  },
  {
    id: 302,
    variants: [
      { text: "Animation style preference?" },
      { text: "What look do you prefer?" },
    ],
    options: [
      { text: "3D CGI (Pixar style)", effects: { comedy: 1, action: 1 } },
      { text: "Classic 2D animation", effects: { drama: 1, romance: 1 } },
      { text: "Unique artistic style", effects: { drama: 2, slow: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['animated'],
  },
  {
    id: 303,
    variants: [
      { text: "Depth of storytelling?" },
      { text: "How mature should themes be?" },
    ],
    options: [
      { text: "Deep and meaningful", effects: { drama: 2, slow: 1 } },
      { text: "Fun and lighthearted", effects: { comedy: 2, fast: 1 } },
      { text: "Action-packed adventure", effects: { action: 2, fast: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['animated'],
  },
  {
    id: 304,
    variants: [
      { text: "Musical numbers?" },
      { text: "Songs in the film?" },
    ],
    options: [
      { text: "Yes! Sing-along time", effects: { comedy: 1, romance: 1, fast: 1 } },
      { text: "A few is fine", effects: { drama: 1 } },
      { text: "Not really my thing", effects: { action: 2, thriller: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['animated'],
  },
  {
    id: 305,
    variants: [
      { text: "Classic or modern animation?" },
      { text: "Era preference?" },
    ],
    options: [
      { text: "Modern (2010s-now)", effects: { action: 1, comedy: 1 } },
      { text: "Golden age (1990s-2000s)", effects: { comedy: 1, drama: 1 } },
      { text: "Classic (pre-1990)", effects: { drama: 1, slow: 1, romance: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['animated'],
  },
];

// ========== MOVIE-SPECIFIC QUESTIONS (3 for standard, +2 for deep = 5 total) ==========
export const movieQuestions: Question[] = [
  {
    id: 401,
    variants: [
      { text: "How long can you sit still?" },
      { text: "Runtime preference?" },
      { text: "Time available?" },
    ],
    options: [
      { text: "Under 2 hours please", effects: { fast: 2, comedy: 1 } },
      { text: "2-2.5 hours is fine", effects: { drama: 1 } },
      { text: "Epic 3+ hour films? Yes!", effects: { slow: 2, action: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['movies'],
  },
  {
    id: 402,
    variants: [
      { text: "Award-winners or blockbusters?" },
      { text: "Oscars or popcorn?" },
      { text: "Prestige or entertainment?" },
    ],
    options: [
      { text: "Oscar-worthy cinema", effects: { drama: 2, slow: 1 } },
      { text: "Box office hits", effects: { action: 2, fast: 1 } },
      { text: "Cult classics", effects: { comedy: 1, thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['movies'],
  },
  {
    id: 403,
    variants: [
      { text: "Sequel or standalone?" },
      { text: "Part of a franchise?" },
    ],
    options: [
      { text: "Complete story in one film", effects: { drama: 1, slow: 1 } },
      { text: "Part of a series is fine", effects: { action: 2, fantasy: 1 } },
      { text: "Love cinematic universes", effects: { scifi: 1, action: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['movies'],
  },
  {
    id: 404,
    variants: [
      { text: "Star power matters?" },
      { text: "Famous actors or fresh faces?" },
    ],
    options: [
      { text: "A-list stars please", effects: { action: 1, comedy: 1 } },
      { text: "Story matters more", effects: { drama: 2, thriller: 1 } },
      { text: "Fresh faces can be refreshing", effects: { drama: 1, romance: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['movies'],
  },
  {
    id: 405,
    variants: [
      { text: "Based on true story?" },
      { text: "Reality or pure fiction?" },
    ],
    options: [
      { text: "Love true stories", effects: { drama: 2, slow: 1 } },
      { text: "Complete fiction please", effects: { scifi: 1, fantasy: 2, action: 1 } },
      { text: "Inspired by reality is nice", effects: { thriller: 1, drama: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['movies'],
  },
];

// ========== GET QUESTIONS FOR MODE AND CONTENT TYPE ==========
export function getQuestionsForModeAndContent(
  mode: QuizMode, 
  contentTypes: ContentType[]
): Question[] {
  // Start with universal questions filtered by mode
  let questions = universalQuestions.filter(q => q.mode.includes(mode));
  
  // Add content-specific questions
  if (contentTypes.includes('anime')) {
    questions = questions.concat(animeQuestions.filter(q => q.mode.includes(mode)));
  }
  if (contentTypes.includes('webseries')) {
    questions = questions.concat(webSeriesQuestions.filter(q => q.mode.includes(mode)));
  }
  if (contentTypes.includes('animated')) {
    questions = questions.concat(animatedQuestions.filter(q => q.mode.includes(mode)));
  }
  if (contentTypes.includes('movies')) {
    questions = questions.concat(movieQuestions.filter(q => q.mode.includes(mode)));
  }
  
  // Sort by ID to maintain order
  return questions.sort((a, b) => a.id - b.id);
}
