export interface Movie {
  name: string;
  displayName: string;
  genre: 'action' | 'romance' | 'comedy' | 'thriller' | 'drama' | 'scifi';
  pace: 'fast' | 'slow';
  year?: number;
  tagline?: string;
  poster?: string;
  director?: string;
  rating?: number;
}

export const movies: Movie[] = [
  // Action - Fast
  { name: "Avengers", displayName: "The Avengers", genre: "action", pace: "fast", year: 2012, tagline: "Some assembly required", director: "Joss Whedon", rating: 8.0 },
  { name: "Inception", displayName: "Inception", genre: "action", pace: "fast", year: 2010, tagline: "Your mind is the scene of the crime", director: "Christopher Nolan", rating: 8.8 },
  { name: "MadMax", displayName: "Mad Max: Fury Road", genre: "action", pace: "fast", year: 2015, tagline: "What a lovely day", director: "George Miller", rating: 8.1 },
  { name: "JohnWick", displayName: "John Wick", genre: "action", pace: "fast", year: 2014, tagline: "Don't set him off", director: "Chad Stahelski", rating: 7.4 },
  { name: "DieHard", displayName: "Die Hard", genre: "action", pace: "fast", year: 1988, tagline: "Yippee-ki-yay", director: "John McTiernan", rating: 8.2 },
  { name: "DarkKnight", displayName: "The Dark Knight", genre: "action", pace: "fast", year: 2008, tagline: "Why so serious?", director: "Christopher Nolan", rating: 9.0 },
  { name: "TopGun", displayName: "Top Gun: Maverick", genre: "action", pace: "fast", year: 2022, tagline: "Feel the need for speed", director: "Joseph Kosinski", rating: 8.3 },
  { name: "Mission", displayName: "Mission: Impossible", genre: "action", pace: "fast", year: 2023, tagline: "Your mission, should you choose to accept it", director: "Christopher McQuarrie", rating: 7.8 },
  
  // Action - Slow
  { name: "Gladiator", displayName: "Gladiator", genre: "action", pace: "slow", year: 2000, tagline: "What we do in life echoes in eternity", director: "Ridley Scott", rating: 8.5 },
  { name: "Interstellar", displayName: "Interstellar", genre: "action", pace: "slow", year: 2014, tagline: "Mankind was born on Earth. It was never meant to die here", director: "Christopher Nolan", rating: 8.7 },
  { name: "Dune", displayName: "Dune", genre: "action", pace: "slow", year: 2021, tagline: "Beyond fear, destiny awaits", director: "Denis Villeneuve", rating: 8.0 },
  { name: "Oppenheimer", displayName: "Oppenheimer", genre: "action", pace: "slow", year: 2023, tagline: "The world forever changes", director: "Christopher Nolan", rating: 8.4 },
  
  // Romance - Slow
  { name: "Titanic", displayName: "Titanic", genre: "romance", pace: "slow", year: 1997, tagline: "Nothing on Earth could come between them", director: "James Cameron", rating: 7.9 },
  { name: "Notebook", displayName: "The Notebook", genre: "romance", pace: "slow", year: 2004, tagline: "Behind every great love is a great story", director: "Nick Cassavetes", rating: 7.8 },
  { name: "LaLaLand", displayName: "La La Land", genre: "romance", pace: "slow", year: 2016, tagline: "Here's to the fools who dream", director: "Damien Chazelle", rating: 8.0 },
  { name: "PridePrejudice", displayName: "Pride & Prejudice", genre: "romance", pace: "slow", year: 2005, tagline: "Sometimes the last person on earth you want to be with...", director: "Joe Wright", rating: 7.8 },
  { name: "BeforeSunrise", displayName: "Before Sunrise", genre: "romance", pace: "slow", year: 1995, tagline: "Can the greatest romance of your life last only one night?", director: "Richard Linklater", rating: 8.1 },
  { name: "Atonement", displayName: "Atonement", genre: "romance", pace: "slow", year: 2007, tagline: "Torn apart by betrayal. Separated by war.", director: "Joe Wright", rating: 7.8 },
  { name: "PastLives", displayName: "Past Lives", genre: "romance", pace: "slow", year: 2023, tagline: "In-yun: The connections between people across lives", director: "Celine Song", rating: 8.0 },
  
  // Romance - Fast
  { name: "CrazyRich", displayName: "Crazy Rich Asians", genre: "romance", pace: "fast", year: 2018, tagline: "The only thing crazier than love is family", director: "Jon M. Chu", rating: 7.0 },
  { name: "10Things", displayName: "10 Things I Hate About You", genre: "romance", pace: "fast", year: 1999, tagline: "How do I loathe thee? Let me count the ways", director: "Gil Junger", rating: 7.3 },
  
  // Comedy - Fast
  { name: "Hangover", displayName: "The Hangover", genre: "comedy", pace: "fast", year: 2009, tagline: "Some guys just can't handle Vegas", director: "Todd Phillips", rating: 7.7 },
  { name: "Superbad", displayName: "Superbad", genre: "comedy", pace: "fast", year: 2007, tagline: "Come and get some", director: "Greg Mottola", rating: 7.6 },
  { name: "Deadpool", displayName: "Deadpool", genre: "comedy", pace: "fast", year: 2016, tagline: "With great power comes great irresponsibility", director: "Tim Miller", rating: 8.0 },
  { name: "Jumanji", displayName: "Jumanji", genre: "comedy", pace: "fast", year: 2017, tagline: "The game has evolved", director: "Jake Kasdan", rating: 6.9 },
  { name: "HomeAlone", displayName: "Home Alone", genre: "comedy", pace: "fast", year: 1990, tagline: "A family comedy without the family", director: "Chris Columbus", rating: 7.7 },
  { name: "GameNight", displayName: "Game Night", genre: "comedy", pace: "fast", year: 2018, tagline: "This is not a game", director: "John Francis Daley", rating: 7.0 },
  { name: "GrandBudapest", displayName: "The Grand Budapest Hotel", genre: "comedy", pace: "fast", year: 2014, tagline: "A story that never was", director: "Wes Anderson", rating: 8.1 },
  
  // Comedy - Slow
  { name: "ForrestGump", displayName: "Forrest Gump", genre: "comedy", pace: "slow", year: 1994, tagline: "Life is like a box of chocolates", director: "Robert Zemeckis", rating: 8.8 },
  { name: "TheIntern", displayName: "The Intern", genre: "comedy", pace: "slow", year: 2015, tagline: "Experience never gets old", director: "Nancy Meyers", rating: 7.1 },
  { name: "LittleMissSunshine", displayName: "Little Miss Sunshine", genre: "comedy", pace: "slow", year: 2006, tagline: "A family on the verge of a breakdown", director: "Jonathan Dayton", rating: 7.8 },
  { name: "JoJoRabbit", displayName: "Jojo Rabbit", genre: "comedy", pace: "slow", year: 2019, tagline: "An anti-hate satire", director: "Taika Waititi", rating: 7.9 },
  
  // Thriller - Fast
  { name: "SevenSe", displayName: "Se7en", genre: "thriller", pace: "fast", year: 1995, tagline: "Seven deadly sins. Seven ways to die.", director: "David Fincher", rating: 8.6 },
  { name: "GoneGirl", displayName: "Gone Girl", genre: "thriller", pace: "fast", year: 2014, tagline: "You don't know what you've got 'til it's gone", director: "David Fincher", rating: 8.1 },
  { name: "GetOut", displayName: "Get Out", genre: "thriller", pace: "fast", year: 2017, tagline: "Just because you're invited, doesn't mean you're welcome", director: "Jordan Peele", rating: 7.7 },
  { name: "Parasite", displayName: "Parasite", genre: "thriller", pace: "fast", year: 2019, tagline: "Act like you own the place", director: "Bong Joon-ho", rating: 8.5 },
  
  // Thriller - Slow
  { name: "Silence", displayName: "Silence of the Lambs", genre: "thriller", pace: "slow", year: 1991, tagline: "To enter the mind of a killer she must challenge the mind of a madman", director: "Jonathan Demme", rating: 8.6 },
  { name: "Shutter", displayName: "Shutter Island", genre: "thriller", pace: "slow", year: 2010, tagline: "Some places never let you go", director: "Martin Scorsese", rating: 8.2 },
  { name: "Zodiac", displayName: "Zodiac", genre: "thriller", pace: "slow", year: 2007, tagline: "There's more than one way to lose your life to a killer", director: "David Fincher", rating: 7.7 },
  
  // Drama - Slow
  { name: "Shawshank", displayName: "The Shawshank Redemption", genre: "drama", pace: "slow", year: 1994, tagline: "Fear can hold you prisoner. Hope can set you free.", director: "Frank Darabont", rating: 9.3 },
  { name: "GoodWill", displayName: "Good Will Hunting", genre: "drama", pace: "slow", year: 1997, tagline: "Some people can never believe in themselves, until someone believes in them", director: "Gus Van Sant", rating: 8.3 },
  { name: "WhaleRider", displayName: "Whiplash", genre: "drama", pace: "slow", year: 2014, tagline: "The road to greatness can take you to the edge", director: "Damien Chazelle", rating: 8.5 },
  { name: "Everything", displayName: "Everything Everywhere All at Once", genre: "drama", pace: "fast", year: 2022, tagline: "The universe is so much bigger than you realize", director: "Daniels", rating: 8.0 },
  
  // Sci-Fi
  { name: "Matrix", displayName: "The Matrix", genre: "scifi", pace: "fast", year: 1999, tagline: "Reality is a thing of the past", director: "Wachowskis", rating: 8.7 },
  { name: "BladeRunner", displayName: "Blade Runner 2049", genre: "scifi", pace: "slow", year: 2017, tagline: "The key to the future is finally unearthed", director: "Denis Villeneuve", rating: 8.0 },
  { name: "Arrival", displayName: "Arrival", genre: "scifi", pace: "slow", year: 2016, tagline: "Why are they here?", director: "Denis Villeneuve", rating: 7.9 },
  { name: "ExMachina", displayName: "Ex Machina", genre: "scifi", pace: "slow", year: 2014, tagline: "There is nothing more human than the will to survive", director: "Alex Garland", rating: 7.7 },
];

export type QuizMode = 'quick' | 'standard' | 'deep';

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  options: {
    text: string;
    subtext?: string;
    effects: {
      action?: number;
      romance?: number;
      comedy?: number;
      thriller?: number;
      drama?: number;
      scifi?: number;
      fast?: number;
      slow?: number;
    };
  }[];
  mode: QuizMode[];
}

export const questions: Question[] = [
  // Quick Mode Questions (3)
  {
    id: 1,
    text: "What's your vibe tonight?",
    subtext: "First instinct only",
    options: [
      { text: "Get my heart racing", subtext: "Adrenaline, explosions, or suspense", effects: { action: 2, thriller: 1, fast: 1 } },
      { text: "Feel something deep", subtext: "Emotions, connections, stories", effects: { romance: 2, drama: 1, slow: 1 } },
      { text: "Escape reality", subtext: "Laugh, dream, wonder", effects: { comedy: 2, scifi: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  {
    id: 2,
    text: "Pick your perfect movie moment",
    options: [
      { text: "An epic showdown under rain", effects: { action: 2, thriller: 1, fast: 1 } },
      { text: "Two strangers meet, time stops", effects: { romance: 2, drama: 1, slow: 1 } },
      { text: "A perfectly timed joke lands", effects: { comedy: 2, fast: 1 } },
      { text: "A mind-bending twist you didn't see coming", effects: { thriller: 2, scifi: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  {
    id: 3,
    text: "How do you want to feel after?",
    options: [
      { text: "Pumped up and energized", effects: { action: 1, comedy: 1, fast: 2 } },
      { text: "Thoughtful and reflective", effects: { drama: 2, slow: 2 } },
      { text: "Happily satisfied", effects: { romance: 1, comedy: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  
  // Standard Mode Additional Questions (+4 = 7 total)
  {
    id: 4,
    text: "It's Friday night. Your ideal setting?",
    subtext: "Imagine yourself there",
    options: [
      { text: "Packed theater, opening night energy", effects: { action: 1, fast: 1 } },
      { text: "Cozy couch, blanket, dim lights", effects: { romance: 1, drama: 1, slow: 1 } },
      { text: "With friends, snacks everywhere", effects: { comedy: 2 } },
      { text: "Alone, fully immersed", effects: { thriller: 1, scifi: 1, slow: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 5,
    text: "Choose your protagonist",
    options: [
      { text: "The unstoppable hero", subtext: "Fights against all odds", effects: { action: 2, fast: 1 } },
      { text: "The hopeless romantic", subtext: "Searching for connection", effects: { romance: 2, slow: 1 } },
      { text: "The underdog with heart", subtext: "Proves everyone wrong", effects: { comedy: 1, drama: 1 } },
      { text: "The brilliant mind", subtext: "Sees what others can't", effects: { thriller: 1, scifi: 2 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 6,
    text: "Your attention span right now?",
    subtext: "Be honest",
    options: [
      { text: "Hook me fast or lose me", effects: { fast: 2, comedy: 1 } },
      { text: "I'm ready to be patient", effects: { slow: 2, drama: 1 } },
      { text: "Depends on how good it is", effects: { thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 7,
    text: "Pick a soundtrack",
    options: [
      { text: "Epic orchestral score", effects: { action: 2, drama: 1 } },
      { text: "Indie, melancholic melody", effects: { romance: 2, slow: 1 } },
      { text: "Upbeat, catchy tunes", effects: { comedy: 2, fast: 1 } },
      { text: "Synth, electronic, atmospheric", effects: { scifi: 2, thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  
  // Deep Mode Additional Questions (+5 = 12 total)
  {
    id: 8,
    text: "The best movies make you question...",
    options: [
      { text: "What you're capable of", effects: { action: 2, drama: 1 } },
      { text: "Who you love and why", effects: { romance: 2, drama: 1 } },
      { text: "If life should be taken so seriously", effects: { comedy: 2 } },
      { text: "What is real", effects: { scifi: 2, thriller: 2 } },
    ],
    mode: ['deep'],
  },
  {
    id: 9,
    text: "How do you handle sad endings?",
    options: [
      { text: "Bring on the tears", effects: { romance: 1, drama: 2, slow: 1 } },
      { text: "Only if it's earned", effects: { thriller: 1, slow: 1 } },
      { text: "Actually, I'd rather not", effects: { comedy: 2, action: 1, fast: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 10,
    text: "Pick an era",
    subtext: "Where would you live?",
    options: [
      { text: "The distant future", effects: { scifi: 2, action: 1 } },
      { text: "Right now, modern day", effects: { comedy: 1, romance: 1, thriller: 1 } },
      { text: "A timeless, period setting", effects: { romance: 2, drama: 2, slow: 1 } },
      { text: "Somewhere that never existed", effects: { scifi: 1, action: 1, comedy: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 11,
    text: "Visual style preference?",
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
    text: "Final question: Trust our algorithm?",
    subtext: "One last preference",
    options: [
      { text: "Surprise me with something popular", effects: { action: 1, comedy: 1, fast: 1 } },
      { text: "Give me a hidden gem", effects: { drama: 2, romance: 1, slow: 1 } },
      { text: "Balance mainstream and artsy", effects: { thriller: 1, scifi: 1 } },
    ],
    mode: ['deep'],
  },
];

export function getQuestionsForMode(mode: QuizMode): Question[] {
  return questions.filter(q => q.mode.includes(mode));
}

export interface Scores {
  action: number;
  romance: number;
  comedy: number;
  thriller: number;
  drama: number;
  scifi: number;
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
  fast: 0,
  slow: 0,
};

export function recommendMovie(scores: Scores): { movie: Movie; reasons: string[]; matchPercent: number } {
  let bestScore = -1;
  const candidates: { movie: Movie; score: number }[] = [];

  for (const movie of movies) {
    let score = 0;

    // Genre matching
    if (movie.genre === 'action') score += scores.action * 2;
    if (movie.genre === 'romance') score += scores.romance * 2;
    if (movie.genre === 'comedy') score += scores.comedy * 2;
    if (movie.genre === 'thriller') score += scores.thriller * 2;
    if (movie.genre === 'drama') score += scores.drama * 2;
    if (movie.genre === 'scifi') score += scores.scifi * 2;
    
    // Pace matching
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

  // Random pick from top candidates
  const pick = candidates[Math.floor(Math.random() * Math.min(candidates.length, 3))];
  const movie = pick.movie;

  // Calculate match percentage (normalized)
  const maxPossibleScore = Math.max(...Object.values(scores)) * 3;
  const matchPercent = maxPossibleScore > 0 ? Math.min(98, Math.round((pick.score / maxPossibleScore) * 100) + 75) : 85;

  // Generate reasons
  const reasons: string[] = [];
  
  const genreReasons: Record<string, string> = {
    action: "You crave adrenaline and excitement",
    romance: "You appreciate emotional, heartfelt stories",
    comedy: "You love movies that make you laugh",
    thriller: "You enjoy suspense and psychological depth",
    drama: "You value meaningful, character-driven narratives",
    scifi: "You're drawn to imaginative, thought-provoking worlds",
  };

  if (genreReasons[movie.genre]) {
    reasons.push(genreReasons[movie.genre]);
  }

  if (movie.pace === 'fast' && scores.fast >= scores.slow) {
    reasons.push("Matches your preference for fast-paced storytelling");
  } else if (movie.pace === 'slow' && scores.slow > scores.fast) {
    reasons.push("Perfect for your appreciation of slower, immersive experiences");
  }

  if (movie.rating && movie.rating >= 8.0) {
    reasons.push(`Critically acclaimed with ${movie.rating}/10 rating`);
  }

  if (movie.director) {
    reasons.push(`Directed by ${movie.director}`);
  }

  return { movie, reasons, matchPercent };
}

export interface SavedResult {
  id: string;
  movie: Movie;
  reasons: string[];
  matchPercent: number;
  date: string;
  mode: QuizMode;
}

export function saveResult(result: Omit<SavedResult, 'id' | 'date'>): SavedResult {
  const saved: SavedResult = {
    ...result,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  };
  
  const existing = getHistory();
  const updated = [saved, ...existing].slice(0, 20); // Keep last 20
  localStorage.setItem('cinematch-history', JSON.stringify(updated));
  
  return saved;
}

export function getHistory(): SavedResult[] {
  try {
    const data = localStorage.getItem('cinematch-history');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function clearHistory(): void {
  localStorage.removeItem('cinematch-history');
}