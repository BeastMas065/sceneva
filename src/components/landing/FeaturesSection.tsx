import { Film, Clock, Share2, MapPin } from 'lucide-react';

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
  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
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
              className="group p-6 rounded-xl border border-border bg-card animate-fade-in transition-all duration-300 hover:bg-foreground hover:border-foreground hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-background/20 group-hover:rotate-6">
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
