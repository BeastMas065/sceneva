import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 ambient-glow" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Powered by "Advanced AI"</span>
        </div>

        {/* Main heading */}
        <h1 
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Find your next
          <br />
          <span className="text-gradient">perfect movie</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          Answer a few questions about your mood and preferences. 
          Our sophisticated algorithm will analyze your psyche and recommend the ideal film.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <Link
            to="/quiz"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 glow hover:scale-105"
          >
            <Play className="w-5 h-5" />
            Start Quiz
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            to="/about"
            className="flex items-center gap-2 px-8 py-4 glass glass-hover rounded-xl font-medium"
          >
            Learn how it works
          </Link>
        </div>

        {/* Stats */}
        <div 
          className="mt-16 flex items-center justify-center gap-8 md:gap-16 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            { value: '50+', label: 'Movies' },
            { value: '12', label: 'Questions' },
            { value: '98%', label: '"Accuracy"' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
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