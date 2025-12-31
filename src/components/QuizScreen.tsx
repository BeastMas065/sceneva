import { useState, useEffect } from 'react';
import { questions, Question, Scores } from '@/data/movies';
import { ChevronRight } from 'lucide-react';

interface QuizScreenProps {
  userName: string;
  onComplete: (scores: Scores) => void;
}

export function QuizScreen({ userName, onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({
    action: 0,
    romance: 0,
    comedy: 0,
    fast: 0,
    slow: 0,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    if (isTransitioning) return;
    
    setSelectedOption(optionIndex);
    const option = question.options[optionIndex];
    
    // Update scores
    const newScores = { ...scores };
    if (option.effects.action) newScores.action += option.effects.action;
    if (option.effects.romance) newScores.romance += option.effects.romance;
    if (option.effects.comedy) newScores.comedy += option.effects.comedy;
    if (option.effects.fast) newScores.fast += option.effects.fast;
    if (option.effects.slow) newScores.slow += option.effects.slow;
    setScores(newScores);

    // Transition to next question or complete
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsTransitioning(false);
      } else {
        onComplete(newScores);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col spotlight-bg cinema-grain relative overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question counter */}
      <div className="fixed top-6 left-6 z-40">
        <span className="text-muted-foreground text-sm">
          Question <span className="text-gold font-semibold">{currentQuestion + 1}</span> of {questions.length}
        </span>
      </div>

      {/* User greeting */}
      <div className="fixed top-6 right-6 z-40">
        <span className="text-muted-foreground text-sm">
          Hi, <span className="text-gold">{userName}</span>
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div 
          className={`max-w-3xl w-full text-center transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Question */}
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 leading-tight">
            {question.text}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isTransitioning}
                className={`group w-full p-6 md:p-8 rounded-2xl border transition-all duration-300 text-left ${
                  selectedOption === index
                    ? 'bg-gold/20 border-gold glow-gold'
                    : 'bg-card/30 border-border/50 hover:bg-card/60 hover:border-gold/30'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg md:text-xl font-medium">{option.text}</span>
                  <ChevronRight 
                    className={`w-6 h-6 text-gold transition-transform duration-300 ${
                      selectedOption === index ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
}
