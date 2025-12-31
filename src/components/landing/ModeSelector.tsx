import { Zap, Target, Brain, ArrowRight } from 'lucide-react';
import { QuizMode } from '@/data/movies';

interface ModeSelectorProps {
  onSelect: (mode: QuizMode) => void;
}

const modes = [
  {
    id: 'quick' as QuizMode,
    name: 'Quick Pick',
    description: 'Just 3 questions. For when you need a movie now.',
    time: '~30 seconds',
    icon: Zap,
    gradient: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30 hover:border-yellow-500/50',
    iconColor: 'text-yellow-500',
  },
  {
    id: 'standard' as QuizMode,
    name: 'Standard',
    description: '7 questions for a balanced, thoughtful recommendation.',
    time: '~2 minutes',
    icon: Target,
    gradient: 'from-primary/20 to-blue-500/20',
    border: 'border-primary/30 hover:border-primary/50',
    iconColor: 'text-primary',
    recommended: true,
  },
  {
    id: 'deep' as QuizMode,
    name: 'Deep Dive',
    description: '12 questions. Maximum personalization for the perfect match.',
    time: '~4 minutes',
    icon: Brain,
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30 hover:border-purple-500/50',
    iconColor: 'text-purple-500',
  },
];

export function ModeSelector({ onSelect }: ModeSelectorProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Choose your experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            How deep do you want to go? More questions means more accurate recommendations.
          </p>
        </div>

        {/* Mode cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <button
              key={mode.id}
              onClick={() => onSelect(mode.id)}
              className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${mode.gradient} ${mode.border} transition-all duration-300 hover:scale-[1.02] text-left animate-fade-in`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {mode.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Recommended
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl bg-card/50 flex items-center justify-center mb-4 ${mode.iconColor}`}>
                <mode.icon className="w-6 h-6" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">
                {mode.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {mode.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground/70">
                  {mode.time}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}