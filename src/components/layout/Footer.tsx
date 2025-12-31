import { Film, Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Film className="w-4 h-4" />
            <span className="text-sm">CineMatch</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-sm text-muted-foreground/70">Not actually AI</span>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-3.5 h-3.5 text-destructive mx-1" /> and questionable algorithms
          </div>
        </div>
      </div>
    </footer>
  );
}