import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Globe, MapPin, Film, Tv, Play, Sparkles, Check } from 'lucide-react';
import { 
  QuizMode, 
  Region,
  ContentType,
  getQuestionsForModeAndContent, 
  Scores, 
  initialScores,
  recommendContent,
  saveResult,
  ContentItem,
} from '@/data';
import { PageTransition } from '@/components/ui/PageTransition';

const contentTypeOptions: { id: ContentType; name: string; description: string; icon: typeof Film }[] = [
  { id: 'movies', name: 'Movies', description: 'Feature films, blockbusters, and cinema classics', icon: Film },
  { id: 'anime', name: 'Anime', description: 'Japanese & Korean animated series and films', icon: Sparkles },
  { id: 'webseries', name: 'Web Series', description: 'Streaming originals and digital series', icon: Play },
  { id: 'animated', name: 'Animated Films', description: 'Cartoon movies like Toy Story, Shrek, and more', icon: Tv },
];

export default function Quiz() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = (searchParams.get('mode') as QuizMode) || 'standard';
  
  const [selectedContentTypes, setSelectedContentTypes] = useState<ContentType[]>([]);
  const [contentTypesConfirmed, setContentTypesConfirmed] = useState(false);
  const [region, setRegion] = useState<Region | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFade, setShowFade] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<{ text: string; subtext?: string } | null>(null);
  const [microFeedback, setMicroFeedback] = useState<string | null>(null);
  const [moodTags, setMoodTags] = useState<{ mood: string; energy: string }>({ mood: 'Neutral', energy: 'Medium' });

  // Get questions based on mode AND selected content types
  const questions = getQuestionsForModeAndContent(mode, selectedContentTypes.length > 0 ? selectedContentTypes : ['movies']);
  
  const question = questions[currentQuestion];
  const progress = region ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  // Check if only anime is selected (for special region handling)
  const isAnimeOnly = selectedContentTypes.length === 1 && selectedContentTypes[0] === 'anime';
  
  // Initialize first question variant
  useEffect(() => {
    if (questions.length > 0 && !currentVariant) {
      const firstQ = questions[0];
      const randomVariant = firstQ.variants[Math.floor(Math.random() * firstQ.variants.length)];
      setCurrentVariant(randomVariant);
    }
  }, [questions, currentVariant]);

  const handleComplete = useCallback((finalScores: Scores) => {
    if (!region) return;
    setShowFade(true);
    
    // Use the new content recommendation system
    const result = recommendContent(finalScores, region, selectedContentTypes);
    const saved = saveResult({
      movie: result.item as ContentItem,
      reasons: result.reasons,
      matchPercent: result.matchPercent,
      mode,
      region,
      contentTypes: selectedContentTypes,
      scores: finalScores,
      watchedNames: [result.item.name],
    });
    
    // Smooth transition delay before navigation
    setTimeout(() => {
      navigate(`/result/${saved.id}`);
    }, 800);
  }, [navigate, mode, region, selectedContentTypes]);

  // Micro-feedback phrases
  const feedbackPhrases = ['Got it', 'Understood', 'Noted', 'Perfect', 'Interesting'];

  // Update mood tags based on scores
  const updateMoodTags = (newScores: Scores) => {
    const topGenres = Object.entries(newScores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2);
    
    const moodMap: Record<string, string> = {
      romance: 'Emotional',
      drama: 'Thoughtful',
      comedy: 'Light',
      action: 'Energetic',
      thriller: 'Intense',
      scifi: 'Curious',
      fantasy: 'Imaginative',
      horror: 'Adventurous',
    };
    
    const energyMap: Record<string, string> = {
      action: 'High',
      thriller: 'High',
      comedy: 'Medium',
      scifi: 'Medium',
      drama: 'Low',
      romance: 'Low',
      fantasy: 'Medium',
      horror: 'High',
    };
    
    const topGenre = topGenres[0]?.[0] || 'drama';
    setMoodTags({
      mood: moodMap[topGenre] || 'Balanced',
      energy: energyMap[topGenre] || 'Medium',
    });
  };

  const handleAnswer = (optionIndex: number) => {
    if (isTransitioning) return;
    
    setSelectedOption(optionIndex);
    const option = question.options[optionIndex];
    
    // Show micro-feedback
    const randomFeedback = feedbackPhrases[Math.floor(Math.random() * feedbackPhrases.length)];
    setMicroFeedback(randomFeedback);
    
    const newScores = { ...scores };
    Object.entries(option.effects).forEach(([key, value]) => {
      if (value) {
        newScores[key as keyof Scores] += value;
      }
    });
    setScores(newScores);
    updateMoodTags(newScores);

    setIsTransitioning(true);
    
    setTimeout(() => {
      setMicroFeedback(null);
      if (!isLastQuestion) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsTransitioning(false);
        // Pick a new random variant for the next question
        const nextQ = questions[currentQuestion + 1];
        if (nextQ) {
          const randomVariant = nextQ.variants[Math.floor(Math.random() * nextQ.variants.length)];
          setCurrentVariant(randomVariant);
        }
      } else {
        handleComplete(newScores);
      }
    }, 500);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    } else if (region) {
      setRegion(null);
    } else if (contentTypesConfirmed) {
      setContentTypesConfirmed(false);
    } else {
      navigate('/');
    }
  };

  const toggleContentType = (type: ContentType) => {
    setSelectedContentTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleContinueFromContentTypes = () => {
    if (selectedContentTypes.length === 0) return;
    setContentTypesConfirmed(true);
  };

  // Determine which step to show based on state
  const showContentTypeSelection = !contentTypesConfirmed;
  const showRegionSelection = contentTypesConfirmed && !region;

  // Cinema background component to avoid repetition
  const CinemaBackground = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* Large ambient color orbs - stronger for light mode */}
      <div className="absolute top-0 left-0 w-[70%] h-[80%] bg-gradient-to-br from-glow/[0.28] via-glow/[0.12] to-transparent blur-[120px]" />
      <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-accent/[0.22] via-accent/[0.08] to-transparent blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[70%] h-[60%] bg-gradient-to-t from-glow/[0.2] via-glow/[0.08] to-transparent blur-[80px]" />
      
      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Projector light beams - more visible */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full opacity-80">
        <div className="absolute top-0 left-[18%] w-[4px] h-[90%] bg-gradient-to-b from-glow/50 via-glow/15 to-transparent rotate-[14deg] origin-top blur-[3px]" />
        <div className="absolute top-0 left-[32%] w-[3px] h-[80%] bg-gradient-to-b from-accent/35 via-accent/10 to-transparent rotate-[7deg] origin-top blur-[2px]" />
        <div className="absolute top-0 right-[18%] w-[4px] h-[90%] bg-gradient-to-b from-glow/50 via-glow/15 to-transparent -rotate-[14deg] origin-top blur-[3px]" />
        <div className="absolute top-0 right-[32%] w-[3px] h-[80%] bg-gradient-to-b from-accent/35 via-accent/10 to-transparent -rotate-[7deg] origin-top blur-[2px]" />
      </div>
      
      {/* Film strip borders - more visible */}
      <div className="absolute left-4 sm:left-8 top-20 bottom-20 w-10 sm:w-12 opacity-[0.22]">
        <div className="h-full border-x-2 border-glow/60 flex flex-col justify-between py-2 bg-gradient-to-r from-glow/[0.1] to-transparent">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-full aspect-[4/3] border-2 border-glow/50 rounded-sm bg-glow/[0.15]" />
          ))}
        </div>
      </div>
      <div className="absolute right-4 sm:right-8 top-20 bottom-20 w-10 sm:w-12 opacity-[0.22]">
        <div className="h-full border-x-2 border-glow/60 flex flex-col justify-between py-2 bg-gradient-to-l from-glow/[0.1] to-transparent">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-full aspect-[4/3] border-2 border-glow/50 rounded-sm bg-glow/[0.15]" />
          ))}
        </div>
      </div>
      
      {/* Warm spotlight from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-glow/[0.3] via-glow/[0.12] to-transparent rounded-full blur-3xl" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_50%,hsl(var(--background)/0.5)_100%)]" />
      
      {/* Mountain silhouettes with warm tint */}
      <svg className="absolute bottom-0 w-full h-[45%] text-glow/[0.2]" viewBox="0 0 1440 300" preserveAspectRatio="none">
        <path d="M0,300 L0,200 Q120,140 240,170 T480,120 T720,150 T960,100 T1200,140 T1440,120 L1440,300 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 w-full h-[45%] text-foreground/[0.12]" viewBox="0 0 1440 300" preserveAspectRatio="none">
        <path d="M0,300 L0,240 Q180,180 360,210 T720,160 T1080,200 T1440,180 L1440,300 Z" fill="currentColor" />
      </svg>
      
      {/* Horizon glow - warm accent */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[140%] h-[350px] bg-gradient-to-t from-glow/[0.25] via-glow/[0.1] to-transparent rounded-[100%] blur-3xl" />
    </div>
  );

  // Content type selection screen (first step)
  if (showContentTypeSelection) {
      return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          <CinemaBackground />

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
              <div className="max-w-2xl w-full text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
                  Step 1
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                  What do you want to watch?
                </h1>
                <p className="text-muted-foreground mb-10">
                  Select one or more content types
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {contentTypeOptions.map((type) => {
                    const isSelected = selectedContentTypes.includes(type.id);
                    return (
                      <button
                        key={type.id}
                        onClick={() => toggleContentType(type.id)}
                        className={`group p-6 rounded-xl border text-left relative overflow-hidden transition-all duration-300 ${
                          isSelected
                            ? 'bg-primary text-primary-foreground border-primary scale-[1.02] shadow-lg'
                            : 'bg-card/80 backdrop-blur-sm border-border hover:bg-muted/70 hover:border-foreground/20 hover:-translate-y-0.5 hover:shadow-md'
                        }`}
                      >
                        {!isSelected && (
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                        <div className="relative flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isSelected 
                              ? 'bg-primary-foreground/20' 
                              : 'bg-primary text-primary-foreground group-hover:scale-110 group-hover:shadow-lg'
                          }`}>
                            <type.icon className={`w-5 h-5 transition-transform duration-300 ${!isSelected ? 'group-hover:rotate-12' : ''}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-display text-xl font-semibold">{type.name}</h3>
                              {isSelected && <Check className="w-5 h-5" />}
                            </div>
                            <p className={`text-sm mt-1 leading-relaxed ${
                              isSelected ? 'text-primary-foreground/70' : 'text-muted-foreground'
                            }`}>
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleContinueFromContentTypes}
                  disabled={selectedContentTypes.length === 0}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>

                {selectedContentTypes.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-4">
                    Selected: {selectedContentTypes.map(t => contentTypeOptions.find(ct => ct.id === t)?.name).join(', ')}
                  </p>
                )}
              </div>
            </PageTransition>
          </main>
        </div>
      );
  }

  // Region selection screen (step 2) - different for anime
  if (showRegionSelection) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <CinemaBackground />

        <header className="px-4 sm:px-6 py-4 relative z-10">
          <button
            onClick={handleBack}
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
                Step 2
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                {isAnimeOnly ? "Choose your anime origin" : "What are you in the mood for?"}
              </h1>
              <p className="text-muted-foreground mb-10">
                {isAnimeOnly ? "Japanese or Korean animation?" : "Choose your cinema preference"}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {isAnimeOnly ? (
                  <>
                    {/* Japanese Anime Option */}
                    <button
                      onClick={() => setRegion('japanese')}
                      className="group p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-glow border-animate text-left relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <span className="text-xl">🇯🇵</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-2">Japanese Anime</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Studio Ghibli, Attack on Titan, Demon Slayer — the legendary anime from Japan
                        </p>
                      </div>
                    </button>

                    {/* Korean Anime Option */}
                    <button
                      onClick={() => setRegion('korean')}
                      className="group p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-glow border-animate text-left relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <span className="text-xl">🇰🇷</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-2">Korean Manhwa</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Solo Leveling, Tower of God, Lookism — Korean webtoon adaptations
                        </p>
                      </div>
                    </button>
                  </>
                ) : (
                  <>
                    {/* Indian Cinema Option */}
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

                    {/* International Option */}
                    <button
                      onClick={() => setRegion('international')}
                      className="group p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-glow border-animate text-left relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <Globe className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-2">International</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Hollywood blockbusters, European gems, streaming originals — cinema from around the world
                        </p>
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </PageTransition>
        </main>
      </div>
    );
  }

  return (
    <>
      {showFade && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-700 animate-fade-in">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">Finding your match...</p>
          </div>
        </div>
      )}
      
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <CinemaBackground />

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
              {/* Dynamic mood tags */}
              {currentQuestion > 0 && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                    Mood: <span className="text-foreground font-medium">{moodTags.mood}</span>
                  </span>
                  <span className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                    Energy: <span className="text-foreground font-medium">{moodTags.energy}</span>
                  </span>
                </div>
              )}
              
              <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
                  Question {currentQuestion + 1}
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-3 leading-tight">
                  {currentVariant?.text || question.variants[0]?.text}
                </h1>
                {(currentVariant?.subtext || question.variants[0]?.subtext) && (
                  <p className="text-muted-foreground">
                    {currentVariant?.subtext || question.variants[0]?.subtext}
                  </p>
                )}
              </div>
              
              {/* Micro-feedback */}
              {microFeedback && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                  <div className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium animate-fade-in shadow-lg">
                    {microFeedback}
                  </div>
                </div>
              )}

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
                      <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                        selectedOption === index 
                          ? 'text-primary-foreground' 
                          : 'text-muted-foreground group-hover:text-foreground group-hover:translate-x-1'
                      }`} />
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
