import { Sparkles, Film, Clock, Share2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: '"AI" Analysis',
    description: 'Our highly sophisticated algorithm (if-else statements) analyzes your preferences with stunning accuracy.',
  },
  {
    icon: Film,
    title: 'Curated Library',
    description: '50+ hand-picked films across genres, from blockbusters to hidden gems.',
  },
  {
    icon: Clock,
    title: 'Quick & Fun',
    description: 'From 30 seconds to 4 minutes. Choose your quiz depth based on your time.',
  },
  {
    icon: Share2,
    title: 'Share Results',
    description: 'Found the perfect movie? Share your recommendation with friends.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why CineMatch?
          </h2>
          <p className="text-muted-foreground">
            Because choosing a movie shouldn't take longer than watching one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl glass glass-hover animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}