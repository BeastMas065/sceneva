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
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all"
          >
            <Play className="w-4 h-4" />
            Start Quiz
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            to="/about"
            className="flex items-center gap-2 px-8 py-4 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
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
            { value: '60+', label: 'Movies' },
            { value: '2', label: 'Regions' },
            { value: '12', label: 'Questions' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-semibold">
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
