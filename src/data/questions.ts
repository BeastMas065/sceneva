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
  // Quick Mode Questions (3)
  {
    id: 1,
    variants: [
      { text: "What's your mood tonight?", subtext: "First instinct, don't overthink it" },
      { text: "How are you feeling right now?", subtext: "Go with your gut" },
      { text: "What vibe are you chasing?", subtext: "No wrong answers" },
      { text: "What energy do you need?", subtext: "Trust your instinct" },
      { text: "Set the tone for tonight", subtext: "What feels right?" },
      { text: "What are you craving?", subtext: "Be honest with yourself" },
      { text: "What kind of night is this?", subtext: "Pick what resonates" },
      { text: "Describe your current state", subtext: "There are no wrong answers" },
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
      { text: "Choose a moment that excites you" },
      { text: "Which moment makes your heart race?" },
      { text: "What kind of scene do you live for?" },
      { text: "Picture your ideal scene" },
      { text: "What moment would you rewatch?" },
      { text: "Which scenario speaks to you?" },
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
      { text: "The aftertaste should be..." },
      { text: "What should linger when credits roll?" },
      { text: "How should this leave you?" },
      { text: "The takeaway feeling?" },
      { text: "When you close your eyes after..." },
    ],
    options: [
      { text: "Energized and pumped", effects: { action: 1, comedy: 1, fast: 2 } },
      { text: "Thoughtful and moved", effects: { drama: 2, slow: 2 } },
      { text: "Satisfied and happy", effects: { romance: 1, comedy: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  
  // Standard Mode Additional Questions (+4 = 7 total)
  {
    id: 4,
    variants: [
      { text: "Your ideal watching setting?" },
      { text: "Where are you watching?" },
      { text: "Set the scene for yourself" },
      { text: "Picture your viewing setup" },
      { text: "How are you watching this?" },
      { text: "Describe your watching environment" },
      { text: "What's your setup tonight?" },
      { text: "Where will you be watching?" },
    ],
    options: [
      { text: "Packed theater, opening night", effects: { action: 1, fast: 1 } },
      { text: "Cozy couch, dim lights", effects: { romance: 1, drama: 1, slow: 1 } },
      { text: "With friends, lots of snacks", effects: { comedy: 2 } },
      { text: "Alone, fully focused", effects: { thriller: 1, scifi: 1, slow: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 5,
    variants: [
      { text: "Choose your hero" },
      { text: "Who do you root for?" },
      { text: "Pick your protagonist type" },
      { text: "Which lead character appeals to you?" },
      { text: "Who would you follow?" },
      { text: "Your ideal main character?" },
      { text: "Who should be at the center?" },
      { text: "Which protagonist resonates?" },
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
    id: 6,
    variants: [
      { text: "Your attention span right now?", subtext: "Be honest" },
      { text: "How patient are you feeling?", subtext: "No judgment" },
      { text: "How focused can you be?", subtext: "It's okay to be tired" },
      { text: "Energy level check", subtext: "Be real with yourself" },
      { text: "How much mental energy do you have?", subtext: "Honesty helps" },
      { text: "Focus meter tonight?", subtext: "No shame in being tired" },
      { text: "How alert are you right now?", subtext: "Just checking in" },
      { text: "Rate your concentration ability", subtext: "There's no wrong answer" },
    ],
    options: [
      { text: "Hook me fast", effects: { fast: 2, comedy: 1 } },
      { text: "I can be patient", effects: { slow: 2, drama: 1 } },
      { text: "Depends on the story", effects: { thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 7,
    variants: [
      { text: "Pick a soundtrack" },
      { text: "What music fits your mood?" },
      { text: "Choose your background score" },
      { text: "What should the music feel like?" },
      { text: "Imagine the score playing" },
      { text: "What audio vibe?" },
      { text: "The soundtrack should be..." },
      { text: "What music captures your mood?" },
    ],
    options: [
      { text: "Epic orchestral", effects: { action: 2, drama: 1, fantasy: 1 } },
      { text: "Melancholic and soft", effects: { romance: 2, slow: 1 } },
      { text: "Upbeat and fun", effects: { comedy: 2, fast: 1 } },
      { text: "Electronic and moody", effects: { scifi: 2, thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  
  // Deep Mode Additional Questions (+5 = 12 total)
  {
    id: 8,
    variants: [
      { text: "Great stories make you question..." },
      { text: "What themes resonate with you?" },
      { text: "Stories should make you think about..." },
      { text: "The best narratives explore..." },
      { text: "What do you want to ponder?" },
      { text: "Deep themes that interest you?" },
      { text: "What should it make you reflect on?" },
      { text: "Which existential questions intrigue you?" },
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
      { text: "Sad endings - yes or no?" },
      { text: "Are you okay with crying?" },
      { text: "Emotional damage tolerance?" },
      { text: "Ready for potential heartbreak?" },
      { text: "Can you handle the feels?" },
      { text: "Willing to be emotionally wrecked?" },
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
      { text: "What timeline appeals to you?" },
      { text: "Transport yourself to..." },
      { text: "Which era feels right?" },
      { text: "Time period preference?" },
      { text: "When does the story take place?" },
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
      { text: "How should it look?" },
      { text: "Describe the color palette" },
      { text: "What visual mood?" },
      { text: "The cinematography should be..." },
      { text: "Picture the look and feel" },
      { text: "What's the visual vibe?" },
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
      { text: "Last one: What are you hoping for?" },
      { text: "Final question: What do you seek?" },
      { text: "To wrap up: What's your goal?" },
      { text: "One more thing: What matters most?" },
      { text: "Finally: What should this deliver?" },
      { text: "Last call: Your priority?" },
      { text: "Wrapping up: The main goal?" },
      { text: "Before we finish: What's key?" },
    ],
    options: [
      { text: "A crowd-pleaser", effects: { action: 1, comedy: 1, fast: 1 } },
      { text: "A hidden gem", effects: { drama: 2, romance: 1, slow: 1 } },
      { text: "Something balanced", effects: { thriller: 1, scifi: 1 } },
    ],
    mode: ['deep'],
  },
  // New universal questions for more variety
  {
    id: 13,
    variants: [
      { text: "What draws you into a story?" },
      { text: "What hooks you immediately?" },
      { text: "First scene priorities?" },
      { text: "What grabs your attention?" },
      { text: "The opening should..." },
      { text: "How should it start?" },
    ],
    options: [
      { text: "Explosive action sequence", effects: { action: 2, fast: 2 } },
      { text: "Mysterious setup", effects: { thriller: 2, slow: 1 } },
      { text: "Funny introduction", effects: { comedy: 2, fast: 1 } },
      { text: "Beautiful establishing shot", effects: { drama: 1, romance: 1, slow: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 14,
    variants: [
      { text: "Your favorite type of conflict?" },
      { text: "What kind of tension excites you?" },
      { text: "The central struggle should be..." },
      { text: "What conflict drives the story?" },
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
    id: 15,
    variants: [
      { text: "How important are plot twists?" },
      { text: "Do you like surprises?" },
      { text: "Predictability or shock value?" },
      { text: "Should it subvert expectations?" },
    ],
    options: [
      { text: "Twist my brain", effects: { thriller: 2, scifi: 1, slow: 1 } },
      { text: "Some surprises are nice", effects: { drama: 1, action: 1 } },
      { text: "I prefer straightforward stories", effects: { comedy: 1, romance: 1, fast: 1 } },
    ],
    mode: ['deep'],
  },
];

// ========== ANIME-SPECIFIC QUESTIONS ==========
export const animeQuestions: Question[] = [
  {
    id: 101,
    variants: [
      { text: "What anime style appeals to you?" },
      { text: "Pick your animation preference" },
      { text: "What visual style do you prefer?" },
      { text: "Which art direction excites you?" },
      { text: "Animation quality priority?" },
      { text: "What should the art look like?" },
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
      { text: "How do you feel about long-running series?" },
      { text: "Episode count preference?" },
      { text: "Short or long commitment?" },
      { text: "How many episodes can you handle?" },
      { text: "Series length tolerance?" },
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
      { text: "Power systems and abilities?" },
      { text: "Do you like complex power mechanics?" },
      { text: "Magic system complexity?" },
      { text: "How detailed should abilities be?" },
      { text: "Power scaling preference?" },
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
    id: 104,
    variants: [
      { text: "Anime tropes you enjoy?" },
      { text: "Classic anime elements?" },
      { text: "Which clichés do you appreciate?" },
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
    id: 105,
    variants: [
      { text: "Sub or dub?" },
      { text: "Original audio or dubbed?" },
      { text: "Language preference?" },
      { text: "How do you watch anime?" },
    ],
    options: [
      { text: "Subtitles always", subtext: "Original voice acting matters", effects: { drama: 1, slow: 1 } },
      { text: "Dubs are fine", subtext: "I want to relax", effects: { comedy: 1, fast: 1 } },
      { text: "Depends on the show", effects: { action: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['anime'],
  },
  {
    id: 106,
    variants: [
      { text: "Studio preference?" },
      { text: "Animation house you trust?" },
      { text: "Which studio vibe?" },
    ],
    options: [
      { text: "Action-focused (MAPPA, ufotable)", effects: { action: 2, fast: 1 } },
      { text: "Artistic (Ghibli, KyoAni)", effects: { drama: 2, slow: 1, romance: 1 } },
      { text: "Comedy masters (Bones, A-1)", effects: { comedy: 2 } },
      { text: "I don't follow studios", effects: { thriller: 1 } },
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
      { text: "How many seasons can you commit to?" },
      { text: "What's your binge capacity?" },
      { text: "How deep do you want to go?" },
      { text: "Season commitment level?" },
      { text: "How invested can you get?" },
      { text: "Long-term viewing potential?" },
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
      { text: "Cliffhangers - love them or hate them?" },
      { text: "How do you feel about cliffhangers?" },
      { text: "End-of-episode suspense?" },
      { text: "Cliffhanger tolerance level?" },
      { text: "Can you handle the wait?" },
    ],
    options: [
      { text: "Love the suspense!", effects: { thriller: 2, fast: 1 } },
      { text: "They stress me out", effects: { comedy: 1, romance: 1 } },
      { text: "Only if there is resolution", effects: { drama: 1, slow: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 203,
    variants: [
      { text: "Episode length preference?" },
      { text: "How long should each episode be?" },
      { text: "Ideal runtime per episode?" },
      { text: "Episode duration sweet spot?" },
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
    id: 204,
    variants: [
      { text: "What type of series format?" },
      { text: "Episodic or serialized?" },
      { text: "Story structure preference?" },
      { text: "How connected should episodes be?" },
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
    id: 205,
    variants: [
      { text: "Ensemble cast or single lead?" },
      { text: "Character focus preference?" },
      { text: "How many main characters?" },
      { text: "Solo protagonist or group dynamics?" },
    ],
    options: [
      { text: "One central character", effects: { drama: 1, thriller: 1 } },
      { text: "Ensemble with multiple leads", effects: { comedy: 1, action: 1 } },
      { text: "Rotating focus", effects: { drama: 2, slow: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['webseries'],
  },
  {
    id: 206,
    variants: [
      { text: "Streaming platform vibes?" },
      { text: "What style of production?" },
      { text: "Production value expectations?" },
    ],
    options: [
      { text: "HBO prestige", effects: { drama: 2, slow: 1 } },
      { text: "Netflix blockbuster", effects: { action: 1, thriller: 1 } },
      { text: "Amazon epic", effects: { fantasy: 1, scifi: 1 } },
      { text: "Apple polish", effects: { drama: 1, romance: 1 } },
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
      { text: "Who are you watching with?" },
      { text: "Is this a family watch?" },
      { text: "Audience for tonight?" },
      { text: "Who's joining the viewing?" },
      { text: "Solo or group watch?" },
      { text: "What's the audience?" },
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
      { text: "Visual style for animation?" },
      { text: "Art direction preference?" },
      { text: "Which animation technique?" },
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
      { text: "Musical numbers?" },
      { text: "How do you feel about songs?" },
      { text: "Singing tolerance level?" },
      { text: "Musical moments?" },
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
    id: 304,
    variants: [
      { text: "Talking animals?" },
      { text: "Non-human protagonists?" },
      { text: "Anthropomorphic characters?" },
      { text: "Human or animal leads?" },
    ],
    options: [
      { text: "Love them!", effects: { comedy: 2, fast: 1 } },
      { text: "Depends on the story", effects: { drama: 1, action: 1 } },
      { text: "Prefer human characters", effects: { drama: 1, romance: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['animated'],
  },
  {
    id: 305,
    variants: [
      { text: "Adult themes or keep it light?" },
      { text: "Depth of storytelling?" },
      { text: "Emotional complexity level?" },
      { text: "How mature should the themes be?" },
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
    id: 306,
    variants: [
      { text: "Classic or modern animation?" },
      { text: "Era preference?" },
      { text: "Vintage or contemporary?" },
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

// ========== MOVIE-SPECIFIC QUESTIONS ==========
export const movieQuestions: Question[] = [
  {
    id: 401,
    variants: [
      { text: "How long can you sit still?" },
      { text: "What runtime works for you?" },
      { text: "Time available?" },
      { text: "Movie length preference?" },
      { text: "Runtime tolerance?" },
      { text: "How much time do you have?" },
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
      { text: "Critics' choice or crowd favorite?" },
      { text: "Oscars or popcorn?" },
      { text: "Prestige or entertainment?" },
      { text: "Art house or mainstream?" },
    ],
    options: [
      { text: "Oscar-worthy cinema", effects: { drama: 2, slow: 1 } },
      { text: "Box office hits", effects: { action: 2, fast: 1 } },
      { text: "Cult classics", effects: { comedy: 1, thriller: 1 } },
      { text: "Whatever is good", effects: { romance: 1 } },
    ],
    mode: ['standard', 'deep'],
    contentTypes: ['movies'],
  },
  {
    id: 403,
    variants: [
      { text: "Sequel or standalone?" },
      { text: "Part of a franchise?" },
      { text: "Connected universe or one-off?" },
      { text: "Do you want more after?" },
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
      { text: "Celebrity cast or unknowns?" },
      { text: "Do you follow specific actors?" },
    ],
    options: [
      { text: "A-list stars please", effects: { action: 1, comedy: 1 } },
      { text: "Story matters more than cast", effects: { drama: 2, thriller: 1 } },
      { text: "Fresh faces can be refreshing", effects: { drama: 1, romance: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['movies'],
  },
  {
    id: 405,
    variants: [
      { text: "Director style preference?" },
      { text: "Auteur or crowd-pleaser?" },
      { text: "Distinct vision or accessible?" },
    ],
    options: [
      { text: "Visionary auteur", effects: { drama: 2, slow: 1, scifi: 1 } },
      { text: "Crowd-pleasing blockbuster director", effects: { action: 2, fast: 1 } },
      { text: "Indie sensibilities", effects: { drama: 1, comedy: 1, romance: 1 } },
    ],
    mode: ['deep'],
    contentTypes: ['movies'],
  },
  {
    id: 406,
    variants: [
      { text: "Based on true story?" },
      { text: "Reality or pure fiction?" },
      { text: "Real events interest you?" },
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
