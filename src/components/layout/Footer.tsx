vaimport { Film, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Film className="w-4 h-4" />
            <span>Sceneva</span>
            <span className="text-muted-foreground/50">·</span>
            <span className="text-muted-foreground/70">Not actual AI</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-3.5 h-3.5 mx-1" /> and if-else statements
          </div>
        </div>
      </div>
    </footer>
  );
}
