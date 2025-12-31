import { useState } from 'react';
import { Film, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 spotlight-bg cinema-grain relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] animate-spotlight-pulse" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo/Icon */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 glow-gold">
            <Film className="w-10 h-10 text-gold" />
          </div>
        </div>

        {/* Title */}
        <h1 
          className="font-display text-5xl md:text-7xl font-bold mb-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gradient-gold">CineMatch</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in font-light"
          style={{ animationDelay: '0.3s' }}
        >
          AI-Powered Movie Recommendations
        </p>
        
        <div 
          className="flex items-center justify-center gap-2 text-gold/60 text-sm mb-12 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Powered by advanced preference analysis</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Name Input Form */}
        <form 
          onSubmit={handleSubmit}
          className="animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="relative mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full max-w-md mx-auto px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-foreground text-center text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-300"
              autoFocus
            />
          </div>
          
          <button
            type="submit"
            disabled={!name.trim()}
            className="group relative px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed glow-gold"
          >
            <span className="relative z-10">Begin Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </form>

        {/* Decorative elements */}
        <div 
          className="mt-16 flex items-center justify-center gap-8 text-muted-foreground/30 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-border" />
          <span className="text-xs uppercase tracking-widest">3 questions • Personalized picks</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </div>
  );
}
