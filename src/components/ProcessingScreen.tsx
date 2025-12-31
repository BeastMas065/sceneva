import { useEffect, useState } from 'react';
import { Brain, Film, Sparkles, Zap } from 'lucide-react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

const processingSteps = [
  { icon: Brain, text: "Analyzing your preferences..." },
  { icon: Zap, text: "Cross-referencing film database..." },
  { icon: Film, text: "Calculating compatibility scores..." },
  { icon: Sparkles, text: "Finding your perfect match..." },
];

export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= processingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 spotlight-bg cinema-grain relative overflow-hidden">
      {/* Pulsing ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Animated brain icon */}
        <div className="mb-12 relative">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 glow-gold-intense animate-pulse-glow">
            <Brain className="w-16 h-16 text-gold animate-float" />
          </div>
          
          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold rounded-full -translate-x-1/2 -translate-y-6" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-gold-light rounded-full -translate-x-1/2 translate-y-6" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-gradient-gold">
          AI Processing
        </h2>

        {/* Steps */}
        <div className="space-y-4">
          {processingSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isComplete = index < currentStep;

            return (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 ${
                  isActive 
                    ? 'bg-gold/10 border border-gold/30' 
                    : isComplete 
                      ? 'opacity-50' 
                      : 'opacity-20'
                }`}
              >
                <Icon 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-muted-foreground'
                  }`} 
                />
                <span 
                  className={`text-sm transition-colors duration-300 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {step.text}
                </span>
                {isActive && (
                  <div className="ml-auto flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                  </div>
                )}
                {isComplete && (
                  <span className="ml-auto text-gold text-sm">✓</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
