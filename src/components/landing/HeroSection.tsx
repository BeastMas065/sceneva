import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        {/* Main heading */}
        <h1 
          className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 animate-fade-in"
        >
          Find your next
          <br />
          <span className="italic">perfect movie</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in leading-relaxed"
          style={{ animationDelay: '0.1s' }}
        >
          Answer a few questions about your mood. Our algorithm will recommend the ideal film — Indian or international.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <Link
            to="/quiz"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 16px 32px -12px hsl(var(--foreground) / 0.25)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Start Quiz
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <Link
            to="/about"
            className="group flex items-center gap-2 px-8 py-4 border border-border rounded-lg font-medium transition-all duration-300 hover:bg-muted/70 hover:border-foreground/20 hover:-translate-y-1"
          >
            How it works
          </Link>
        </div>

        {/* Stats */}
        <div 
          className="mt-20 flex items-center justify-center gap-12 md:gap-20 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {[
            { value: '100+', label: 'Movies' },
            { value: '2', label: 'Regions' },
            { value: '12', label: 'Questions' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <div className="font-display text-2xl md:text-3xl font-semibold transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
