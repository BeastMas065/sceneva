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
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-semibold mb-3">
            Choose your experience
          </h2>
          <p className="text-muted-foreground">
            More questions = more accurate recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {modes.map((mode, index) => (
            <button
              key={mode.id}
              onClick={() => onSelect(mode.id)}
              className={`group relative p-6 rounded-xl border border-border bg-card card-glow border-animate text-left animate-fade-in`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {mode.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-md">
                  Recommended
                </div>
              )}

              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-background group-hover:scale-110">
                <mode.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-foreground">
                {mode.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {mode.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {mode.time}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
