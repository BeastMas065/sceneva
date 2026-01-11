import { Zap, Target, Brain, ArrowRight } from 'lucide-react';
import { QuizMode } from '@/data';
import { useEffect, useState } from 'react';

interface ModeSelectorProps {
  onSelect: (mode: QuizMode) => void;
}

const modes = [
  {
    id: 'quick' as QuizMode,
    name: 'Quick Pick',
    description: '3 questions. For when you need a movie now.',
    time: '~30 sec',
    icon: Zap,
  },
  {
    id: 'standard' as QuizMode,
    name: 'Standard',
    description: '7 questions for a balanced recommendation.',
    time: '~2 min',
    icon: Target,
    recommended: true,
    recommendedLabel: 'Recommended for first-time users',
  },
  {
    id: 'deep' as QuizMode,
    name: 'Deep Dive',
    description: '12 questions. Maximum personalization.',
    time: '~4 min',
    icon: Brain,
  },
];

export function ModeSelector({ onSelect }: ModeSelectorProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offset calculation (starts after hero ~85vh)
  const parallaxOffset = Math.max(0, scrollY - window.innerHeight * 0.6);

  return (
    <section className="relative py-20 px-4 border-t border-border overflow-hidden">
      {/* Large ambient color orbs with parallax */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-[90%] bg-gradient-to-bl from-glow/[0.25] via-glow/[0.12] to-transparent blur-[100px]"
        style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[50%] h-[70%] bg-gradient-to-tr from-accent/[0.2] via-accent/[0.08] to-transparent blur-[80px]"
        style={{ transform: `translateY(${parallaxOffset * -0.05}px)` }}
      />
      
      {/* Projector light beams with parallax */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-[3px] bg-gradient-to-b from-glow/40 via-glow/15 to-transparent blur-[2px]"
            style={{
              left: `${10 + i * 16}%`,
              height: '80%',
              transform: `rotate(${-10 + i * 4}deg) translateY(${parallaxOffset * 0.08}px)`,
            }}
          />
        ))}
      </div>

      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Warm spotlight from center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-glow/[0.2] via-glow/[0.08] to-transparent rounded-full blur-3xl"
        style={{ transform: `translate(-50%, -50%) translateY(${parallaxOffset * 0.05}px)` }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div 
          className="text-center mb-12"
          style={{ transform: `translateY(${parallaxOffset * -0.03}px)` }}
        >
          <h2 className="font-display text-3xl font-semibold mb-3">
            Choose your experience
          </h2>
          <p className="text-muted-foreground">
            More questions = more accurate recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <button
              key={mode.id}
              onClick={() => onSelect(mode.id)}
              className="group relative p-6 pt-8 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-left animate-fade-in transition-all duration-300 hover:bg-foreground hover:border-foreground hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl hover:shadow-glow/10"
              style={{ 
                animationDelay: `${0.1 * index}s`,
                transform: `translateY(${parallaxOffset * -0.02}px)`,
              }}
            >
              {mode.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-medium rounded-full whitespace-nowrap transition-colors duration-300 group-hover:bg-accent/90 shadow-lg">
                    ★ Recommended
                  </div>
                  {'recommendedLabel' in mode && mode.recommendedLabel && (
                    <p className="text-[10px] text-accent mt-1 text-center font-medium whitespace-nowrap">
                      {mode.recommendedLabel}
                    </p>
                  )}
                </div>
              )}

              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-background/20 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-glow/20">
                <mode.icon className="w-5 h-5 transition-all duration-300 group-hover:text-background" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-background">
                {mode.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed transition-colors duration-300 group-hover:text-background/70">
                {mode.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-background/60">
                  {mode.time}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-background group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}