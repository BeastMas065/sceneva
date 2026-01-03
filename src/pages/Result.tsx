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
  Copy,
  Check,
  User,
  Globe,
} from 'lucide-react';
import { getHistory, SavedResult, Movie } from '@/data/movies';
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
};

const genreGradients: Record<string, string> = {
  action: 'bg-gradient-to-br from-orange-600/80 via-red-700/60 to-amber-900/80',
  romance: 'bg-gradient-to-br from-pink-500/80 via-rose-600/60 to-purple-700/80',
  comedy: 'bg-gradient-to-br from-yellow-500/80 via-amber-500/60 to-orange-600/80',
  thriller: 'bg-gradient-to-br from-slate-800/90 via-zinc-900/80 to-neutral-950/90',
  drama: 'bg-gradient-to-br from-indigo-700/80 via-purple-800/60 to-slate-900/80',
  scifi: 'bg-gradient-to-br from-cyan-600/80 via-blue-700/60 to-violet-800/80',
};

export default function Result() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [result, setResult] = useState<SavedResult | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [posterLoading, setPosterLoading] = useState(true);

  useEffect(() => {
    const history = getHistory();
    const found = history.find(r => r.id === id);
    if (found) {
      setResult(found);
      setTimeout(() => setIsRevealed(true), 300);
      
      // Fetch movie poster from TMDB
      setPosterLoading(true);
      searchMoviePoster(found.movie.displayName, found.movie.year)
        .then(url => {
          setPosterUrl(url);
          setPosterLoading(false);
        })
        .catch(() => setPosterLoading(false));
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleShare = async () => {
    if (!result) return;
    
    const text = `🎬 Sceneva recommended "${result.movie.displayName}" for me with a ${result.matchPercent}% match!\n\n"${result.movie.tagline}"\n\nFind your perfect movie: ${window.location.origin}`;
    
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const { movie, reasons, matchPercent } = result;
  const GenreIcon = genreIcons[movie.genre] || Film;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16 px-4">
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
                {/* Movie Header with Poster */}
                <div className="relative flex flex-col md:flex-row">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 ${genreGradients[movie.genre] || 'bg-gradient-to-br from-muted via-muted/80 to-muted/60'}`} />
                  
                  {/* Film grain texture */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                  }} />
                  
                  {/* Movie Poster - Proper 2:3 aspect ratio */}
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
                          alt={movie.displayName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/30">
                          <GenreIcon className="w-16 h-16 text-white/40" strokeWidth={1} />
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
                  
                  {/* Movie Quick Info Overlay */}
                  <div className="relative flex-1 p-6 md:py-8 md:pr-8 flex flex-col justify-center z-10">
                    {/* Match percentage */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                        {matchPercent}% Match
                      </div>
                    </div>
                    
                    <h1 className="font-display text-2xl md:text-4xl font-semibold text-white text-center md:text-left mb-2 pr-16 md:pr-20">
                      {movie.displayName}
                    </h1>
                    
                    {movie.tagline && (
                      <p className="text-white/70 text-center md:text-left italic mb-4">
                        "{movie.tagline}"
                      </p>
                    )}
                    
                    {/* Quick tags */}
                    <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                      {movie.year && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90">
                          <Clock className="w-3 h-3" />
                          {movie.year}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 capitalize">
                        <GenreIcon className="w-3 h-3" />
                        {movie.genre}
                      </span>
                      {movie.rating && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90">
                          <Star className="w-3 h-3" />
                          {movie.rating}/10
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                
                {/* Language tag if available */}
                {movie.language && (
                  <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm">
                      <Globe className="w-3.5 h-3.5" />
                      {movie.language}
                    </span>
                  </div>
                )}

                {/* Synopsis */}
                {movie.synopsis && (
                  <div className="mb-8 p-5 bg-muted/50 rounded-xl">
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                      The Story
                    </h3>
                    <p className="text-foreground/90 leading-relaxed">
                      {movie.synopsis}
                    </p>
                  </div>
                )}

                {/* Why this movie */}
                <div className="p-5 border border-border rounded-xl">
                  <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium">
                    Why this movie?
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

                {movie.director && (
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Directed by {movie.director}
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
              Powered by Sceneva AI™ (not actual AI)
            </p>
          </div>
        </PageTransition>
      </main>
    </div>
  );
}
