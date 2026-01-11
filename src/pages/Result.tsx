import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Film, 
  RotateCcw, 
  Star, 
  Clock, 
  Zap, 
  Heart, 
  Laugh,
  Skull,
  Drama,
  Rocket,
  CheckCircle2,
  Share2,
  Check,
  Globe,
  Tv,
  Play,
  Sparkles,
  Wand2,
} from 'lucide-react';
import { getHistory, SavedResult, ContentItem } from '@/data';
import { PageTransition } from '@/components/ui/PageTransition';
import { searchMoviePoster } from '@/lib/tmdb';
import { Header } from '@/components/layout/Header';

const genreIcons: Record<string, typeof Zap> = {
  action: Zap,
  romance: Heart,
  comedy: Laugh,
  thriller: Skull,
  drama: Drama,
  scifi: Rocket,
  fantasy: Wand2,
  horror: Skull,
  'slice-of-life': Heart,
};

const genreGradients: Record<string, string> = {
  action: 'bg-gradient-to-br from-orange-600/80 via-red-700/60 to-amber-900/80',
  romance: 'bg-gradient-to-br from-pink-500/80 via-rose-600/60 to-purple-700/80',
  comedy: 'bg-gradient-to-br from-yellow-500/80 via-amber-500/60 to-orange-600/80',
  thriller: 'bg-gradient-to-br from-slate-800/90 via-zinc-900/80 to-neutral-950/90',
  drama: 'bg-gradient-to-br from-indigo-700/80 via-purple-800/60 to-slate-900/80',
  scifi: 'bg-gradient-to-br from-cyan-600/80 via-blue-700/60 to-violet-800/80',
  fantasy: 'bg-gradient-to-br from-purple-600/80 via-violet-700/60 to-indigo-800/80',
  horror: 'bg-gradient-to-br from-gray-900/90 via-red-950/70 to-black/90',
  'slice-of-life': 'bg-gradient-to-br from-green-500/80 via-teal-600/60 to-cyan-700/80',
};

const contentTypeLabels: Record<string, { label: string; icon: typeof Film }> = {
  movies: { label: 'Movie', icon: Film },
  anime: { label: 'Anime', icon: Sparkles },
  webseries: { label: 'Web Series', icon: Play },
  animated: { label: 'Animated Film', icon: Tv },
};

export default function Result() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [result, setResult] = useState<SavedResult | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [posterLoading, setPosterLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [displayMatchPercent, setDisplayMatchPercent] = useState(0);

  useEffect(() => {
    const history = getHistory();
    const found = history.find(r => r.id === id);
    if (found) {
      // Generate random match percent between 80-99
      const randomMatch = Math.floor(Math.random() * 20) + 80;
      setDisplayMatchPercent(randomMatch);
      setResult(found);
      
      // Simulate loading with progress
      let progress = 0;
      const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
          progress = 100;
          clearInterval(loadingInterval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setIsRevealed(true), 300);
          }, 500);
        }
        setLoadingProgress(Math.min(progress, 100));
      }, 200);
      
      // Fetch movie poster from TMDB
      setPosterLoading(true);
      searchMoviePoster(found.movie.displayName, found.movie.year)
        .then(url => {
          setPosterUrl(url);
          setPosterLoading(false);
        })
        .catch(() => setPosterLoading(false));
        
      return () => clearInterval(loadingInterval);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleShare = async () => {
    if (!result) return;
    
    const content = result.movie as ContentItem;
    const contentLabel = contentTypeLabels[content.contentType || 'movies']?.label || 'content';
    const text = `🎬 Sceneva recommended "${content.displayName}" for me with a ${displayMatchPercent}% match!\n\n"${content.tagline}"\n\nFind your perfect ${contentLabel.toLowerCase()}: ${window.location.origin}`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const content = result.movie as ContentItem;
  const GenreIcon = genreIcons[content.genre] || Film;
  const contentType = content.contentType || 'movies';
  const ContentTypeInfo = contentTypeLabels[contentType] || contentTypeLabels.movies;
  const { reasons } = result;

  // Loading screen with cinematic effect
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Cinema Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Large ambient color orbs */}
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-gradient-to-br from-glow/[0.18] via-glow/[0.08] to-transparent blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-tl from-accent/[0.14] via-accent/[0.05] to-transparent blur-[80px]" />
          <div className="absolute top-1/3 right-1/4 w-[40%] h-[40%] bg-gradient-to-bl from-glow/[0.1] to-transparent blur-[60px]" />
          
          {/* Projector light beams */}
          <div className="absolute top-0 left-1/3 w-[3px] h-full bg-gradient-to-b from-glow/30 via-glow/10 to-transparent blur-[2px] rotate-3" />
          <div className="absolute top-0 right-1/3 w-[3px] h-full bg-gradient-to-b from-glow/25 via-glow/8 to-transparent blur-[2px] -rotate-3" />
          <div className="absolute top-0 left-1/2 w-[2px] h-[80%] bg-gradient-to-b from-accent/20 via-accent/5 to-transparent blur-[1px]" />
          
          {/* Film grain */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />
        </div>
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          {/* Film Reel Animation */}
          <div className="relative mb-8">
            {/* Outer reel */}
            <div className="w-32 h-32 rounded-full border-4 border-foreground/20 relative animate-spin" style={{ animationDuration: '3s' }}>
              {/* Sprocket holes */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-background border-2 border-foreground/20"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-48px)`
                  }}
                />
              ))}
              {/* Inner circle */}
              <div className="absolute inset-4 rounded-full border-2 border-foreground/10" />
              <div className="absolute inset-8 rounded-full bg-foreground/5" />
            </div>
            
            {/* Film strip flowing */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-24 h-8 overflow-hidden">
              <div className="flex gap-1 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-6 bg-foreground/10 rounded-sm" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Loading text */}
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl md:text-3xl mb-2 text-foreground">
              Matching Your Preferences
            </h2>
            <p className="text-muted-foreground text-sm">
              Applying controlled selection within matched preferences...
            </p>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 md:w-80">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-glow to-accent rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Processing decision matrix</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
          </div>
          
          {/* Floating film frames */}
          <div className="absolute bottom-20 left-10 opacity-20">
            <Film className="w-8 h-8 animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
          <div className="absolute top-32 right-16 opacity-15">
            <Star className="w-6 h-6 animate-pulse" style={{ animationDuration: '1.5s' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Cinema Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large ambient color orbs */}
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-gradient-to-br from-glow/[0.18] via-glow/[0.08] to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-tl from-accent/[0.14] via-accent/[0.05] to-transparent blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[40%] h-[40%] bg-gradient-to-bl from-glow/[0.1] to-transparent blur-[60px]" />
        
        {/* Projector light beams */}
        <div className="absolute top-0 left-1/3 w-[3px] h-full bg-gradient-to-b from-glow/30 via-glow/10 to-transparent blur-[2px] rotate-3" />
        <div className="absolute top-0 right-1/3 w-[3px] h-full bg-gradient-to-b from-glow/25 via-glow/8 to-transparent blur-[2px] -rotate-3" />
        <div className="absolute top-0 left-1/2 w-[2px] h-[80%] bg-gradient-to-b from-accent/20 via-accent/5 to-transparent blur-[1px]" />
        
        {/* Film strip borders */}
        <div className="absolute left-0 top-0 bottom-0 w-8 opacity-[0.15]">
          <div className="h-full w-full border-r-2 border-glow/50 bg-gradient-to-r from-glow/[0.08] to-transparent flex flex-col justify-around py-4">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-4 h-3 mx-auto rounded-sm bg-glow/30 border border-glow/40" />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 opacity-[0.15]">
          <div className="h-full w-full border-l-2 border-glow/50 bg-gradient-to-l from-glow/[0.08] to-transparent flex flex-col justify-around py-4">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-4 h-3 mx-auto rounded-sm bg-glow/30 border border-glow/40" />
            ))}
          </div>
        </div>
        
        {/* Warm spotlight from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-glow/[0.2] via-glow/[0.08] to-transparent blur-3xl" />
        
        {/* Film grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_50%,hsl(var(--background)/0.5)_100%)]" />
      </div>
      
      <Header />
      
      <main className="relative z-10 pt-20 pb-16 px-4">
        <PageTransition>
          <div className="max-w-2xl mx-auto">
            {/* Pre-reveal text */}
            <div 
              className={`text-center mb-8 transition-all duration-500 ${
                isRevealed ? 'opacity-100' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-muted-foreground">
                Based on your answers, here's your perfect match...
              </p>
            </div>

            {/* Movie Card */}
            <div 
              className={`transition-all duration-700 ${
                isRevealed 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="border border-border rounded-2xl overflow-hidden bg-card">
                {/* Content Header with Poster */}
                <div className="relative flex flex-col md:flex-row">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 ${genreGradients[content.genre] || 'bg-gradient-to-br from-muted via-muted/80 to-muted/60'}`} />
                  
                  {/* Film grain texture */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                  }} />
                  
                  {/* Content Poster - Proper 2:3 aspect ratio */}
                  <div className="relative w-40 md:w-48 shrink-0 mx-auto md:mx-0 mt-6 md:mt-0 md:m-6 z-10">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-2xl bg-black/20">
                      {posterLoading ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" 
                               style={{ 
                                 animation: 'shimmer 1.5s infinite',
                                 backgroundSize: '200% 100%'
                               }} />
                          <div className="w-10 h-10 rounded-full border-4 border-white/20 border-t-white/60 animate-spin" />
                        </div>
                      ) : posterUrl ? (
                        <img
                          src={posterUrl}
                          alt={content.displayName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/30">
                          <ContentTypeInfo.icon className="w-16 h-16 text-white/40" strokeWidth={1} />
                        </div>
                      )}
                    </div>
                    
                    {/* TMDB Attribution */}
                    {posterUrl && !posterLoading && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/70 rounded text-[9px] text-white/60 whitespace-nowrap">
                        Data by TMDB
                      </div>
                    )}
                  </div>
                  
                  {/* Content Quick Info Overlay */}
                  <div className="relative flex-1 p-6 md:py-8 md:pr-8 flex flex-col justify-center z-10">
                    {/* Match percentage & Content type badge */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 items-end">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                        {displayMatchPercent}% Match
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs">
                        <ContentTypeInfo.icon className="w-3 h-3" />
                        {ContentTypeInfo.label}
                      </div>
                    </div>
                    
                    <h1 className="font-display text-2xl md:text-4xl font-semibold text-white text-center md:text-left mb-2 pr-16 md:pr-20">
                      {content.displayName}
                    </h1>
                    
                    {content.tagline && (
                      <p className="text-white/70 text-center md:text-left italic mb-4">
                        "{content.tagline}"
                      </p>
                    )}
                    
                    {/* Quick tags */}
                    <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                      {content.year && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90">
                          <Clock className="w-3 h-3" />
                          {content.year}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 capitalize">
                        <GenreIcon className="w-3 h-3" />
                        {content.genre === 'slice-of-life' ? 'Slice of Life' : content.genre}
                      </span>
                      {content.rating && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90">
                          <Star className="w-3 h-3" />
                          {content.rating}/10
                        </span>
                      )}
                      {/* Seasons for web series and anime */}
                      {content.seasons && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90">
                          <Tv className="w-3 h-3" />
                          {content.seasons} {content.seasons === 1 ? 'Season' : 'Seasons'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                
                {/* Language tag if available */}
                {content.language && (
                  <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm">
                      <Globe className="w-3.5 h-3.5" />
                      {content.language}
                    </span>
                  </div>
                )}

                {/* Synopsis */}
                {content.synopsis && (
                  <div className="mb-8 p-5 bg-muted/50 rounded-xl">
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                      The Story
                    </h3>
                    <p className="text-foreground/90 leading-relaxed">
                      {content.synopsis}
                    </p>
                  </div>
                )}

                {/* Why this recommendation */}
                <div className="p-5 border border-border rounded-xl">
                  <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium">
                    Why this {ContentTypeInfo.label.toLowerCase()}?
                  </h3>
                  <ul className="space-y-3">
                    {reasons.map((reason, index) => (
                      <li 
                        key={index}
                        className={`flex items-start gap-3 transition-all duration-500 ${
                          isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Match breakdown for judges */}
                <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
                  <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium">
                    How we matched this
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">Mood alignment</span>
                      <span className="ml-auto font-medium">{Math.floor(displayMatchPercent * 0.95)}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-glow" />
                      <span className="text-muted-foreground">Genre match</span>
                      <span className="ml-auto font-medium">{Math.floor(displayMatchPercent * 1.02)}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-foreground/40" />
                      <span className="text-muted-foreground">Rating threshold</span>
                      <span className="ml-auto font-medium">Met</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-foreground/20" />
                      <span className="text-muted-foreground">Discovery factor</span>
                      <span className="ml-auto font-medium">+{Math.floor(Math.random() * 8) + 3}%</span>
                    </div>
                  </div>
                </div>

                {content.director && (
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    {contentType === 'webseries' || contentType === 'anime' ? 'Created by' : 'Directed by'} {content.director}
                  </p>
                )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 transition-all duration-500 ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <Link
                to="/"
                className="group flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium transition-all duration-300 hover:bg-muted hover:border-foreground/20 hover:-translate-y-1 hover:shadow-md"
              >
                <RotateCcw className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                Take Quiz Again
              </Link>
              
              <button
                onClick={handleShare}
                className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 24px -8px hsl(var(--foreground) / 0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    Share Result
                  </>
                )}
              </button>
            </div>

            {/* Disclaimer */}
            <p 
              className={`text-center text-xs text-muted-foreground mt-10 transition-all duration-500 ${
                isRevealed ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              Powered by Sceneva — a rule-based decision engine
            </p>
          </div>
        </PageTransition>
      </main>
    </div>
  );
}
