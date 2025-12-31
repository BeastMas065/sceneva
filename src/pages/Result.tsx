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
  Home,
  Copy,
  Check,
  User,
} from 'lucide-react';
import { getHistory, SavedResult, Movie } from '@/data/movies';
import { PageTransition } from '@/components/ui/PageTransition';
import { Header } from '@/components/layout/Header';

const genreIcons: Record<string, typeof Zap> = {
  action: Zap,
  romance: Heart,
  comedy: Laugh,
  thriller: Skull,
  drama: Drama,
  scifi: Rocket,
};

export default function Result() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [result, setResult] = useState<SavedResult | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const history = getHistory();
    const found = history.find(r => r.id === id);
    if (found) {
      setResult(found);
      // Dramatic reveal delay
      setTimeout(() => setIsRevealed(true), 300);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleShare = async () => {
    if (!result) return;
    
    const text = `🎬 CineMatch recommended "${result.movie.displayName}" for me with a ${result.matchPercent}% match!\n\n"${result.movie.tagline}"\n\nFind your perfect movie: ${window.location.origin}`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
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
        <div className="animate-pulse-soft text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const { movie, reasons, matchPercent } = result;
  const GenreIcon = genreIcons[movie.genre] || Film;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-12 px-4">
        <PageTransition>
          <div className="max-w-3xl mx-auto">
            {/* Pre-reveal text */}
            <div 
              className={`text-center mb-8 transition-all duration-700 ${
                isRevealed ? 'opacity-100' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-muted-foreground text-lg">
                Based on your answers, we found your perfect match...
              </p>
            </div>

            {/* Movie Card */}
            <div 
              className={`relative transition-all duration-1000 ${
                isRevealed 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 translate-y-8'
              }`}
            >
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              
              <div className="relative glass rounded-3xl p-8 md:p-12 glow-intense overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                
                {/* Match percentage */}
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <span className="text-sm text-primary font-medium">
                      {matchPercent}% Match
                    </span>
                  </div>
                </div>

                {/* Movie icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center border border-border">
                    <GenreIcon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Movie title */}
                <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-4 text-gradient">
                  {movie.displayName}
                </h1>

                {/* Tagline */}
                {movie.tagline && (
                  <p className="text-lg md:text-xl text-muted-foreground text-center italic mb-8">
                    "{movie.tagline}"
                  </p>
                )}

                {/* Tags */}
                <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
                  {movie.year && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {movie.year}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm capitalize">
                    <GenreIcon className="w-3.5 h-3.5 text-primary" />
                    {movie.genre}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm capitalize">
                    <Star className="w-3.5 h-3.5 text-primary" />
                    {movie.pace}-paced
                  </span>
                  {movie.director && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm">
                      <User className="w-3.5 h-3.5 text-primary" />
                      {movie.director}
                    </span>
                  )}
                </div>

                {/* Why this movie */}
                <div className="bg-background/40 rounded-2xl p-6">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">
                    Why this movie?
                  </h3>
                  <ul className="space-y-3">
                    {reasons.map((reason, index) => (
                      <li 
                        key={index}
                        className={`flex items-start gap-3 transition-all duration-500 ${
                          isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${800 + index * 150}ms` }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </div>

            {/* Actions */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700 ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <Link
                to="/"
                className="flex items-center gap-2 px-6 py-3 glass glass-hover rounded-xl font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                Take Quiz Again
              </Link>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    Share Result
                  </>
                )}
              </button>
              
              <Link
                to="/"
                className="flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </div>

            {/* Disclaimer */}
            <p 
              className={`text-center text-xs text-muted-foreground/50 mt-10 transition-all duration-700 ${
                isRevealed ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1.2s' }}
            >
              Powered by CineMatch AI™ (not actual AI)
            </p>
          </div>
        </PageTransition>
      </main>
    </div>
  );
}