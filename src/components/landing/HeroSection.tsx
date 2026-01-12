import { ArrowRight, Play, Sparkles, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Cinematic Background Banner */}
      <div className="absolute inset-0 -z-10">
        {/* Large ambient color orbs - MUCH stronger for light mode */}
        <div 
          className="absolute top-0 left-0 w-[70%] h-[70%] bg-gradient-to-br from-glow/[0.3] via-glow/[0.15] to-transparent blur-[120px]"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div 
          className="absolute top-10 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-accent/[0.25] via-accent/[0.1] to-transparent blur-[100px]"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-[60%] h-[50%] bg-gradient-to-t from-glow/[0.2] to-transparent blur-[80px]"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        
        {/* Film grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Projector light beams with parallax - MUCH more visible */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full overflow-hidden opacity-70">
          <div 
            className="absolute top-0 left-[20%] w-[4px] h-[80%] bg-gradient-to-b from-glow/50 via-glow/15 to-transparent rotate-[15deg] origin-top blur-[3px]"
            style={{ transform: `rotate(15deg) translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-0 left-[35%] w-[3px] h-[70%] bg-gradient-to-b from-accent/40 via-accent/12 to-transparent rotate-[8deg] origin-top blur-[2px]"
            style={{ transform: `rotate(8deg) translateY(${scrollY * 0.08}px)` }}
          />
          <div 
            className="absolute top-0 right-[20%] w-[4px] h-[80%] bg-gradient-to-b from-glow/50 via-glow/15 to-transparent -rotate-[15deg] origin-top blur-[3px]"
            style={{ transform: `rotate(-15deg) translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-0 right-[35%] w-[3px] h-[70%] bg-gradient-to-b from-accent/40 via-accent/12 to-transparent -rotate-[8deg] origin-top blur-[2px]"
            style={{ transform: `rotate(-8deg) translateY(${scrollY * 0.08}px)` }}
          />
        </div>
        
        {/* Scenic mountain silhouettes with parallax */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%]">
          {/* Far mountains */}
          <svg 
            className="absolute bottom-0 w-full h-full text-glow/[0.2] transition-transform duration-100"
            viewBox="0 0 1440 400" 
            preserveAspectRatio="none"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <path 
              d="M0,400 L0,280 Q120,200 240,250 T480,180 T720,220 T960,160 T1200,200 T1440,180 L1440,400 Z" 
              fill="currentColor"
            />
          </svg>
          
          {/* Mid mountains */}
          <svg 
            className="absolute bottom-0 w-full h-full text-foreground/[0.1] transition-transform duration-100"
            viewBox="0 0 1440 400" 
            preserveAspectRatio="none"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <path 
              d="M0,400 L0,320 Q180,260 360,300 T720,240 T1080,280 T1440,260 L1440,400 Z" 
              fill="currentColor"
            />
          </svg>
          
          {/* Near mountains */}
          <svg 
            className="absolute bottom-0 w-full h-full text-foreground/[0.15] transition-transform duration-100"
            viewBox="0 0 1440 400" 
            preserveAspectRatio="none"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <path 
              d="M0,400 L0,350 Q200,300 400,340 T800,310 T1200,350 T1440,330 L1440,400 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        
        {/* Horizon glow - warm accent - MUCH stronger */}
        <div 
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[160%] h-[400px] bg-gradient-to-t from-glow/[0.25] via-glow/[0.1] to-transparent rounded-[100%] blur-3xl"
          style={{ transform: `translateX(-50%) translateY(${scrollY * 0.08}px)` }}
        />
        
        {/* Film strip decorative elements with parallax */}
        <div 
          className="absolute top-20 left-8 w-10 h-56 opacity-[0.18]"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="h-full border-x-2 border-glow/50 flex flex-col justify-between py-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full aspect-[4/3] border-2 border-glow/40 rounded-sm bg-glow/[0.1]" />
            ))}
          </div>
        </div>
        <div 
          className="absolute top-20 right-8 w-10 h-56 opacity-[0.18]"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="h-full border-x-2 border-glow/50 flex flex-col justify-between py-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full aspect-[4/3] border-2 border-glow/40 rounded-sm bg-glow/[0.1]" />
            ))}
          </div>
        </div>
        
        {/* Warm spotlight from top - MUCH stronger */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-glow/[0.3] via-glow/[0.1] to-transparent rounded-full blur-3xl"
          style={{ transform: `translateX(-50%) translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="text-center max-w-3xl mx-auto relative">
        {/* Main heading */}
        <h1 
          className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 animate-fade-in"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          Find your next
          <br />
          <span className="italic text-accent">perfect movie</span>
        </h1>

        {/* Value proposition - one line */}
        <p 
          className="text-base text-foreground/80 font-medium max-w-lg mx-auto mb-4 animate-fade-in"
          style={{ animationDelay: '0.1s', transform: `translateY(${scrollY * -0.09}px)` }}
        >
          Stop scrolling for 30 minutes. Get a recommendation in 2.
        </p>

        {/* Subheading */}
        <p 
          className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in leading-relaxed"
          style={{ animationDelay: '0.15s', transform: `translateY(${scrollY * -0.08}px)` }}
        >
          Answer a few mood-based questions. Our decision engine matches you to movies, anime, or web series.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.2s', transform: `translateY(${scrollY * -0.06}px)` }}
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
          style={{ animationDelay: '0.3s', transform: `translateY(${scrollY * -0.04}px)` }}
        >
          {[
            { value: '100+', label: 'Titles' },
            { value: '4', label: 'Content Types' },
            { value: '12', label: 'Questions' }
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
