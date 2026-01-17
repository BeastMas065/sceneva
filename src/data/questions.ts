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
  horror: number;
  fast: number;
  slow: number;
  // Sub-preferences for better matching
  emotional: number;
  intellectual: number;
  escapist: number;
  grounded: number;
}

export const initialScores: Scores = {
  action: 0,
  romance: 0,
  comedy: 0,
  thriller: 0,
  drama: 0,
  scifi: 0,
  fantasy: 0,
  horror: 0,
  fast: 0,
  slow: 0,
  emotional: 0,
  intellectual: 0,
  escapist: 0,
  grounded: 0,
};

export interface QuestionVariant {
  text: string;
  subtext?: string;
}

export interface Question {
  id: number;
  variants: QuestionVariant[];
  options: {
    text: string;
    subtext?: string;
    effects: Partial<Scores>;
  }[];
  mode: QuizMode[];
  contentTypes?: ContentType[];
}

export function getRandomVariant(question: Question): QuestionVariant {
  return question.variants[Math.floor(Math.random() * question.variants.length)];
}

// ========== UNIVERSAL QUESTIONS ==========
export const universalQuestions: Question[] = [
  // Quick Mode Questions (3) - Core differentiating questions
  {
    id: 1,
    variants: [
      { text: "It's Friday night. You're scrolling. What makes you stop?", subtext: "Trust your instinct" },
      { text: "What thumbnail would make you click instantly?", subtext: "First gut reaction" },
    ],
    options: [
      { text: "Explosions, fight scenes, chaos", subtext: "Pure adrenaline", effects: { action: 3, fast: 2, thriller: 1, escapist: 1 } },
      { text: "Two people about to kiss", subtext: "Romantic tension", effects: { romance: 3, drama: 1, emotional: 2, slow: 1 } },
      { text: "Someone laughing uncontrollably", subtext: "Good vibes only", effects: { comedy: 3, fast: 1, escapist: 1 } },
      { text: "A dark room, someone scared", subtext: "Mystery awaits", effects: { thriller: 3, horror: 1, slow: 1, intellectual: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  {
    id: 2,
    variants: [
      { text: "Your brain right now needs...", subtext: "Be honest with yourself" },
      { text: "What would hit different tonight?" },
    ],
    options: [
      { text: "To completely shut off", subtext: "No thinking required", effects: { action: 2, comedy: 2, fast: 2, escapist: 2 } },
      { text: "To feel deeply", subtext: "Bring on the emotions", effects: { drama: 3, romance: 2, slow: 1, emotional: 3 } },
      { text: "To be constantly guessing", subtext: "Keep me engaged", effects: { thriller: 3, scifi: 1, intellectual: 2 } },
      { text: "To escape to another world", subtext: "Take me somewhere else", effects: { fantasy: 3, scifi: 2, escapist: 3 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  {
    id: 3,
    variants: [
      { text: "Pick your poison", subtext: "The ending you need" },
      { text: "After watching, you want to feel..." },
    ],
    options: [
      { text: "Pumped, energized, hyped", effects: { action: 2, comedy: 1, fast: 3, escapist: 1 } },
      { text: "Satisfied, warm, content", effects: { romance: 2, comedy: 1, drama: 1, emotional: 2 } },
      { text: "Devastated in the best way", effects: { drama: 3, romance: 1, slow: 2, emotional: 3 } },
      { text: "Mind blown, still processing", effects: { thriller: 2, scifi: 2, intellectual: 3, slow: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  
  // Standard Mode: +4 questions = 7 total
  {
    id: 4,
    variants: [
      { text: "Your ideal main character is...", subtext: "Who do you see yourself in?" },
    ],
    options: [
      { text: "The one who punches first", subtext: "Actions speak louder", effects: { action: 3, fast: 1, grounded: -1 } },
      { text: "The one with the broken heart", subtext: "Emotionally complex", effects: { romance: 2, drama: 2, emotional: 2 } },
      { text: "The one making everyone laugh", subtext: "Comic relief king/queen", effects: { comedy: 3, fast: 1 } },
      { text: "The one solving the mystery", subtext: "Always thinking", effects: { thriller: 2, scifi: 1, intellectual: 3 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 5,
    variants: [
      { text: "How patient are you feeling?", subtext: "Be realistic" },
      { text: "Attention span check", subtext: "No judgment here" },
    ],
    options: [
      { text: "Hook me in 5 minutes or I'm out", effects: { fast: 3, action: 1, comedy: 1, slow: -2 } },
      { text: "I can wait for a good payoff", effects: { slow: 3, drama: 2, fast: -1 } },
      { text: "Depends on how intriguing it is", effects: { thriller: 2, intellectual: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 6,
    variants: [
      { text: "Which world would you live in?", subtext: "Setting matters" },
    ],
    options: [
      { text: "Grounded in reality", subtext: "Real cities, real problems", effects: { drama: 2, thriller: 1, grounded: 3, fantasy: -1 } },
      { text: "Slightly heightened reality", subtext: "Real but cinematic", effects: { action: 2, comedy: 1, romance: 1 } },
      { text: "Completely fantastical", subtext: "Dragons, magic, aliens", effects: { fantasy: 3, scifi: 2, escapist: 2, grounded: -2 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 7,
    variants: [
      { text: "What do you want to walk away with?" },
    ],
    options: [
      { text: "A good time, nothing more", subtext: "Pure entertainment", effects: { comedy: 2, action: 2, fast: 1, escapist: 1 } },
      { text: "A new favorite character", subtext: "Someone to root for", effects: { drama: 2, romance: 1, emotional: 2 } },
      { text: "Something to discuss", subtext: "Talking points", effects: { thriller: 2, scifi: 1, drama: 1, intellectual: 2 } },
    ],
    mode: ['standard', 'deep'],
  },
  
  // Deep Mode: +6 questions = 13 total
  {
    id: 8,
    variants: [
      { text: "Violence level tolerance?", subtext: "Honestly" },
    ],
    options: [
      { text: "Bring the blood and chaos", effects: { action: 3, thriller: 2, horror: 1 } },
      { text: "Suggestive but not graphic", effects: { thriller: 1, drama: 1 } },
      { text: "Keep it minimal please", effects: { romance: 2, comedy: 2, drama: 1, action: -2 } },
    ],
    mode: ['deep'],
  },
  {
    id: 9,
    variants: [
      { text: "Sad endings: yes or no?", subtext: "The real question" },
    ],
    options: [
      { text: "Destroy me emotionally", effects: { drama: 3, romance: 1, emotional: 3, slow: 1 } },
      { text: "Only if it's meaningful", effects: { drama: 1, intellectual: 1, slow: 1 } },
      { text: "I need a happy ending", effects: { comedy: 2, romance: 1, action: 1, drama: -1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 10,
    variants: [
      { text: "Pick a time period", subtext: "When should this be set?" },
    ],
    options: [
      { text: "Future / Sci-fi setting", effects: { scifi: 3, action: 1, intellectual: 1 } },
      { text: "Present day", effects: { comedy: 1, romance: 1, thriller: 1, grounded: 2 } },
      { text: "Historical / Period piece", effects: { drama: 2, romance: 2, slow: 2 } },
      { text: "Timeless fantasy realm", effects: { fantasy: 3, action: 1, escapist: 2 } },
    ],
    mode: ['deep'],
  },
  {
    id: 11,
    variants: [
      { text: "What music should be playing?", subtext: "The soundtrack vibe" },
    ],
    options: [
      { text: "Epic orchestral swells", effects: { action: 2, fantasy: 2, drama: 1, emotional: 1 } },
      { text: "Indie, melancholic acoustic", effects: { romance: 2, drama: 2, slow: 2 } },
      { text: "Upbeat, catchy tunes", effects: { comedy: 3, fast: 2 } },
      { text: "Synthy, electronic, moody", effects: { scifi: 2, thriller: 2, intellectual: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 12,
    variants: [
      { text: "How complex should the plot be?", subtext: "Twists and turns?" },
    ],
    options: [
      { text: "Simple and straightforward", effects: { comedy: 2, action: 1, romance: 1, fast: 2, intellectual: -1 } },
      { text: "Some unexpected twists", effects: { thriller: 2, drama: 1 } },
      { text: "Make me rewatch to understand", effects: { scifi: 2, thriller: 2, intellectual: 3, slow: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 13,
    variants: [
      { text: "Last question: What matters most to you?", subtext: "The deciding factor" },
    ],
    options: [
      { text: "Spectacular visuals and action", effects: { action: 3, scifi: 1, fantasy: 1, fast: 1 } },
      { text: "Deeply relatable characters", effects: { drama: 3, romance: 2, emotional: 2 } },
      { text: "A story that surprises me", effects: { thriller: 3, intellectual: 2 } },
      { text: "Making me laugh or feel good", effects: { comedy: 3, romance: 1, escapist: 1 } },
    ],
    mode: ['deep'],
  },
];

// ========== ANIME-SPECIFIC QUESTIONS ==========
export const animeQuestions: Question[] = [
  {
    id: 101,
    variants: [
      { text: "What anime visual style appeals to you?" },
    ],
    options: [
      { text: "Sakuga fights - fluid animation", subtext: "Action choreography", effects: { action: 3, fast: 2 } },
      { text: "Atmospheric, beautiful backgrounds", subtext: "Studio Ghibli vibes", effects: { drama: 2, fantasy: 1, slow: 2, emotional: 1 } },
      { text: "Expressive, exaggerated comedy", subtext: "Funny faces galore", effects: { comedy: 3, fast: 1 } },
      { text: "Dark, detailed, gritty art", subtext: "Mature aesthetics", effects: { thriller: 2, horror: 1, drama: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['anime'],
  },
  {
    id: 102,
    variants: [
      { text: "How many episodes can you commit to?" },
    ],
    options: [
      { text: "12-24 episodes max", subtext: "Tight, complete story", effects: { thriller: 1, drama: 1, fast: 1 } },
      { text: "50-100 episodes is fine", subtext: "Let it build", effects: { action: 1, drama: 1, emotional: 1 } },
      { text: "200+ episodes? Let's go", subtext: "Long-running epics", effects: { action: 2, slow: 1, fantasy: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['anime'],
  },
  {
    id: 103,
    variants: [
      { text: "Which anime trope do you enjoy?" },
    ],
    options: [
      { text: "Tournament arcs", effects: { action: 3, fast: 1 } },
      { text: "School romance", effects: { romance: 3, comedy: 1 } },
      { text: "Found family / Nakama power", effects: { drama: 2, action: 1, emotional: 2 } },
      { text: "Isekai (transported to another world)", effects: { fantasy: 3, escapist: 2 } },
    ],
    mode: ['deep'],
    contentTypes: ['anime'],
  },
];

// ========== WEB SERIES-SPECIFIC QUESTIONS ==========
export const webSeriesQuestions: Question[] = [
  {
    id: 201,
    variants: [
      { text: "Binge or weekly release preference?" },
    ],
    options: [
      { text: "All at once - full binge", subtext: "One sitting", effects: { fast: 2, action: 1, thriller: 1 } },
      { text: "I prefer weekly anticipation", subtext: "Savor it slowly", effects: { slow: 2, drama: 1 } },
      { text: "Doesn't matter if it's good", effects: { drama: 1, thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 202,
    variants: [
      { text: "How do you feel about cliffhangers?" },
    ],
    options: [
      { text: "Love them - bring the suspense!", effects: { thriller: 3, fast: 1 } },
      { text: "They stress me out", effects: { comedy: 2, romance: 1 } },
      { text: "Only if resolved well", effects: { drama: 2, slow: 1, intellectual: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 203,
    variants: [
      { text: "Episodic or serialized storytelling?" },
    ],
    options: [
      { text: "Standalone episodes", subtext: "Each one complete", effects: { comedy: 3, fast: 1 } },
      { text: "Continuous serialized story", subtext: "One big narrative", effects: { thriller: 2, drama: 2, slow: 1 } },
      { text: "Hybrid - case of the week + ongoing", effects: { action: 1, drama: 1, thriller: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['webseries'],
  },
];

// ========== ANIMATED/CARTOON-SPECIFIC QUESTIONS ==========
export const animatedQuestions: Question[] = [
  {
    id: 301,
    variants: [
      { text: "Who's watching with you?" },
    ],
    options: [
      { text: "Just me - anything goes", effects: { action: 1, drama: 2, thriller: 1 } },
      { text: "Family with young kids", effects: { comedy: 3, fast: 1, action: -1, thriller: -2 } },
      { text: "Mixed ages - keep it universal", effects: { comedy: 2, drama: 1, emotional: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['animated'],
  },
  {
    id: 302,
    variants: [
      { text: "Animation style preference?" },
    ],
    options: [
      { text: "3D CGI (Pixar/DreamWorks style)", effects: { comedy: 1, action: 1, fast: 1 } },
      { text: "Classic 2D hand-drawn", effects: { drama: 1, romance: 1, emotional: 1 } },
      { text: "Unique artistic vision", subtext: "Spider-Verse, Into the Wild", effects: { drama: 2, scifi: 1, intellectual: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['animated'],
  },
  {
    id: 303,
    variants: [
      { text: "Emotional depth level?" },
    ],
    options: [
      { text: "Make me cry (in a good way)", effects: { drama: 3, emotional: 3, slow: 1 } },
      { text: "Fun and lighthearted", effects: { comedy: 3, fast: 2, escapist: 1 } },
      { text: "Action-packed adventure", effects: { action: 3, fantasy: 1, fast: 2 } },
    ],
    mode: ['deep'],
    contentTypes: ['animated'],
  },
];

// ========== MOVIE-SPECIFIC QUESTIONS ==========
export const movieQuestions: Question[] = [
  {
    id: 401,
    variants: [
      { text: "Runtime tolerance?" },
    ],
    options: [
      { text: "Under 2 hours, tight and focused", effects: { fast: 2, comedy: 1, action: 1 } },
      { text: "2-2.5 hours is the sweet spot", effects: { drama: 1, thriller: 1 } },
      { text: "3+ hour epics? Yes please", effects: { slow: 3, drama: 2, fantasy: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['movies'],
  },
  {
    id: 402,
    variants: [
      { text: "Critically acclaimed or crowd pleaser?" },
    ],
    options: [
      { text: "Award-winning cinema", subtext: "Oscars, festivals", effects: { drama: 3, slow: 2, intellectual: 2 } },
      { text: "Box office blockbusters", subtext: "Popular for a reason", effects: { action: 3, fast: 2, escapist: 1 } },
      { text: "Hidden gems and cult classics", effects: { thriller: 1, comedy: 1, drama: 1, intellectual: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['movies'],
  },
  {
    id: 403,
    variants: [
      { text: "Franchise or standalone?" },
    ],
    options: [
      { text: "Complete story in one film", effects: { drama: 2, slow: 1, grounded: 1 } },
      { text: "Part of a series is fine", effects: { action: 2, fantasy: 1, scifi: 1 } },
      { text: "Cinematic universes are my thing", effects: { action: 2, scifi: 1, fantasy: 1, escapist: 1 } },
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
  let questions = universalQuestions.filter(q => q.mode.includes(mode));
  
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
  
  return questions.sort((a, b) => a.id - b.id);
}
