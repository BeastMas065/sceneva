import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  XCircle,
  Zap,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/ui/PageTransition';

const truthBombs = [
  { truth: 'Uses "if-else" statements', lie: 'Neural networks' },
  { truth: 'Matches keywords to genres', lie: 'Deep learning' },
  { truth: 'Random selection from top picks', lie: 'Probabilistic modeling' },
  { truth: 'Hand-coded preference logic', lie: 'Machine learning algorithms' },
];

const steps = [
  {
    number: '01',
    title: 'Answer Questions',
    description: 'Tell us about your mood, preferences, and what kind of experience you\'re looking for.',
    icon: Brain,
  },
  {
    number: '02',
    title: '"AI" Processing',
    description: 'Our sophisticated algorithm (a bunch of if-else statements) crunches the numbers.',
    icon: Code2,
  },
  {
    number: '03',
    title: 'Perfect Match',
    description: 'We pick a movie from our curated database that matches your profile. Magic!',
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Cinema Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Large ambient color orbs */}
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-glow/[0.15] via-glow/[0.06] to-transparent blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-gradient-to-tr from-accent/[0.12] via-accent/[0.04] to-transparent blur-[80px]" />
        <div className="absolute top-1/2 left-1/3 w-[40%] h-[40%] bg-gradient-to-br from-glow/[0.08] to-transparent blur-[60px]" />
        
        {/* Projector light beams */}
        <div className="absolute top-0 left-1/4 w-[3px] h-[70%] bg-gradient-to-b from-glow/25 via-glow/8 to-transparent blur-[2px] rotate-6" />
        <div className="absolute top-0 right-1/4 w-[3px] h-[70%] bg-gradient-to-b from-glow/25 via-glow/8 to-transparent blur-[2px] -rotate-6" />
        
        {/* Film strip borders */}
        <div className="absolute left-0 top-0 bottom-0 w-8 opacity-[0.12]">
          <div className="h-full w-full border-r-2 border-glow/40 bg-gradient-to-r from-glow/[0.05] to-transparent flex flex-col justify-around py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-3 mx-auto rounded-sm bg-glow/25 border border-glow/30" />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 opacity-[0.12]">
          <div className="h-full w-full border-l-2 border-glow/40 bg-gradient-to-l from-glow/[0.05] to-transparent flex flex-col justify-around py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-3 mx-auto rounded-sm bg-glow/25 border border-glow/30" />
            ))}
          </div>
        </div>
        
        {/* Warm spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-glow/[0.15] via-glow/[0.05] to-transparent blur-3xl" />
        
        {/* Film grain */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_50%,hsl(var(--background)/0.4)_100%)]" />
      </div>
      
      <Header />
      
      <PageTransition>
        <main className="flex-1 pt-24 pb-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">The truth about our "AI"</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How Sceneva
                <br />
                <span className="text-muted-foreground">Actually Works</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Spoiler alert: There's no AI. Just some clever programming, 
                a love for movies, and a healthy dose of randomness.
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="group glass rounded-2xl p-6 animate-fade-in card-glow border-animate"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-display font-bold text-primary/30 transition-colors duration-300 group-hover:text-primary/50">
                      {step.number}
                    </span>
                    <step.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Truth vs Marketing */}
            <div className="glass rounded-3xl p-8 md:p-12 mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
                Marketing vs Reality
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    What we actually do
                  </h3>
                  <ul className="space-y-3">
                    {truthBombs.map((item, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {item.truth}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    <XCircle className="w-4 h-4 text-red-500" />
                    What we don't do
                  </h3>
                  <ul className="space-y-3">
                    {truthBombs.map((item, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm line-through opacity-60"
                      >
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        {item.lie}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* The Algorithm */}
            <div className="text-center mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                The "Algorithm" Explained
              </h2>
              
              <div className="glass rounded-2xl p-6 md:p-8 text-left font-mono text-sm">
                <pre className="overflow-x-auto text-muted-foreground">
{`function recommendMovie(answers) {
  // Step 1: Add up preference scores
  let scores = { action: 0, romance: 0, comedy: 0 };
  
  answers.forEach(answer => {
    scores[answer.genre] += answer.weight;
  });
  
  // Step 2: Find matching movies
  let matches = movies.filter(m => 
    m.genre === getTopGenre(scores)
  );
  
  // Step 3: Pick randomly (the "AI" part)
  return matches[Math.random() * matches.length];
  
  // That's it. That's the algorithm.
}`}
                </pre>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Still works though! Give it a try.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 glow"
              >
                <Zap className="w-5 h-5" />
                Try the Quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </PageTransition>
    </div>
  );
}