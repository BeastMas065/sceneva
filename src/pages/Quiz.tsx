import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { 
  QuizMode, 
  getQuestionsForMode, 
  Scores, 
  initialScores,
  recommendMovie,
  saveResult,
} from '@/data/movies';
import { PageTransition, FadeOverlay } from '@/components/ui/PageTransition';

export default function Quiz() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = (searchParams.get('mode') as QuizMode) || 'standard';
  
  const questions = getQuestionsForMode(mode);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFade, setShowFade] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleComplete = useCallback((finalScores: Scores) => {
    // Show fade overlay
    setShowFade(true);
    
    // Calculate result and save
    const result = recommendMovie(finalScores);
    const saved = saveResult({
      movie: result.movie,
      reasons: result.reasons,
      matchPercent: result.matchPercent,
      mode,
    });
    
    // Navigate after fade
    setTimeout(() => {
      navigate(`/result/${saved.id}`);
    }, 500);
  }, [navigate, mode]);

  const handleAnswer = (optionIndex: number) => {
    if (isTransitioning) return;
    
    setSelectedOption(optionIndex);
    const option = question.options[optionIndex];
    
    // Update scores
    const newScores = { ...scores };
    Object.entries(option.effects).forEach(([key, value]) => {
      if (value) {
        newScores[key as keyof Scores] += value;
      }
    });
    setScores(newScores);

    // Transition
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (!isLastQuestion) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsTransitioning(false);
      } else {
        handleComplete(newScores);
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <FadeOverlay isActive={showFade} />
      
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 ambient-glow opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 ambient-glow-bottom" />

        {/* Progress bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
          <div 
            className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <header className="relative z-10 px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
          
          <div className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">{currentQuestion + 1}</span>
            <span className="mx-1">/</span>
            <span>{questions.length}</span>
          </div>

          <div className="text-xs text-muted-foreground/50 uppercase tracking-wider">
            {mode} mode
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
          <PageTransition key={currentQuestion}>
            <div 
              className={`max-w-2xl w-full text-center transition-all duration-400 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Question */}
              <div className="mb-12">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
                  {question.text}
                </h1>
                {question.subtext && (
                  <p className="text-muted-foreground text-lg">
                    {question.subtext}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isTransitioning}
                    className={`group w-full p-5 sm:p-6 rounded-2xl border transition-all duration-300 text-left ${
                      selectedOption === index
                        ? 'bg-primary/15 border-primary glow'
                        : 'glass glass-hover'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-base sm:text-lg font-medium block">
                          {option.text}
                        </span>
                        {option.subtext && (
                          <span className="text-sm text-muted-foreground mt-1 block">
                            {option.subtext}
                          </span>
                        )}
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                          selectedOption === index 
                            ? 'text-primary translate-x-1' 
                            : 'text-muted-foreground opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </PageTransition>
        </main>
      </div>
    </>
  );
}