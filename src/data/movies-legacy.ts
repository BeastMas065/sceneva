export type Region = 'indian' | 'foreign';
export type ContentType = 'movies' | 'anime' | 'webseries' | 'tvshows';

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
  region: Region;
  language?: string;
}

export const movies: Movie[] = [
  // ========== INDIAN MOVIES ==========
  
  // Bollywood - Action
  { 
    name: "Dangal", 
    displayName: "Dangal", 
    genre: "drama", 
    pace: "slow", 
    year: 2016, 
    tagline: "You have it in your blood",
    synopsis: "A former wrestler trains his daughters to become world-class wrestlers, challenging societal norms in a small Indian village. A story of grit, dreams, and a father's unconventional love.",
    director: "Nitesh Tiwari", 
    rating: 8.4,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "RRR", 
    displayName: "RRR", 
    genre: "action", 
    pace: "fast", 
    year: 2022, 
    tagline: "Rise. Roar. Revolt.",
    synopsis: "Two legendary revolutionaries forge an unlikely friendship, only to discover their paths are destined to clash. An electrifying tale of brotherhood, sacrifice, and rebellion.",
    director: "S.S. Rajamouli", 
    rating: 7.8,
    region: 'indian',
    language: 'Telugu'
  },
  { 
    name: "Baahubali", 
    displayName: "Baahubali: The Beginning", 
    genre: "action", 
    pace: "fast", 
    year: 2015, 
    tagline: "Begin an adventure like never before",
    synopsis: "A young man discovers his royal lineage and embarks on a quest to reclaim his kingdom. Epic battles, palace intrigue, and a love that transcends lifetimes await.",
    director: "S.S. Rajamouli", 
    rating: 8.0,
    region: 'indian',
    language: 'Telugu'
  },
  { 
    name: "KGF", 
    displayName: "K.G.F: Chapter 1", 
    genre: "action", 
    pace: "fast", 
    year: 2018, 
    tagline: "The rise of a hero",
    synopsis: "A man with a dying mother's wish rises from the slums of Mumbai to become the most feared name in Kolar Gold Fields. A violent, stylish saga of power and promise.",
    director: "Prashanth Neel", 
    rating: 8.2,
    region: 'indian',
    language: 'Kannada'
  },
  { 
    name: "War", 
    displayName: "War", 
    genre: "action", 
    pace: "fast", 
    year: 2019, 
    tagline: "Believe nothing. Trust no one.",
    synopsis: "An elite soldier is assigned to hunt down his former mentor who has gone rogue. The chase spans continents, but nothing is as it seems.",
    director: "Siddharth Anand", 
    rating: 6.5,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Pathaan", 
    displayName: "Pathaan", 
    genre: "action", 
    pace: "fast", 
    year: 2023, 
    tagline: "Apni kursi ki peti baandh lijiye",
    synopsis: "A banished spy returns from the shadows to thwart a devastating attack on his country. High-octane action meets espionage in this adrenaline-fueled ride.",
    director: "Siddharth Anand", 
    rating: 6.0,
    region: 'indian',
    language: 'Hindi'
  },
  
  // Bollywood - Romance
  { 
    name: "DDLJ", 
    displayName: "Dilwale Dulhania Le Jayenge", 
    genre: "romance", 
    pace: "slow", 
    year: 1995, 
    tagline: "Come, fall in love",
    synopsis: "Two young Indians meet on a European vacation and fall deeply in love. But winning her traditional father's blessing will require patience, respect, and a whole lot of charm.",
    director: "Aditya Chopra", 
    rating: 8.1,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "YJHD", 
    displayName: "Yeh Jawaani Hai Deewani", 
    genre: "romance", 
    pace: "fast", 
    year: 2013, 
    tagline: "Live. Love. One last time.",
    synopsis: "A free-spirited traveler and a studious wallflower reunite years after a life-changing trek. Can they still find each other when their worlds have grown so far apart?",
    director: "Ayan Mukerji", 
    rating: 7.2,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Barfi", 
    displayName: "Barfi!", 
    genre: "romance", 
    pace: "slow", 
    year: 2012, 
    tagline: "Life is what you make it",
    synopsis: "A deaf-mute man navigates love, loss, and laughter in this heartwarming tale. His infectious spirit touches everyone he meets, proving that love needs no words.",
    director: "Anurag Basu", 
    rating: 8.1,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Rockstar", 
    displayName: "Rockstar", 
    genre: "romance", 
    pace: "slow", 
    year: 2011, 
    tagline: "Live to love. Love to live.",
    synopsis: "A college nobody transforms into a rock sensation after heartbreak. But fame can't heal the wounds of a love that was never meant to be ordinary.",
    director: "Imtiaz Ali", 
    rating: 7.7,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Tamasha", 
    displayName: "Tamasha", 
    genre: "drama", 
    pace: "slow", 
    year: 2015, 
    tagline: "Why always the same story?",
    synopsis: "A man trapped in a soul-crushing job reconnects with a woman who knew him when he was truly alive. A raw exploration of identity, creativity, and breaking free.",
    director: "Imtiaz Ali", 
    rating: 7.5,
    region: 'indian',
    language: 'Hindi'
  },
  
  // Bollywood - Comedy
  { 
    name: "3Idiots", 
    displayName: "3 Idiots", 
    genre: "comedy", 
    pace: "slow", 
    year: 2009, 
    tagline: "All is well",
    synopsis: "Two friends embark on a journey to find their long-lost college buddy, reliving memories that challenge India's pressure-cooker education system. Hilarious, heartfelt, revolutionary.",
    director: "Rajkumar Hirani", 
    rating: 8.4,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Andhadhun", 
    displayName: "Andhadhun", 
    genre: "thriller", 
    pace: "fast", 
    year: 2018, 
    tagline: "A symphony of sound and deception",
    synopsis: "A blind pianist becomes an unwitting witness to a murder. Or is he really blind? A wickedly clever thriller with more twists than a pretzel.",
    director: "Sriram Raghavan", 
    rating: 8.3,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Hera Pheri", 
    displayName: "Hera Pheri", 
    genre: "comedy", 
    pace: "fast", 
    year: 2000, 
    tagline: "Comedy. Confusion. Chaos.",
    synopsis: "Three down-on-their-luck men accidentally intercept a ransom call and hatch a harebrained scheme to collect the money. Nothing goes according to plan.",
    director: "Priyadarshan", 
    rating: 8.1,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "PK", 
    displayName: "PK", 
    genre: "comedy", 
    pace: "slow", 
    year: 2014, 
    tagline: "Question everything",
    synopsis: "An alien stranded on Earth observes human behavior with childlike curiosity, especially our religious practices. Innocent questions lead to profound insights.",
    director: "Rajkumar Hirani", 
    rating: 8.1,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Stree", 
    displayName: "Stree", 
    genre: "comedy", 
    pace: "fast", 
    year: 2018, 
    tagline: "There's something in the night",
    synopsis: "A small town lives in fear of a female ghost who abducts men. When a tailor falls for a mysterious woman, he must uncover the truth before it's too late.",
    director: "Amar Kaushik", 
    rating: 7.6,
    region: 'indian',
    language: 'Hindi'
  },
  
  // South Indian - Drama & Thriller
  { 
    name: "Drishyam", 
    displayName: "Drishyam", 
    genre: "thriller", 
    pace: "slow", 
    year: 2013, 
    tagline: "What would you do for your family?",
    synopsis: "A simple cable operator devises an ingenious plan to protect his family when they accidentally commit a crime. Every detail matters in this nerve-wracking game of cat and mouse.",
    director: "Jeethu Joseph", 
    rating: 8.3,
    region: 'indian',
    language: 'Malayalam'
  },
  { 
    name: "Vikram", 
    displayName: "Vikram", 
    genre: "action", 
    pace: "fast", 
    year: 2022, 
    tagline: "There's always a way",
    synopsis: "A special agent investigates a series of brutal killings, only to uncover a conspiracy that goes deeper than he imagined. Three titans collide in this stylish action spectacle.",
    director: "Lokesh Kanagaraj", 
    rating: 8.4,
    region: 'indian',
    language: 'Tamil'
  },
  { 
    name: "Kantara", 
    displayName: "Kantara", 
    genre: "drama", 
    pace: "slow", 
    year: 2022, 
    tagline: "A divine saga",
    synopsis: "A fiery young man protects his village's sacred traditions against outside forces. When gods walk among mortals, ancient promises must be kept.",
    director: "Rishab Shetty", 
    rating: 8.5,
    region: 'indian',
    language: 'Kannada'
  },
  { 
    name: "Super Deluxe", 
    displayName: "Super Deluxe", 
    genre: "drama", 
    pace: "slow", 
    year: 2019, 
    tagline: "Life is Super. Life is Deluxe.",
    synopsis: "Four interconnected stories unfold over a single day, exploring fate, morality, and the bizarre coincidences that shape our lives. Provocative and unforgettable.",
    director: "Thiagarajan Kumararaja", 
    rating: 8.4,
    region: 'indian',
    language: 'Tamil'
  },
  { 
    name: "Asuran", 
    displayName: "Asuran", 
    genre: "drama", 
    pace: "slow", 
    year: 2019, 
    tagline: "Survival is the only option",
    synopsis: "A peace-loving farmer unleashes his violent past to protect his family from a powerful landlord. A searing tale of caste, dignity, and a father's ultimate sacrifice.",
    director: "Vetrimaaran", 
    rating: 8.5,
    region: 'indian',
    language: 'Tamil'
  },
  { 
    name: "Sita Ramam", 
    displayName: "Sita Ramam", 
    genre: "romance", 
    pace: "slow", 
    year: 2022, 
    tagline: "A love story like never before",
    synopsis: "An orphaned soldier receives letters from a mysterious woman named Sita. Decades later, someone must deliver his final letter across borders and through time.",
    director: "Hanu Raghavapudi", 
    rating: 8.6,
    region: 'indian',
    language: 'Telugu'
  },
  { 
    name: "Premam", 
    displayName: "Premam", 
    genre: "romance", 
    pace: "slow", 
    year: 2015, 
    tagline: "First love. Second love. True love.",
    synopsis: "A young man experiences love three times across different stages of his life. Each love shapes him, breaks him, and ultimately leads him home.",
    director: "Alphonse Puthren", 
    rating: 8.3,
    region: 'indian',
    language: 'Malayalam'
  },
  
  // More Indian Movies
  { 
    name: "Gangs", 
    displayName: "Gangs of Wasseypur", 
    genre: "action", 
    pace: "slow", 
    year: 2012, 
    tagline: "Revenge is a dish best served cold",
    synopsis: "A multi-generational saga of coal mafia, blood feuds, and burning vengeance in the heartland of India. Five hours of pure, unfiltered storytelling.",
    director: "Anurag Kashyap", 
    rating: 8.2,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Zindagi", 
    displayName: "Zindagi Na Milegi Dobara", 
    genre: "comedy", 
    pace: "slow", 
    year: 2011, 
    tagline: "Life is for living",
    synopsis: "Three childhood friends reunite for a bachelor trip across Spain. What begins as adventure becomes a journey of self-discovery, friendship, and second chances.",
    director: "Zoya Akhtar", 
    rating: 8.2,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "QueenB", 
    displayName: "Queen", 
    genre: "comedy", 
    pace: "slow", 
    year: 2013, 
    tagline: "It's never too late to find yourself",
    synopsis: "Jilted at the altar, a sheltered Delhi girl decides to go on her honeymoon alone. Paris and Amsterdam teach her what her small world never could.",
    director: "Vikas Bahl", 
    rating: 8.2,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Dil Chahta", 
    displayName: "Dil Chahta Hai", 
    genre: "drama", 
    pace: "slow", 
    year: 2001, 
    tagline: "A story about friendship",
    synopsis: "Three inseparable college friends navigate love, heartbreak, and growing up. A film that redefined Indian cinema for a generation.",
    director: "Farhan Akhtar", 
    rating: 8.1,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Rang De", 
    displayName: "Rang De Basanti", 
    genre: "drama", 
    pace: "slow", 
    year: 2006, 
    tagline: "A generation awakens",
    synopsis: "A British filmmaker casts college students in a documentary about Indian freedom fighters. The lines between past and present begin to blur.",
    director: "Rakeysh Omprakash Mehra", 
    rating: 8.2,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Taare", 
    displayName: "Taare Zameen Par", 
    genre: "drama", 
    pace: "slow", 
    year: 2007, 
    tagline: "Every child is special",
    synopsis: "A dyslexic boy struggling in school finds hope when an unconventional art teacher recognizes his hidden genius. A story that changed how India sees education.",
    director: "Aamir Khan", 
    rating: 8.4,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Masaan", 
    displayName: "Masaan", 
    genre: "drama", 
    pace: "slow", 
    year: 2015, 
    tagline: "Man conquers death",
    synopsis: "Two parallel stories of love, loss, and liberation unfold along the ghats of Varanasi. A hauntingly beautiful meditation on grief and hope.",
    director: "Neeraj Ghaywan", 
    rating: 8.2,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Article15", 
    displayName: "Article 15", 
    genre: "thriller", 
    pace: "slow", 
    year: 2019, 
    tagline: "Are we not Indians firstly and lastly?",
    synopsis: "A city-bred cop investigates the disappearance of village girls and confronts the ugly reality of caste discrimination. Based on true events.",
    director: "Anubhav Sinha", 
    rating: 8.1,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Tumbbad", 
    displayName: "Tumbbad", 
    genre: "thriller", 
    pace: "slow", 
    year: 2018, 
    tagline: "There's a curse that waits",
    synopsis: "A man pursues an ancestral treasure hidden in a cursed village, guarded by a monstrous deity. Gothic horror meets Indian mythology.",
    director: "Rahi Anil Barve", 
    rating: 8.3,
    region: 'indian',
    language: 'Hindi'
  },
  { 
    name: "Pushpa", 
    displayName: "Pushpa: The Rise", 
    genre: "action", 
    pace: "fast", 
    year: 2021, 
    tagline: "The rule of the jungle",
    synopsis: "A small-time laborer rises through the ranks of red sandalwood smuggling to become the most feared name in the forest. Fire meets fire.",
    director: "Sukumar", 
    rating: 7.6,
    region: 'indian',
    language: 'Telugu'
  },
  { 
    name: "Ala", 
    displayName: "Ala Vaikunthapurramuloo", 
    genre: "action", 
    pace: "fast", 
    year: 2020, 
    tagline: "A family drama with a twist",
    synopsis: "A young man raised in a troubled home discovers he was swapped at birth with a business tycoon's son. Identity, revenge, and redemption collide.",
    director: "Trivikram Srinivas", 
    rating: 7.3,
    region: 'indian',
    language: 'Telugu'
  },
  { 
    name: "Jersey", 
    displayName: "Jersey", 
    genre: "drama", 
    pace: "slow", 
    year: 2019, 
    tagline: "For his son's wish, he'll risk it all",
    synopsis: "A failed cricketer attempts a comeback at 36 to fulfill his son's wish for a jersey. A father's love knows no age limit.",
    director: "Gowtam Tinnanuri", 
    rating: 8.6,
    region: 'indian',
    language: 'Telugu'
  },
  { 
    name: "Ratsasan", 
    displayName: "Ratsasan", 
    genre: "thriller", 
    pace: "fast", 
    year: 2018, 
    tagline: "Evil has a new face",
    synopsis: "A cop-turned-filmmaker becomes a sub-inspector and hunts a serial killer targeting schoolgirls. A cat-and-mouse game where failure means death.",
    director: "Ram Kumar", 
    rating: 8.4,
    region: 'indian',
    language: 'Tamil'
  },
  { 
    name: "Kaithi", 
    displayName: "Kaithi", 
    genre: "action", 
    pace: "fast", 
    year: 2019, 
    tagline: "One night. Multiple obstacles.",
    synopsis: "An ex-convict's plan to reunite with his daughter goes awry when he's forced to help a cop survive a drug lord's wrath. No songs. Pure adrenaline.",
    director: "Lokesh Kanagaraj", 
    rating: 8.5,
    region: 'indian',
    language: 'Tamil'
  },
  { 
    name: "96Film", 
    displayName: "96", 
    genre: "romance", 
    pace: "slow", 
    year: 2018, 
    tagline: "Some love stories never end",
    synopsis: "High school sweethearts meet after 22 years at a class reunion. One night to revisit all the memories, feelings, and what-ifs they left behind.",
    director: "C. Prem Kumar", 
    rating: 8.5,
    region: 'indian',
    language: 'Tamil'
  },
  { 
    name: "Charlie", 
    displayName: "Charlie", 
    genre: "romance", 
    pace: "slow", 
    year: 2015, 
    tagline: "Follow your heart",
    synopsis: "A free-spirited woman moves into a new apartment and becomes fascinated by its previous tenant. She sets out to find him, one story at a time.",
    director: "Martin Prakkat", 
    rating: 8.0,
    region: 'indian',
    language: 'Malayalam'
  },
  { 
    name: "Ustad", 
    displayName: "Ustad Hotel", 
    genre: "drama", 
    pace: "slow", 
    year: 2012, 
    tagline: "Food is love made visible",
    synopsis: "A young chef defies his father to work at his grandfather's small restaurant. Through cooking, he discovers the true meaning of home and family.",
    director: "Anwar Rasheed", 
    rating: 8.5,
    region: 'indian',
    language: 'Malayalam'
  },
  { 
    name: "Bangalore Days", 
    displayName: "Bangalore Days", 
    genre: "drama", 
    pace: "slow", 
    year: 2014, 
    tagline: "Live your dreams",
    synopsis: "Three cousins move to Bangalore to chase their dreams. Love, disappointment, and life lessons await in the big city.",
    director: "Anjali Menon", 
    rating: 8.2,
    region: 'indian',
    language: 'Malayalam'
  },
  { 
    name: "KGF2", 
    displayName: "K.G.F: Chapter 2", 
    genre: "action", 
    pace: "fast", 
    year: 2022, 
    tagline: "The end will be violent",
    synopsis: "Rocky's reign over the Kolar Gold Fields is challenged by enemies old and new. When legends fall, chaos rises. The saga concludes in blood and fire.",
    director: "Prashanth Neel", 
    rating: 8.4,
    region: 'indian',
    language: 'Kannada'
  },
  { 
    name: "Lucia", 
    displayName: "Lucia", 
    genre: "scifi", 
    pace: "slow", 
    year: 2013, 
    tagline: "What if dreams were the reality?",
    synopsis: "A theater usher discovers pills that let him control his dreams. But as the line between dreams and reality blurs, which world is real?",
    director: "Pawan Kumar", 
    rating: 8.1,
    region: 'indian',
    language: 'Kannada'
  },
  // Additional Indian Movies
  { name: "Gully Boy", displayName: "Gully Boy", genre: "drama", pace: "fast", year: 2019, tagline: "Apna time aayega", synopsis: "A young rapper from Mumbai slums dreams of making it big.", director: "Zoya Akhtar", rating: 7.9, region: 'indian', language: 'Hindi' },
  { name: "Raazi", displayName: "Raazi", genre: "thriller", pace: "slow", year: 2018, tagline: "An Indian girl married a Pakistani", synopsis: "A young Indian woman becomes a spy in Pakistan.", director: "Meghna Gulzar", rating: 7.7, region: 'indian', language: 'Hindi' },
  { name: "Kahaani", displayName: "Kahaani", genre: "thriller", pace: "fast", year: 2012, tagline: "The story of a woman", synopsis: "A pregnant woman searches for her missing husband in Kolkata.", director: "Sujoy Ghosh", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Uri", displayName: "Uri: The Surgical Strike", genre: "action", pace: "fast", year: 2019, tagline: "How's the josh?", synopsis: "The story of India's surgical strike after the Uri attack.", director: "Aditya Dhar", rating: 8.4, region: 'indian', language: 'Hindi' },
  { name: "Piku", displayName: "Piku", genre: "comedy", pace: "slow", year: 2015, tagline: "Motion se hi emotion", synopsis: "A quirky father-daughter road trip from Delhi to Kolkata.", director: "Shoojit Sircar", rating: 7.6, region: 'indian', language: 'Hindi' },
  { name: "Bajrangi", displayName: "Bajrangi Bhaijaan", genre: "drama", pace: "slow", year: 2015, tagline: "A journey that knows no boundaries", synopsis: "A Hindu man reunites a mute Pakistani girl with her family.", director: "Kabir Khan", rating: 8.0, region: 'indian', language: 'Hindi' },
  { name: "Pink", displayName: "Pink", genre: "drama", pace: "slow", year: 2016, tagline: "No is a complete sentence", synopsis: "Three women fight for their truth in court.", director: "Aniruddha Roy Chowdhury", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Udaan", displayName: "Udaan", genre: "drama", pace: "slow", year: 2010, tagline: "Rise above", synopsis: "A teenager faces his tyrannical father while dreaming of writing.", director: "Vikramaditya Motwane", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "DevD", displayName: "Dev.D", genre: "romance", pace: "fast", year: 2009, tagline: "Emotional Atyachar", synopsis: "A modern retelling of Devdas set in Punjab.", director: "Anurag Kashyap", rating: 7.8, region: 'indian', language: 'Hindi' },
  { name: "Lootera", displayName: "Lootera", genre: "romance", pace: "slow", year: 2013, tagline: "Some love stories end with autumn", synopsis: "A con artist falls for a landlord's daughter in 1950s Bengal.", director: "Vikramaditya Motwane", rating: 7.9, region: 'indian', language: 'Hindi' },
  { name: "OMG", displayName: "OMG – Oh My God!", genre: "comedy", pace: "fast", year: 2012, tagline: "He sued God", synopsis: "An atheist shopkeeper sues God after his shop is destroyed.", director: "Umesh Shukla", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Badhaai", displayName: "Badhaai Ho", genre: "comedy", pace: "fast", year: 2018, tagline: "The most unexpected news", synopsis: "A family faces consequences when the mother becomes pregnant at 50.", director: "Amit Sharma", rating: 7.9, region: 'indian', language: 'Hindi' },
  { name: "Bhaag", displayName: "Bhaag Milkha Bhaag", genre: "drama", pace: "slow", year: 2013, tagline: "The race of a lifetime", synopsis: "The inspiring story of Milkha Singh, the Flying Sikh.", director: "Rakeysh Omprakash Mehra", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "Chak De", displayName: "Chak De! India", genre: "drama", pace: "fast", year: 2007, tagline: "Rise and shine", synopsis: "A disgraced player coaches the Indian women's hockey team.", director: "Shimit Amin", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "Lage Raho", displayName: "Lage Raho Munna Bhai", genre: "comedy", pace: "fast", year: 2006, tagline: "Follow Gandhi", synopsis: "A gangster sees Gandhi's ghost and spreads his message.", director: "Rajkumar Hirani", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Jab We Met", displayName: "Jab We Met", genre: "romance", pace: "fast", year: 2007, tagline: "Life is crazy", synopsis: "A depressed businessman meets a vibrant Punjabi girl on a train.", director: "Imtiaz Ali", rating: 7.9, region: 'indian', language: 'Hindi' },
  { name: "Swades", displayName: "Swades", genre: "drama", pace: "slow", year: 2004, tagline: "We the people", synopsis: "An NRI scientist returns to bring electricity to his village.", director: "Ashutosh Gowariker", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "Special26", displayName: "Special 26", genre: "thriller", pace: "fast", year: 2013, tagline: "The perfect heist", synopsis: "Con men conduct raids posing as CBI officers.", director: "Neeraj Pandey", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "Talvar", displayName: "Talvar", genre: "thriller", pace: "slow", year: 2015, tagline: "Based on true events", synopsis: "A CDI officer investigates a double murder that shocked the nation.", director: "Meghna Gulzar", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "Ugly", displayName: "Ugly", genre: "thriller", pace: "slow", year: 2013, tagline: "Everyone is a suspect", synopsis: "A child goes missing and every adult becomes a suspect.", director: "Anurag Kashyap", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Haider", displayName: "Haider", genre: "drama", pace: "slow", year: 2014, tagline: "Born in conflict", synopsis: "Hamlet reimagined in war-torn Kashmir.", director: "Vishal Bhardwaj", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Omkara", displayName: "Omkara", genre: "drama", pace: "slow", year: 2006, tagline: "Power corrupts", synopsis: "Othello retold among Uttar Pradesh's political criminals.", director: "Vishal Bhardwaj", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Lagaan", displayName: "Lagaan", genre: "drama", pace: "slow", year: 2001, tagline: "Once upon a time in India", synopsis: "Villagers bet against British rulers in a cricket match.", director: "Ashutosh Gowariker", rating: 8.1, region: 'indian', language: 'Hindi' },
  { name: "Sholay", displayName: "Sholay", genre: "action", pace: "fast", year: 1975, tagline: "Flames of the sun", synopsis: "Two crooks are hired to capture a dacoit who destroyed a family.", director: "Ramesh Sippy", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "Satya", displayName: "Satya", genre: "thriller", pace: "fast", year: 1998, tagline: "Mumbai underworld", synopsis: "A newcomer gets drawn into Mumbai's criminal underworld.", director: "Ram Gopal Varma", rating: 8.2, region: 'indian', language: 'Hindi' },
  { name: "Vada Chennai", displayName: "Vada Chennai", genre: "action", pace: "slow", year: 2018, tagline: "A saga of North Chennai", synopsis: "A carrom player gets caught in warring gangsters' web.", director: "Vetrimaaran", rating: 8.4, region: 'indian', language: 'Tamil' },
  { name: "Pariyerum", displayName: "Pariyerum Perumal", genre: "drama", pace: "slow", year: 2018, tagline: "The untold story", synopsis: "A law student faces caste discrimination.", director: "Mari Selvaraj", rating: 8.6, region: 'indian', language: 'Tamil' },
  { name: "Karnan", displayName: "Karnan", genre: "action", pace: "fast", year: 2021, tagline: "Rise up", synopsis: "A young man fights for his village's basic rights.", director: "Mari Selvaraj", rating: 8.4, region: 'indian', language: 'Tamil' },
  { name: "Sarpatta", displayName: "Sarpatta Parambarai", genre: "action", pace: "fast", year: 2021, tagline: "The boxer's redemption", synopsis: "A young boxer fights to restore his family's honor.", director: "Pa. Ranjith", rating: 8.6, region: 'indian', language: 'Tamil' },
  { name: "Maanagaram", displayName: "Maanagaram", genre: "thriller", pace: "fast", year: 2017, tagline: "The city of dreams", synopsis: "Four strangers' lives intersect on one fateful night in Chennai.", director: "Lokesh Kanagaraj", rating: 8.3, region: 'indian', language: 'Tamil' },
  { name: "Jigarthanda", displayName: "Jigarthanda", genre: "comedy", pace: "fast", year: 2014, tagline: "A gangster and a filmmaker", synopsis: "A filmmaker tries to make a movie about a real gangster.", director: "Karthik Subbaraj", rating: 8.5, region: 'indian', language: 'Tamil' },
  { name: "OK Kanmani", displayName: "OK Kanmani", genre: "romance", pace: "slow", year: 2015, tagline: "Modern love in Chennai", synopsis: "Two commitment-phobic people learn about love.", director: "Mani Ratnam", rating: 7.8, region: 'indian', language: 'Tamil' },
  { name: "Nayakan", displayName: "Nayakan", genre: "drama", pace: "slow", year: 1987, tagline: "The hero", synopsis: "A boy becomes a don, protecting his community at great cost.", director: "Mani Ratnam", rating: 8.7, region: 'indian', language: 'Tamil' },
  { name: "Visaranai", displayName: "Visaranai", genre: "thriller", pace: "slow", year: 2015, tagline: "Interrogation", synopsis: "Four laborers are falsely accused and tortured by police.", director: "Vetrimaaran", rating: 8.5, region: 'indian', language: 'Tamil' },
  { name: "Kumbalangi", displayName: "Kumbalangi Nights", genre: "drama", pace: "slow", year: 2019, tagline: "Brothers and belonging", synopsis: "Four estranged brothers navigate love and family.", director: "Madhu C. Narayanan", rating: 8.5, region: 'indian', language: 'Malayalam' },
  { name: "Virus", displayName: "Virus", genre: "thriller", pace: "fast", year: 2019, tagline: "Based on true events", synopsis: "Kerala's race to contain the deadly Nipah virus outbreak.", director: "Aashiq Abu", rating: 8.2, region: 'indian', language: 'Malayalam' },
  { name: "Angamaly", displayName: "Angamaly Diaries", genre: "action", pace: "fast", year: 2017, tagline: "Pork, politics, and power", synopsis: "A young man's journey through pork business and gang wars.", director: "Lijo Jose Pellissery", rating: 8.2, region: 'indian', language: 'Malayalam' },
  { name: "Arjun Reddy", displayName: "Arjun Reddy", genre: "romance", pace: "fast", year: 2017, tagline: "A love destroyed", synopsis: "A surgeon's life spirals after losing his sweetheart.", director: "Sandeep Reddy Vanga", rating: 8.1, region: 'indian', language: 'Telugu' },
  { name: "Mahanati", displayName: "Mahanati", genre: "drama", pace: "slow", year: 2018, tagline: "The great one", synopsis: "The tragic life of legendary actress Savitri.", director: "Nag Ashwin", rating: 8.4, region: 'indian', language: 'Telugu' },
  { name: "Eega", displayName: "Eega", genre: "scifi", pace: "fast", year: 2012, tagline: "The fly", synopsis: "A murdered lover is reincarnated as a fly for revenge.", director: "S.S. Rajamouli", rating: 8.0, region: 'indian', language: 'Telugu' },
  { name: "Rangasthalam", displayName: "Rangasthalam", genre: "action", pace: "slow", year: 2018, tagline: "A village uprising", synopsis: "A farmer's brother takes on a corrupt landlord.", director: "Sukumar", rating: 8.3, region: 'indian', language: 'Telugu' },
  { name: "HIT", displayName: "HIT: The First Case", genre: "thriller", pace: "fast", year: 2020, tagline: "Homicide Intervention Team", synopsis: "A cop with PTSD investigates a missing woman case.", director: "Sailesh Kolanu", rating: 8.1, region: 'indian', language: 'Telugu' },
  { name: "Theri", displayName: "Theri", genre: "action", pace: "fast", year: 2016, tagline: "A father's vengeance", synopsis: "A cop in hiding must fight when his daughter is threatened.", director: "Atlee", rating: 7.5, region: 'indian', language: 'Tamil' },
  { name: "Master", displayName: "Master", genre: "action", pace: "fast", year: 2021, tagline: "Master vs Bhavani", synopsis: "An alcoholic professor battles a ruthless gang leader.", director: "Lokesh Kanagaraj", rating: 7.3, region: 'indian', language: 'Tamil' },
  { name: "Bigil", displayName: "Bigil", genre: "action", pace: "fast", year: 2019, tagline: "Football dreams", synopsis: "A gangster's son coaches a women's football team.", director: "Atlee", rating: 6.5, region: 'indian', language: 'Tamil' },
  { name: "Mersal", displayName: "Mersal", genre: "action", pace: "fast", year: 2017, tagline: "Triple action", synopsis: "A magician seeks revenge for his father's death.", director: "Atlee", rating: 7.5, region: 'indian', language: 'Tamil' },
  { name: "Beast", displayName: "Beast", genre: "action", pace: "fast", year: 2022, tagline: "Unleash the beast", synopsis: "A spy saves hostages in a mall hijacking.", director: "Nelson Dilipkumar", rating: 5.5, region: 'indian', language: 'Tamil' },
  { name: "Jailer", displayName: "Jailer", genre: "action", pace: "fast", year: 2023, tagline: "A retired jailer's revenge", synopsis: "A retired jailer hunts down his son's killers.", director: "Nelson Dilipkumar", rating: 7.8, region: 'indian', language: 'Tamil' },
  { name: "Leo", displayName: "Leo", genre: "action", pace: "fast", year: 2023, tagline: "Bloody sweet", synopsis: "A cafe owner's dark past resurfaces when gangsters threaten his family.", director: "Lokesh Kanagaraj", rating: 7.2, region: 'indian', language: 'Tamil' },
  { name: "Ponniyin", displayName: "Ponniyin Selvan", genre: "action", pace: "slow", year: 2022, tagline: "The golden age", synopsis: "An epic tale of Chola empire politics and succession.", director: "Mani Ratnam", rating: 7.6, region: 'indian', language: 'Tamil' },
  { name: "Navarasa", displayName: "Navarasa", genre: "drama", pace: "slow", year: 2021, tagline: "Nine emotions", synopsis: "Nine short films exploring the nine rasas of Indian aesthetics.", director: "Various", rating: 7.0, region: 'indian', language: 'Tamil' },
  { name: "Soorarai", displayName: "Soorarai Pottru", genre: "drama", pace: "fast", year: 2020, tagline: "Dream big", synopsis: "An ambitious man fights to start a low-cost airline.", director: "Sudha Kongara", rating: 8.6, region: 'indian', language: 'Tamil' },
  { name: "Jai Bhim", displayName: "Jai Bhim", genre: "drama", pace: "slow", year: 2021, tagline: "Justice for the oppressed", synopsis: "A lawyer fights for a tribal man falsely accused.", director: "T.J. Gnanavel", rating: 8.9, region: 'indian', language: 'Tamil' },
  { name: "Kadaisi Vivasayi", displayName: "Kadaisi Vivasayi", genre: "drama", pace: "slow", year: 2021, tagline: "The last farmer", synopsis: "An elderly farmer refuses to sell his land as mysterious deaths occur.", director: "M. Manikandan", rating: 8.5, region: 'indian', language: 'Tamil' },
  { name: "Koozhangal", displayName: "Koozhangal", genre: "drama", pace: "slow", year: 2021, tagline: "Pebbles", synopsis: "A father and son journey through drought-stricken Tamil Nadu.", director: "P.S. Vinothraj", rating: 7.3, region: 'indian', language: 'Tamil' },
  { name: "Minnal Murali", displayName: "Minnal Murali", genre: "action", pace: "fast", year: 2021, tagline: "A superhero rises", synopsis: "A tailor gets superpowers after being struck by lightning.", director: "Basil Joseph", rating: 7.6, region: 'indian', language: 'Malayalam' },
  { name: "Romancham", displayName: "Romancham", genre: "comedy", pace: "fast", year: 2023, tagline: "Spirit games", synopsis: "Friends playing with a Ouija board unleash hilarious chaos.", director: "Jithu Madhavan", rating: 8.0, region: 'indian', language: 'Malayalam' },
  { name: "Manjummel", displayName: "Manjummel Boys", genre: "thriller", pace: "fast", year: 2024, tagline: "Based on true events", synopsis: "Friends rescue one of their own from a cave. Based on true events.", director: "Chidambaram", rating: 8.5, region: 'indian', language: 'Malayalam' },
  { name: "2018", displayName: "2018", genre: "drama", pace: "fast", year: 2023, tagline: "Kerala floods", synopsis: "Stories of survival and heroism during Kerala's devastating floods.", director: "Jude Anthany Joseph", rating: 8.7, region: 'indian', language: 'Malayalam' },
  { name: "Bheeshma", displayName: "Bheeshma Parvam", genre: "action", pace: "fast", year: 2022, tagline: "The godfather of Fort Kochi", synopsis: "An aging don protects his territory from ambitious rivals.", director: "Amal Neerad", rating: 8.0, region: 'indian', language: 'Malayalam' },
  { name: "Joji", displayName: "Joji", genre: "thriller", pace: "slow", year: 2021, tagline: "Macbeth in Kerala", synopsis: "A man's greed leads him to unspeakable acts against his family.", director: "Dileesh Pothan", rating: 8.0, region: 'indian', language: 'Malayalam' },
  { name: "Nayattu", displayName: "Nayattu", genre: "thriller", pace: "fast", year: 2021, tagline: "The hunt", synopsis: "Three cops become fugitives in a politically charged case.", director: "Martin Prakkat", rating: 8.3, region: 'indian', language: 'Malayalam' },
  { name: "Salaar", displayName: "Salaar", genre: "action", pace: "fast", year: 2023, tagline: "The saga begins", synopsis: "A violent man rises in a lawless city-state.", director: "Prashanth Neel", rating: 6.9, region: 'indian', language: 'Telugu' },
  { name: "Pushpa2", displayName: "Pushpa 2: The Rule", genre: "action", pace: "fast", year: 2024, tagline: "The rise continues", synopsis: "Pushpa's empire grows as enemies multiply.", director: "Sukumar", rating: 7.5, region: 'indian', language: 'Telugu' },
  { name: "Baahubali2", displayName: "Baahubali 2: The Conclusion", genre: "action", pace: "fast", year: 2017, tagline: "Why did Kattappa kill Baahubali?", synopsis: "The epic conclusion to Baahubali's saga.", director: "S.S. Rajamouli", rating: 8.2, region: 'indian', language: 'Telugu' },
  { name: "Animal", displayName: "Animal", genre: "action", pace: "fast", year: 2023, tagline: "Papa ki pari", synopsis: "A man's obsessive love for his father leads to violence.", director: "Sandeep Reddy Vanga", rating: 6.5, region: 'indian', language: 'Hindi' },
  { name: "Dunki", displayName: "Dunki", genre: "drama", pace: "slow", year: 2023, tagline: "The illegal route", synopsis: "Villagers attempt illegal immigration through dangerous routes.", director: "Rajkumar Hirani", rating: 6.8, region: 'indian', language: 'Hindi' },
  { name: "Jawan", displayName: "Jawan", genre: "action", pace: "fast", year: 2023, tagline: "Ready for action", synopsis: "A vigilante and his team expose government corruption.", director: "Atlee", rating: 7.1, region: 'indian', language: 'Hindi' },
  { name: "Rocky Aur", displayName: "Rocky Aur Rani", genre: "romance", pace: "fast", year: 2023, tagline: "Love across worlds", synopsis: "Two people from different worlds fall in love.", director: "Karan Johar", rating: 6.8, region: 'indian', language: 'Hindi' },
  { name: "Sam Bahadur", displayName: "Sam Bahadur", genre: "drama", pace: "slow", year: 2023, tagline: "A soldier's life", synopsis: "The life of legendary Indian general Sam Manekshaw.", director: "Meghna Gulzar", rating: 7.5, region: 'indian', language: 'Hindi' },
  { name: "12th Fail", displayName: "12th Fail", genre: "drama", pace: "slow", year: 2023, tagline: "Never give up", synopsis: "A poor student's inspiring journey to become an IPS officer.", director: "Vidhu Vinod Chopra", rating: 9.0, region: 'indian', language: 'Hindi' },
  { name: "Article370", displayName: "Article 370", genre: "thriller", pace: "fast", year: 2024, tagline: "The decision that changed history", synopsis: "The story behind revoking Kashmir's special status.", director: "Aditya Suhas Jambhale", rating: 7.8, region: 'indian', language: 'Hindi' },
  { name: "Fighter", displayName: "Fighter", genre: "action", pace: "fast", year: 2024, tagline: "Air warriors", synopsis: "Indian Air Force pilots in action during a crisis.", director: "Siddharth Anand", rating: 6.3, region: 'indian', language: 'Hindi' },
  { name: "Crew", displayName: "Crew", genre: "comedy", pace: "fast", year: 2024, tagline: "Three flight attendants", synopsis: "Three flight attendants accidentally become gold smugglers.", director: "Rajesh A Krishnan", rating: 6.5, region: 'indian', language: 'Hindi' },
  { name: "Shaitaan", displayName: "Shaitaan", genre: "thriller", pace: "fast", year: 2024, tagline: "Evil has arrived", synopsis: "A family's vacation turns nightmarish when a stranger arrives.", director: "Vikas Bahl", rating: 7.3, region: 'indian', language: 'Hindi' },
  { name: "Kalki", displayName: "Kalki 2898 AD", genre: "scifi", pace: "fast", year: 2024, tagline: "The future is here", synopsis: "A mythological epic set in a dystopian future.", director: "Nag Ashwin", rating: 7.5, region: 'indian', language: 'Telugu' },
  { name: "Aavesham", displayName: "Aavesham", genre: "comedy", pace: "fast", year: 2024, tagline: "Rage and comedy", synopsis: "College students encounter a local gangster.", director: "Jithu Madhavan", rating: 7.8, region: 'indian', language: 'Malayalam' },
  { name: "Bramayugam", displayName: "Bramayugam", genre: "thriller", pace: "slow", year: 2024, tagline: "Dark sorcery", synopsis: "A folk singer is trapped in a cursed mansion.", director: "Rahul Sadasivan", rating: 8.0, region: 'indian', language: 'Malayalam' },
  { name: "Maharaja", displayName: "Maharaja", genre: "thriller", pace: "fast", year: 2024, tagline: "Revenge", synopsis: "A barber seeks revenge for his daughter.", director: "Nithilan Saminathan", rating: 8.5, region: 'indian', language: 'Tamil' },
  { name: "Laapataa", displayName: "Laapataa Ladies", genre: "comedy", pace: "slow", year: 2024, tagline: "Lost brides", synopsis: "Two brides get swapped during a train journey.", director: "Kiran Rao", rating: 8.4, region: 'indian', language: 'Hindi' },

  // ========== FOREIGN MOVIES (Hollywood & International) ==========
  
  // Action - Fast
  { 
    name: "Avengers", 
    displayName: "The Avengers", 
    genre: "action", 
    pace: "fast", 
    year: 2012, 
    tagline: "Some assembly required",
    synopsis: "Earth's mightiest heroes must learn to work together when an otherworldly army threatens global annihilation. Egos clash before they can save the world.",
    director: "Joss Whedon", 
    rating: 8.0,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Inception", 
    displayName: "Inception", 
    genre: "scifi", 
    pace: "fast", 
    year: 2010, 
    tagline: "Your mind is the scene of the crime",
    synopsis: "A thief who steals secrets from dreams is offered a chance at redemption: plant an idea instead. Reality becomes a maze where nothing is what it seems.",
    director: "Christopher Nolan", 
    rating: 8.8,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "MadMax", 
    displayName: "Mad Max: Fury Road", 
    genre: "action", 
    pace: "fast", 
    year: 2015, 
    tagline: "What a lovely day",
    synopsis: "In a post-apocalyptic wasteland, a drifter and a rebel warrior flee a tyrannical warlord in a relentless chase across the desert. Pure vehicular mayhem.",
    director: "George Miller", 
    rating: 8.1,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "JohnWick", 
    displayName: "John Wick", 
    genre: "action", 
    pace: "fast", 
    year: 2014, 
    tagline: "Don't set him off",
    synopsis: "A retired assassin comes out of hiding to seek revenge on those who took everything from him. All this over a puppy? You'd understand if you saw what they did.",
    director: "Chad Stahelski", 
    rating: 7.4,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "DarkKnight", 
    displayName: "The Dark Knight", 
    genre: "action", 
    pace: "fast", 
    year: 2008, 
    tagline: "Why so serious?",
    synopsis: "Batman faces his greatest psychological test when a chaos-loving criminal mastermind holds Gotham hostage. Some men just want to watch the world burn.",
    director: "Christopher Nolan", 
    rating: 9.0,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "TopGun", 
    displayName: "Top Gun: Maverick", 
    genre: "action", 
    pace: "fast", 
    year: 2022, 
    tagline: "Feel the need for speed",
    synopsis: "An aging fighter pilot must confront his past while training a new generation for an impossible mission. Legacy, sacrifice, and breathtaking aerial combat await.",
    director: "Joseph Kosinski", 
    rating: 8.3,
    region: 'foreign',
    language: 'English'
  },
  
  // Action - Slow/Epic
  { 
    name: "Gladiator", 
    displayName: "Gladiator", 
    genre: "action", 
    pace: "slow", 
    year: 2000, 
    tagline: "What we do in life echoes in eternity",
    synopsis: "A betrayed Roman general is sold into slavery and rises as a gladiator to avenge his family. In this life or the next, he will have his revenge.",
    director: "Ridley Scott", 
    rating: 8.5,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Interstellar", 
    displayName: "Interstellar", 
    genre: "scifi", 
    pace: "slow", 
    year: 2014, 
    tagline: "Mankind was born on Earth. It was never meant to die here",
    synopsis: "A father leaves a dying Earth to find humanity a new home among the stars. Love, time, and space itself will be tested in this cosmic odyssey.",
    director: "Christopher Nolan", 
    rating: 8.7,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Dune", 
    displayName: "Dune", 
    genre: "scifi", 
    pace: "slow", 
    year: 2021, 
    tagline: "Beyond fear, destiny awaits",
    synopsis: "A noble heir becomes the catalyst for revolution on a dangerous desert planet. Politics, prophecy, and giant sandworms collide in this visionary epic.",
    director: "Denis Villeneuve", 
    rating: 8.0,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Oppenheimer", 
    displayName: "Oppenheimer", 
    genre: "drama", 
    pace: "slow", 
    year: 2023, 
    tagline: "The world forever changes",
    synopsis: "The physicist who built the atomic bomb wrestles with the moral weight of his creation. Genius, guilt, and the fate of humanity collide.",
    director: "Christopher Nolan", 
    rating: 8.4,
    region: 'foreign',
    language: 'English'
  },
  
  // Romance
  { 
    name: "Titanic", 
    displayName: "Titanic", 
    genre: "romance", 
    pace: "slow", 
    year: 1997, 
    tagline: "Nothing on Earth could come between them",
    synopsis: "A society girl and a penniless artist fall deeply in love aboard a doomed ocean liner. When tragedy strikes, their love becomes eternal.",
    director: "James Cameron", 
    rating: 7.9,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Notebook", 
    displayName: "The Notebook", 
    genre: "romance", 
    pace: "slow", 
    year: 2004, 
    tagline: "Behind every great love is a great story",
    synopsis: "A poor young man and a rich young woman fall in love one magical summer. Decades later, their story is read to a woman who can no longer remember.",
    director: "Nick Cassavetes", 
    rating: 7.8,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "LaLaLand", 
    displayName: "La La Land", 
    genre: "romance", 
    pace: "slow", 
    year: 2016, 
    tagline: "Here's to the fools who dream",
    synopsis: "An aspiring actress and a jazz musician chase their dreams in Los Angeles. As careers take off, they must choose between ambition and love.",
    director: "Damien Chazelle", 
    rating: 8.0,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "PastLives", 
    displayName: "Past Lives", 
    genre: "romance", 
    pace: "slow", 
    year: 2023, 
    tagline: "In-yun: The connections between people across lives",
    synopsis: "Childhood sweethearts separated by continents reconnect as adults. A profound meditation on fate, choices, and the lives we might have lived.",
    director: "Celine Song", 
    rating: 8.0,
    region: 'foreign',
    language: 'English'
  },
  
  // Comedy
  { 
    name: "Hangover", 
    displayName: "The Hangover", 
    genre: "comedy", 
    pace: "fast", 
    year: 2009, 
    tagline: "Some guys just can't handle Vegas",
    synopsis: "Three friends wake up from a bachelor party in Vegas with no memory and no groom. A tiger, a baby, and Mike Tyson are just the beginning.",
    director: "Todd Phillips", 
    rating: 7.7,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Deadpool", 
    displayName: "Deadpool", 
    genre: "comedy", 
    pace: "fast", 
    year: 2016, 
    tagline: "With great power comes great irresponsibility",
    synopsis: "A wisecracking mercenary becomes an unkillable antihero after a rogue experiment. He's after the man who ruined his life. Fourth wall? What fourth wall?",
    director: "Tim Miller", 
    rating: 8.0,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "ForrestGump", 
    displayName: "Forrest Gump", 
    genre: "drama", 
    pace: "slow", 
    year: 1994, 
    tagline: "Life is like a box of chocolates",
    synopsis: "A simple man with a big heart unknowingly influences major historical events while pursuing his one true love. Running becomes a metaphor for life.",
    director: "Robert Zemeckis", 
    rating: 8.8,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "GrandBudapest", 
    displayName: "The Grand Budapest Hotel", 
    genre: "comedy", 
    pace: "fast", 
    year: 2014, 
    tagline: "A story that never was",
    synopsis: "A legendary concierge and his lobby boy get caught up in theft, murder, and a priceless painting. Wes Anderson at his most whimsical.",
    director: "Wes Anderson", 
    rating: 8.1,
    region: 'foreign',
    language: 'English'
  },
  
  // Thriller
  { 
    name: "SevenSe", 
    displayName: "Se7en", 
    genre: "thriller", 
    pace: "fast", 
    year: 1995, 
    tagline: "Seven deadly sins. Seven ways to die.",
    synopsis: "Two detectives track a serial killer using the seven deadly sins as his murder methodology. What's in the box? You don't want to know.",
    director: "David Fincher", 
    rating: 8.6,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "GoneGirl", 
    displayName: "Gone Girl", 
    genre: "thriller", 
    pace: "fast", 
    year: 2014, 
    tagline: "You don't know what you've got 'til it's gone",
    synopsis: "When a woman disappears on her wedding anniversary, suspicion falls on her husband. But marriage has many secrets, and nothing is as it appears.",
    director: "David Fincher", 
    rating: 8.1,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "GetOut", 
    displayName: "Get Out", 
    genre: "thriller", 
    pace: "fast", 
    year: 2017, 
    tagline: "Just because you're invited, doesn't mean you're welcome",
    synopsis: "A young Black man visits his white girlfriend's family estate and uncovers a disturbing secret. Social commentary meets pure terror.",
    director: "Jordan Peele", 
    rating: 7.7,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Parasite", 
    displayName: "Parasite", 
    genre: "thriller", 
    pace: "fast", 
    year: 2019, 
    tagline: "Act like you own the place",
    synopsis: "A poor family infiltrates a wealthy household one by one. When their worlds collide, the consequences are explosive. Class warfare has never been this twisted.",
    director: "Bong Joon-ho", 
    rating: 8.5,
    region: 'foreign',
    language: 'Korean'
  },
  { 
    name: "Shutter", 
    displayName: "Shutter Island", 
    genre: "thriller", 
    pace: "slow", 
    year: 2010, 
    tagline: "Some places never let you go",
    synopsis: "A U.S. Marshal investigates a psychiatric facility on a remote island. The truth he finds will shatter everything he thought he knew about himself.",
    director: "Martin Scorsese", 
    rating: 8.2,
    region: 'foreign',
    language: 'English'
  },
  
  // Drama
  { 
    name: "Shawshank", 
    displayName: "The Shawshank Redemption", 
    genre: "drama", 
    pace: "slow", 
    year: 1994, 
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    synopsis: "A wrongfully imprisoned banker befriends a fellow inmate over decades. Through patience and quiet genius, he never loses hope for freedom.",
    director: "Frank Darabont", 
    rating: 9.3,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "GoodWill", 
    displayName: "Good Will Hunting", 
    genre: "drama", 
    pace: "slow", 
    year: 1997, 
    tagline: "Some people can never believe in themselves, until someone believes in them",
    synopsis: "A janitor at MIT is secretly a math genius carrying deep emotional wounds. A therapist becomes his unlikely guide to healing and self-discovery.",
    director: "Gus Van Sant", 
    rating: 8.3,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Whiplash", 
    displayName: "Whiplash", 
    genre: "drama", 
    pace: "slow", 
    year: 2014, 
    tagline: "The road to greatness can take you to the edge",
    synopsis: "A young drummer enrolls at a cutthroat music conservatory where a ruthless instructor will stop at nothing to push students to their limits.",
    director: "Damien Chazelle", 
    rating: 8.5,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Everything", 
    displayName: "Everything Everywhere All at Once", 
    genre: "scifi", 
    pace: "fast", 
    year: 2022, 
    tagline: "The universe is so much bigger than you realize",
    synopsis: "A laundromat owner discovers she can access parallel universe versions of herself. The fate of the multiverse depends on embracing what she's always overlooked.",
    director: "Daniels", 
    rating: 8.0,
    region: 'foreign',
    language: 'English'
  },
  
  // Sci-Fi
  { 
    name: "Matrix", 
    displayName: "The Matrix", 
    genre: "scifi", 
    pace: "fast", 
    year: 1999, 
    tagline: "Reality is a thing of the past",
    synopsis: "A computer hacker learns that reality as he knows it is a simulation. Taking the red pill is just the beginning of the rabbit hole.",
    director: "Wachowskis", 
    rating: 8.7,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "BladeRunner", 
    displayName: "Blade Runner 2049", 
    genre: "scifi", 
    pace: "slow", 
    year: 2017, 
    tagline: "The key to the future is finally unearthed",
    synopsis: "A blade runner unearths a secret that could plunge society into chaos. His search for answers leads to a man who has been missing for thirty years.",
    director: "Denis Villeneuve", 
    rating: 8.0,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Arrival", 
    displayName: "Arrival", 
    genre: "scifi", 
    pace: "slow", 
    year: 2016, 
    tagline: "Why are they here?",
    synopsis: "A linguist is recruited to communicate with aliens who have landed on Earth. Understanding their language changes everything she knows about time.",
    director: "Denis Villeneuve", 
    rating: 7.9,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "ExMachina", 
    displayName: "Ex Machina", 
    genre: "scifi", 
    pace: "slow", 
    year: 2014, 
    tagline: "There is nothing more human than the will to survive",
    synopsis: "A programmer is invited to administer the Turing test on an AI with human appearance. Who is testing whom becomes increasingly unclear.",
    director: "Alex Garland", 
    rating: 7.7,
    region: 'foreign',
    language: 'English'
  },
  // More International Movies
  { 
    name: "Prestige", 
    displayName: "The Prestige", 
    genre: "thriller", 
    pace: "slow", 
    year: 2006, 
    tagline: "Are you watching closely?",
    synopsis: "Two rival magicians engage in a bitter war of one-upmanship, each pushing boundaries of obsession. The final trick will cost everything.",
    director: "Christopher Nolan", 
    rating: 8.5,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "FightClub", 
    displayName: "Fight Club", 
    genre: "thriller", 
    pace: "fast", 
    year: 1999, 
    tagline: "Mischief. Mayhem. Soap.",
    synopsis: "An insomniac office worker forms an underground fight club with a charismatic soap salesman. The first rule is you don't talk about it.",
    director: "David Fincher", 
    rating: 8.8,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Oldboy", 
    displayName: "Oldboy", 
    genre: "thriller", 
    pace: "fast", 
    year: 2003, 
    tagline: "15 years of imprisonment. 5 days of vengeance.",
    synopsis: "A man is mysteriously imprisoned for 15 years then suddenly released. His quest for answers leads to a truth more horrifying than captivity.",
    director: "Park Chan-wook", 
    rating: 8.4,
    region: 'foreign',
    language: 'Korean'
  },
  { 
    name: "Amelie", 
    displayName: "Amélie", 
    genre: "romance", 
    pace: "slow", 
    year: 2001, 
    tagline: "She'll change your life",
    synopsis: "A shy Parisian waitress decides to secretly improve the lives of those around her while struggling with her own isolation. Whimsy meets heart.",
    director: "Jean-Pierre Jeunet", 
    rating: 8.3,
    region: 'foreign',
    language: 'French'
  },
  { 
    name: "Spirited", 
    displayName: "Spirited Away", 
    genre: "scifi", 
    pace: "slow", 
    year: 2001, 
    tagline: "The tunnel led Chihiro to a mysterious town",
    synopsis: "A young girl enters a world of spirits and gods to save her parents. Miyazaki's masterpiece about courage, identity, and growing up.",
    director: "Hayao Miyazaki", 
    rating: 8.6,
    region: 'foreign',
    language: 'Japanese'
  },
  { 
    name: "Godfather", 
    displayName: "The Godfather", 
    genre: "drama", 
    pace: "slow", 
    year: 1972, 
    tagline: "An offer you can't refuse",
    synopsis: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son. Power, loyalty, and family collide in this American epic.",
    director: "Francis Ford Coppola", 
    rating: 9.2,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "PulpFiction", 
    displayName: "Pulp Fiction", 
    genre: "thriller", 
    pace: "fast", 
    year: 1994, 
    tagline: "You won't know the facts until you've seen the fiction",
    synopsis: "Interlocking tales of crime and redemption in Los Angeles. Hitmen, boxers, and gangsters dance through Tarantino's nonlinear masterpiece.",
    director: "Quentin Tarantino", 
    rating: 8.9,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "Departed", 
    displayName: "The Departed", 
    genre: "thriller", 
    pace: "fast", 
    year: 2006, 
    tagline: "Lies. Betrayal. Sacrifice.",
    synopsis: "A cop goes undercover in the mob while a mole infiltrates the police. Each must discover the other before their cover is blown.",
    director: "Martin Scorsese", 
    rating: 8.5,
    region: 'foreign',
    language: 'English'
  },
  { 
    name: "MemoriesM", 
    displayName: "Memories of Murder", 
    genre: "thriller", 
    pace: "slow", 
    year: 2003, 
    tagline: "Based on a true story",
    synopsis: "Two detectives hunt South Korea's first serial killer in the 1980s. The truth remains just out of reach. Based on real unsolved murders.",
    director: "Bong Joon-ho", 
    rating: 8.1,
    region: 'foreign',
    language: 'Korean'
  },
  { 
    name: "Prisoners", 
    displayName: "Prisoners", 
    genre: "thriller", 
    pace: "slow", 
    year: 2013, 
    tagline: "Every moment matters",
    synopsis: "When his daughter is kidnapped, a father takes matters into his own hands. How far would you go to protect your child?",
    director: "Denis Villeneuve", 
    rating: 8.1,
    region: 'foreign',
    language: 'English'
  },
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
    text: "What's your mood tonight?",
    subtext: "First instinct, don't overthink it",
    options: [
      { text: "I want excitement", subtext: "Action, thrills, edge-of-seat stuff", effects: { action: 2, thriller: 1, fast: 1 } },
      { text: "I want to feel something", subtext: "Emotions, love, real stories", effects: { romance: 2, drama: 1, slow: 1 } },
      { text: "I want to escape", subtext: "Laughs, wonder, new worlds", effects: { comedy: 2, scifi: 1 } },
    ],
    mode: ['quick', 'standard', 'deep'],
  },
  {
    id: 2,
    text: "Pick your perfect movie moment",
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
    text: "How do you want to feel after?",
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
    text: "Your ideal movie setting?",
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
    text: "Choose your hero",
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
    text: "Your attention span right now?",
    subtext: "Be honest",
    options: [
      { text: "Hook me fast", effects: { fast: 2, comedy: 1 } },
      { text: "I can be patient", effects: { slow: 2, drama: 1 } },
      { text: "Depends on the story", effects: { thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  {
    id: 7,
    text: "Pick a soundtrack",
    options: [
      { text: "Epic orchestral", effects: { action: 2, drama: 1 } },
      { text: "Melancholic and soft", effects: { romance: 2, slow: 1 } },
      { text: "Upbeat and fun", effects: { comedy: 2, fast: 1 } },
      { text: "Electronic and moody", effects: { scifi: 2, thriller: 1 } },
    ],
    mode: ['standard', 'deep'],
  },
  
  // Deep Mode Additional Questions (+5 = 12 total)
  {
    id: 8,
    text: "Great movies make you question...",
    options: [
      { text: "What you're capable of", effects: { action: 2, drama: 1 } },
      { text: "Who and how you love", effects: { romance: 2, drama: 1 } },
      { text: "If life is too serious", effects: { comedy: 2 } },
      { text: "What reality even is", effects: { scifi: 2, thriller: 2 } },
    ],
    mode: ['deep'],
  },
  {
    id: 9,
    text: "How do you feel about sad endings?",
    options: [
      { text: "Bring on the tears", effects: { romance: 1, drama: 2, slow: 1 } },
      { text: "Only if it's earned", effects: { thriller: 1, slow: 1 } },
      { text: "I'd rather not", effects: { comedy: 2, action: 1, fast: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 10,
    text: "Pick an era",
    options: [
      { text: "The distant future", effects: { scifi: 2, action: 1 } },
      { text: "Modern day", effects: { comedy: 1, romance: 1, thriller: 1 } },
      { text: "A historical setting", effects: { romance: 2, drama: 2, slow: 1 } },
      { text: "Somewhere imaginary", effects: { scifi: 1, action: 1, comedy: 1 } },
    ],
    mode: ['deep'],
  },
  {
    id: 11,
    text: "Your visual style preference?",
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
    text: "Last one: What are you hoping for?",
    options: [
      { text: "A crowd-pleaser", effects: { action: 1, comedy: 1, fast: 1 } },
      { text: "A hidden gem", effects: { drama: 2, romance: 1, slow: 1 } },
      { text: "Something balanced", effects: { thriller: 1, scifi: 1 } },
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

export function recommendMovie(scores: Scores, region: Region): { movie: Movie; reasons: string[]; matchPercent: number } {
  const regionMovies = movies.filter(m => m.region === region);
  let bestScore = -1;
  const candidates: { movie: Movie; score: number }[] = [];

  for (const movie of regionMovies) {
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

  return { movie, reasons, matchPercent };
}

export interface SavedResult {
  id: string;
  movie: Movie;
  reasons: string[];
  matchPercent: number;
  date: string;
  mode: QuizMode;
  region: Region;
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
