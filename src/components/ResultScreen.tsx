import { useState, useEffect } from 'react';
import { Movie } from '@/data/movies';
import { Film, RotateCcw, Star, Clock, Zap, Heart, Laugh, CheckCircle2 } from 'lucide-react';

interface ResultScreenProps {
  movie: Movie;
  reasons: string[];
  userName: string;
  onRetake: () => void;
}

export function ResultScreen({ movie, reasons, userName, onRetake }: ResultScreenProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Dramatic reveal delay
    const timer = setTimeout(() => setIsRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const genreIcon = {
    action: Zap,
    romance: Heart,
    comedy: Laugh,
  }[movie.genre];

  const GenreIcon = genreIcon;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 spotlight-bg cinema-grain relative overflow-hidden">
      {/* Dramatic spotlight */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] transition-all duration-1000 ${
          isRevealed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 0%, hsl(43 74% 49% / 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
        {/* Pre-reveal text */}
        <p 
          className={`text-muted-foreground mb-4 transition-all duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {userName}, your perfect movie is...
        </p>

        {/* Movie Card */}
        <div 
          className={`relative transition-all duration-1000 ${
            isRevealed 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-90 translate-y-8'
          }`}
        >
          <div className="relative bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm rounded-3xl border border-gold/30 p-8 md:p-12 glow-gold-intense overflow-hidden">
            {/* Decorative film strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            {/* Movie icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Film className="w-8 h-8 text-gold" />
            </div>

            {/* Movie title */}
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-gradient-gold">
              {movie.displayName}
            </h1>

            {/* Tagline */}
            {movie.tagline && (
              <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
                "{movie.tagline}"
              </p>
            )}

            {/* Tags */}
            <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
              {movie.year && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  {movie.year}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm capitalize">
                <GenreIcon className="w-3.5 h-3.5 text-gold" />
                {movie.genre}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm capitalize">
                <Star className="w-3.5 h-3.5 text-gold" />
                {movie.pace}-paced
              </span>
            </div>

            {/* Why this movie */}
            <div className="bg-background/30 rounded-xl p-6 text-left">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Why this movie?
              </h3>
              <ul className="space-y-3">
                {reasons.map((reason, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        {/* Retake button */}
        <button
          onClick={onRetake}
          className={`mt-10 inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-gold/30 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 ${
            isRevealed ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.2s' }}
        >
          <RotateCcw className="w-4 h-4" />
          Retake Quiz
        </button>

        {/* AI disclaimer */}
        <p 
          className={`mt-8 text-xs text-muted-foreground/50 ${
            isRevealed ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.4s' }}
        >
          Recommendations powered by CineMatch AI™
        </p>
      </div>
    </div>
  );
}
