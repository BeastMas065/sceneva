export interface Movie {
  name: string;
  displayName: string;
  genre: 'action' | 'romance' | 'comedy';
  pace: 'fast' | 'slow';
  year?: number;
  tagline?: string;
}

export const movies: Movie[] = [
  // Action - Fast
  { name: "Avengers", displayName: "The Avengers", genre: "action", pace: "fast", year: 2012, tagline: "Some assembly required" },
  { name: "Inception", displayName: "Inception", genre: "action", pace: "fast", year: 2010, tagline: "Your mind is the scene of the crime" },
  { name: "MadMax", displayName: "Mad Max: Fury Road", genre: "action", pace: "fast", year: 2015, tagline: "What a lovely day" },
  { name: "JohnWick", displayName: "John Wick", genre: "action", pace: "fast", year: 2014, tagline: "Don't set him off" },
  { name: "DieHard", displayName: "Die Hard", genre: "action", pace: "fast", year: 1988, tagline: "Yippee-ki-yay" },
  { name: "DarkKnight", displayName: "The Dark Knight", genre: "action", pace: "fast", year: 2008, tagline: "Why so serious?" },
  
  // Action - Slow
  { name: "Gladiator", displayName: "Gladiator", genre: "action", pace: "slow", year: 2000, tagline: "What we do in life echoes in eternity" },
  { name: "Interstellar", displayName: "Interstellar", genre: "action", pace: "slow", year: 2014, tagline: "Mankind was born on Earth. It was never meant to die here" },
  
  // Romance - Slow
  { name: "Titanic", displayName: "Titanic", genre: "romance", pace: "slow", year: 1997, tagline: "Nothing on Earth could come between them" },
  { name: "Notebook", displayName: "The Notebook", genre: "romance", pace: "slow", year: 2004, tagline: "Behind every great love is a great story" },
  { name: "LaLaLand", displayName: "La La Land", genre: "romance", pace: "slow", year: 2016, tagline: "Here's to the fools who dream" },
  { name: "PridePrejudice", displayName: "Pride & Prejudice", genre: "romance", pace: "slow", year: 2005, tagline: "Sometimes the last person on earth you want to be with..." },
  { name: "BeforeSunrise", displayName: "Before Sunrise", genre: "romance", pace: "slow", year: 1995, tagline: "Can the greatest romance of your life last only one night?" },
  
  // Comedy - Fast
  { name: "Hangover", displayName: "The Hangover", genre: "comedy", pace: "fast", year: 2009, tagline: "Some guys just can't handle Vegas" },
  { name: "Superbad", displayName: "Superbad", genre: "comedy", pace: "fast", year: 2007, tagline: "Come and get some" },
  { name: "Deadpool", displayName: "Deadpool", genre: "comedy", pace: "fast", year: 2016, tagline: "With great power comes great irresponsibility" },
  { name: "Jumanji", displayName: "Jumanji", genre: "comedy", pace: "fast", year: 2017, tagline: "The game has evolved" },
  { name: "HomeAlone", displayName: "Home Alone", genre: "comedy", pace: "fast", year: 1990, tagline: "A family comedy without the family" },
  
  // Comedy - Slow
  { name: "ForrestGump", displayName: "Forrest Gump", genre: "comedy", pace: "slow", year: 1994, tagline: "Life is like a box of chocolates" },
  { name: "TheIntern", displayName: "The Intern", genre: "comedy", pace: "slow", year: 2015, tagline: "Experience never gets old" },
  { name: "LittleMissSunshine", displayName: "Little Miss Sunshine", genre: "comedy", pace: "slow", year: 2006, tagline: "A family on the verge of a breakdown" },
];

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    effects: {
      action?: number;
      romance?: number;
      comedy?: number;
      fast?: number;
      slow?: number;
    };
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Picture this: You have the remote. What are you reaching for?",
    options: [
      { 
        text: "A heart-pounding car chase through city streets", 
        effects: { action: 2, fast: 1 } 
      },
      { 
        text: "A deep, emotional love story that lingers", 
        effects: { romance: 2, slow: 1 } 
      },
    ],
  },
  {
    id: 2,
    text: "The perfect movie makes you...",
    options: [
      { 
        text: "Laugh until your sides hurt", 
        effects: { comedy: 2 } 
      },
      { 
        text: "Grip the edge of your seat in suspense", 
        effects: { action: 2 } 
      },
    ],
  },
  {
    id: 3,
    text: "Your ideal movie night vibes?",
    options: [
      { 
        text: "Quick, fun, and leave me wanting more", 
        effects: { comedy: 1, fast: 1 } 
      },
      { 
        text: "Long, emotional journey that I can savor", 
        effects: { romance: 1, slow: 1 } 
      },
    ],
  },
];

export interface Scores {
  action: number;
  romance: number;
  comedy: number;
  fast: number;
  slow: number;
}

export function recommendMovie(scores: Scores): { movie: Movie; reasons: string[] } {
  let bestScore = -1;
  const candidates: { movie: Movie; score: number }[] = [];

  for (const movie of movies) {
    let score = 0;

    if (movie.genre === 'action') score += scores.action;
    if (movie.genre === 'romance') score += scores.romance;
    if (movie.genre === 'comedy') score += scores.comedy;
    if (movie.pace === 'fast') score += scores.fast;
    if (movie.pace === 'slow') score += scores.slow;

    if (score > bestScore) {
      bestScore = score;
      candidates.length = 0;
      candidates.push({ movie, score });
    } else if (score === bestScore || score === bestScore - 1) {
      candidates.push({ movie, score });
    }
  }

  // Random pick from top candidates
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  const movie = pick.movie;

  // Generate reasons
  const reasons: string[] = [];
  
  if (movie.genre === 'action' && scores.action > 0) {
    reasons.push("You crave action-packed thrills");
  } else if (movie.genre === 'romance' && scores.romance > 0) {
    reasons.push("You appreciate emotional, romantic stories");
  } else if (movie.genre === 'comedy' && scores.comedy > 0) {
    reasons.push("You love movies that make you laugh");
  }

  if (movie.pace === 'fast' && scores.fast >= scores.slow) {
    reasons.push("You enjoy fast-paced storytelling");
  } else if (movie.pace === 'slow' && scores.slow > scores.fast) {
    reasons.push("You prefer a slower, more immersive experience");
  }

  return { movie, reasons };
}
