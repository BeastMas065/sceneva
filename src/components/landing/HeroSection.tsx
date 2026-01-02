import { ArrowRight, Play } from 'lucide-react';
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
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        {/* Film grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Scenic mountain silhouettes - cinema landscape feel with parallax */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%]">
          {/* Far mountains - lightest, slowest parallax */}
          <svg 
            className="absolute bottom-0 w-full h-full opacity-[0.04] transition-transform duration-100"
            viewBox="0 0 1440 400" 
            preserveAspectRatio="none"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <path 
              d="M0,400 L0,280 Q120,200 240,250 T480,180 T720,220 T960,160 T1200,200 T1440,180 L1440,400 Z" 
              fill="currentColor"
            />
          </svg>
          
          {/* Mid mountains - medium parallax */}
          <svg 
            className="absolute bottom-0 w-full h-full opacity-[0.06] transition-transform duration-100"
            viewBox="0 0 1440 400" 
            preserveAspectRatio="none"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <path 
              d="M0,400 L0,320 Q180,260 360,300 T720,240 T1080,280 T1440,260 L1440,400 Z" 
              fill="currentColor"
            />
          </svg>
          
          {/* Near mountains - darkest, fastest parallax */}
          <svg 
            className="absolute bottom-0 w-full h-full opacity-[0.08] transition-transform duration-100"
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
        
        {/* Horizon glow - sunset/sunrise feel */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[150%] h-[300px] bg-gradient-to-t from-foreground/[0.02] via-foreground/[0.04] to-transparent rounded-[100%] blur-3xl" />
        
        {/* Film strip decorative elements */}
        <div className="absolute top-20 left-8 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent opacity-40" />
        <div className="absolute top-20 right-8 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent opacity-40" />
        
        {/* Subtle spotlight from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-foreground/[0.02] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative">
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
