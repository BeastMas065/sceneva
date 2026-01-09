import { Zap, Target, Brain, ArrowRight } from 'lucide-react';
import { QuizMode } from '@/data/movies';

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
  return (
    <section className="relative py-20 px-4 border-t border-border overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-glow/[0.04] via-transparent to-accent/[0.03]" />
      
      {/* Subtle projector light beams */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-px bg-gradient-to-b from-glow/20 via-glow/5 to-transparent"
            style={{
              left: `${15 + i * 18}%`,
              height: '60%',
              transform: `rotate(${-8 + i * 4}deg)`,
            }}
          />
        ))}
      </div>

      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
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
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {mode.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-full whitespace-nowrap transition-colors duration-300 group-hover:bg-background group-hover:text-foreground shadow-lg shadow-glow/20">
                  Recommended
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
