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
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-glow/[0.04] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-t from-glow/[0.02] to-transparent rounded-[100%] blur-2xl" />
          
          {/* Mountain silhouettes */}
          <svg className="absolute bottom-0 w-full h-[40%] opacity-[0.03]" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,300 L0,220 Q120,160 240,190 T480,140 T720,170 T960,120 T1200,160 T1440,140 L1440,300 Z" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-0 w-full h-[40%] opacity-[0.05]" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,300 L0,250 Q180,200 360,230 T720,180 T1080,220 T1440,200 L1440,300 Z" fill="currentColor" />
          </svg>
        </div>

        <header className="px-4 sm:px-6 py-4 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 pb-20 relative z-10">
          <PageTransition>
            <div className="max-w-xl w-full text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
                Step 1
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                What are you in the mood for?
              </h1>
              <p className="text-muted-foreground mb-10">
                Choose your cinema preference
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setRegion('indian')}
                  className="group p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-glow border-animate text-left relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">Indian Cinema</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bollywood, South Indian, Kannada, Malayalam, Tamil, Telugu — the full spectrum of Indian storytelling
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setRegion('foreign')}
                  className="group p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-glow border-animate text-left relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <Globe className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">International</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hollywood blockbusters, Korean thrillers, European gems — cinema from around the world
                    </p>
                  </div>
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
      
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-gradient-to-b from-glow/[0.03] to-transparent rounded-full blur-3xl" />
          
          {/* Mountain silhouettes */}
          <svg className="absolute bottom-0 w-full h-[35%] opacity-[0.03]" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,300 L0,220 Q120,160 240,190 T480,140 T720,170 T960,120 T1200,160 T1440,140 L1440,300 Z" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-0 w-full h-[35%] opacity-[0.05]" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,300 L0,250 Q180,200 360,230 T720,180 T1080,220 T1440,200 L1440,300 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Progress bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted/50 z-50">
          <div 
            className="h-full bg-gradient-to-r from-accent to-glow transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <header className="px-4 sm:px-6 py-4 flex items-center justify-between relative z-10">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
          
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{currentQuestion + 1}</span>
            <span className="mx-1 text-border">/</span>
            <span>{questions.length}</span>
          </div>

          <div className="text-xs text-accent uppercase tracking-wider font-medium">
            {mode}
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 relative z-10">
          <PageTransition key={currentQuestion}>
            <div 
              className={`max-w-2xl w-full text-center transition-all duration-300 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
                  Question {currentQuestion + 1}
                </p>
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
                    className={`group w-full p-5 rounded-xl border transition-all duration-300 text-left relative overflow-hidden ${
                      selectedOption === index
                        ? 'bg-primary text-primary-foreground border-primary scale-[1.02] shadow-lg'
                        : 'bg-card/80 backdrop-blur-sm border-border hover:bg-muted/70 hover:border-foreground/20 hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                  >
                    {selectedOption !== index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    <div className="flex items-center justify-between gap-4 relative">
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
