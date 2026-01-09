import { Film, Clock, Share2, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: MapPin,
    title: 'Indian & International',
    description: 'Bollywood, South Indian, Hollywood, Korean — choose your cinema preference.',
  },
  {
    icon: Film,
    title: 'Curated Library',
    description: '100+ hand-picked films across genres with zero-spoiler synopses.',
  },
  {
    icon: Clock,
    title: 'Quick & Fun',
    description: 'From 30 seconds to 4 minutes. Pick your quiz depth.',
  },
  {
    icon: Share2,
    title: 'Share Results',
    description: 'Found the perfect movie? Share with friends.',
  },
];

export function FeaturesSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offset calculation
  const parallaxOffset = Math.max(0, scrollY - window.innerHeight * 1.2);

  return (
    <section className="relative py-20 px-4 border-t border-border overflow-hidden">
      {/* Large ambient color orbs with parallax */}
      <div 
        className="absolute top-0 left-0 w-[60%] h-[90%] bg-gradient-to-br from-accent/[0.22] via-accent/[0.1] to-transparent blur-[100px]"
        style={{ transform: `translateY(${parallaxOffset * 0.12}px)` }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[70%] h-[80%] bg-gradient-to-tl from-glow/[0.28] via-glow/[0.12] to-transparent blur-[100px]"
        style={{ transform: `translateY(${parallaxOffset * -0.08}px)` }}
      />
      
      {/* Warm spotlight from bottom with parallax */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-glow/[0.22] via-glow/[0.08] to-transparent blur-3xl"
        style={{ transform: `translateX(-50%) translateY(${parallaxOffset * 0.06}px)` }}
      />

      {/* Film strip decorations on sides with parallax */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-12 opacity-[0.18]"
        style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
      >
        <div className="h-full border-r-2 border-glow/60 bg-gradient-to-r from-glow/[0.12] to-transparent" />
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute left-2 w-6 h-5 rounded-sm border-2 border-glow/50 bg-glow/[0.1]"
            style={{ top: `${3 + i * 7}%` }}
          />
        ))}
      </div>
      <div 
        className="absolute right-0 top-0 bottom-0 w-12 opacity-[0.18]"
        style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
      >
        <div className="h-full border-l-2 border-glow/60 bg-gradient-to-l from-glow/[0.12] to-transparent" />
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute right-2 w-6 h-5 rounded-sm border-2 border-glow/50 bg-glow/[0.1]"
            style={{ top: `${3 + i * 7}%` }}
          />
        ))}
      </div>

      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div 
          className="text-center mb-12"
          style={{ transform: `translateY(${parallaxOffset * -0.04}px)` }}
        >
          <h2 className="font-display text-3xl font-semibold mb-3">
            Why Sceneva?
          </h2>
          <p className="text-muted-foreground">
            Because choosing a movie shouldn't take longer than watching one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm animate-fade-in transition-all duration-300 hover:bg-foreground hover:border-foreground hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl hover:shadow-glow/10"
              style={{ 
                animationDelay: `${0.1 * index}s`,
                transform: `translateY(${parallaxOffset * -0.02}px)`,
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-background/20 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-glow/20">
                <feature.icon className="w-5 h-5 transition-all duration-300 group-hover:text-background" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-background">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-background/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}