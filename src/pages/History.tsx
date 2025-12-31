import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Film, 
  Trash2, 
  ArrowRight,
  Zap,
  Target,
  Brain,
  History as HistoryIcon,
} from 'lucide-react';
import { getHistory, clearHistory, SavedResult, QuizMode } from '@/data/movies';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/ui/PageTransition';

const modeIcons: Record<QuizMode, typeof Zap> = {
  quick: Zap,
  standard: Target,
  deep: Brain,
};

const modeLabels: Record<QuizMode, string> = {
  quick: 'Quick',
  standard: 'Standard',
  deep: 'Deep',
};

export default function History() {
  const [results, setResults] = useState<SavedResult[]>([]);

  useEffect(() => {
    setResults(getHistory());
  }, []);

  const handleClear = () => {
    if (confirm('Clear all history? This cannot be undone.')) {
      clearHistory();
      setResults([]);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <PageTransition>
        <main className="flex-1 pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  Your History
                </h1>
                <p className="text-muted-foreground">
                  {results.length > 0 
                    ? `${results.length} recommendation${results.length > 1 ? 's' : ''} saved`
                    : 'No recommendations yet'}
                </p>
              </div>
              
              {results.length > 0 && (
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </button>
              )}
            </div>

            {/* Results list */}
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((result, index) => {
                  const ModeIcon = modeIcons[result.mode];
                  
                  return (
                    <Link
                      key={result.id}
                      to={`/result/${result.id}`}
                      className="group block glass glass-hover rounded-2xl p-6 animate-fade-in"
                      style={{ animationDelay: `${0.05 * index}s` }}
                    >
                      <div className="flex items-center gap-6">
                        {/* Movie icon */}
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Film className="w-7 h-7 text-primary" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-display text-lg font-semibold truncate">
                              {result.movie.displayName}
                            </h3>
                            <span className="shrink-0 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                              {result.matchPercent}% match
                            </span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground truncate mb-2">
                            {result.movie.tagline}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDate(result.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <ModeIcon className="w-3 h-3" />
                              {modeLabels[result.mode]} mode
                            </span>
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              /* Empty state */
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-6">
                  <HistoryIcon className="w-10 h-10 text-muted-foreground/50" />
                </div>
                <h2 className="font-display text-xl font-semibold mb-2">
                  No history yet
                </h2>
                <p className="text-muted-foreground mb-8">
                  Take the quiz to get your first recommendation!
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Start Quiz
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </PageTransition>
    </div>
  );
}