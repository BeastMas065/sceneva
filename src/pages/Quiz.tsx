import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Globe, MapPin } from 'lucide-react';
import { 
  QuizMode, 
  Region,
  getQuestionsForMode, 
  Scores, 
  initialScores,
  recommendMovie,
  saveResult,
} from '@/data/movies';
import { PageTransition } from '@/components/ui/PageTransition';

export default function Quiz() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = (searchParams.get('mode') as QuizMode) || 'standard';
  
  const questions = getQuestionsForMode(mode);
  
  const [region, setRegion] = useState<Region | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFade, setShowFade] = useState(false);

  const question = questions[currentQuestion];
  const progress = region ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleComplete = useCallback((finalScores: Scores) => {
    if (!region) return;
    setShowFade(true);
    
    const result = recommendMovie(finalScores, region);
    const saved = saveResult({
      movie: result.movie,
      reasons: result.reasons,
      matchPercent: result.matchPercent,
      mode,
      region,
    });
    
    setTimeout(() => {
      navigate(`/result/${saved.id}`);
    }, 500);
  }, [navigate, mode, region]);

  const handleAnswer = (optionIndex: number) => {
    if (isTransitioning) return;
    
    setSelectedOption(optionIndex);
    const option = question.options[optionIndex];
    
    const newScores = { ...scores };
    Object.entries(option.effects).forEach(([key, value]) => {
      if (value) {
        newScores[key as keyof Scores] += value;
      }
    });
    setScores(newScores);

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
    } else if (region) {
      setRegion(null);
    } else {
      navigate('/');
    }
  };

  // Region selection screen
  if (!region) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="px-4 sm:px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 pb-20">
          <PageTransition>
            <div className="max-w-xl w-full text-center">
              <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                What are you in the mood for?
              </h1>
              <p className="text-muted-foreground mb-10">
                Choose your cinema preference
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setRegion('indian')}
                  className="group p-6 rounded-xl border border-border bg-card card-glow border-animate text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">Indian Cinema</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bollywood, South Indian, Kannada, Malayalam, Tamil, Telugu — the full spectrum of Indian storytelling
                  </p>
                </button>

                <button
                  onClick={() => setRegion('foreign')}
                  className="group p-6 rounded-xl border border-border bg-card card-glow border-animate text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <Globe className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">International</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hollywood blockbusters, Korean thrillers, European gems — cinema from around the world
                  </p>
                </button>
              </div>
            </div>
          </PageTransition>
        </main>
      </div>
    );
  }

  return (
    <>
      {showFade && <div className="fixed inset-0 bg-background z-50 animate-fade-in" />}
      
      <div className="min-h-screen flex flex-col">
        {/* Progress bar */}
        <div className="fixed top-0 left-0 right-0 h-0.5 bg-muted z-50">
          <div 
            className="h-full bg-foreground transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <header className="px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
          
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{currentQuestion + 1}</span>
            <span className="mx-1">/</span>
            <span>{questions.length}</span>
          </div>

          <div className="text-xs text-muted-foreground uppercase tracking-wider">
            {mode}
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
          <PageTransition key={currentQuestion}>
            <div 
              className={`max-w-2xl w-full text-center transition-all duration-300 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="mb-12">
                <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-3 leading-tight">
                  {question.text}
                </h1>
                {question.subtext && (
                  <p className="text-muted-foreground">
                    {question.subtext}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isTransitioning}
                    className={`group w-full p-5 rounded-xl border transition-all duration-300 text-left ${
                      selectedOption === index
                        ? 'bg-primary text-primary-foreground border-primary scale-[1.02]'
                        : 'bg-card border-border hover:bg-muted/70 hover:border-foreground/20 hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="font-medium block">
                          {option.text}
                        </span>
                        {option.subtext && (
                          <span className={`text-sm mt-1 block ${
                            selectedOption === index ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}>
                            {option.subtext}
                          </span>
                        )}
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                          selectedOption === index 
                            ? 'translate-x-1' 
                            : 'text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'
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
