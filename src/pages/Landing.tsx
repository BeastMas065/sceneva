import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { ModeSelector } from '@/components/landing/ModeSelector';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { PageTransition } from '@/components/ui/PageTransition';
import { QuizMode } from '@/data/movies';

export default function Landing() {
  const navigate = useNavigate();

  const handleModeSelect = (mode: QuizMode) => {
    navigate(`/quiz?mode=${mode}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageTransition>
        <main className="flex-1 pt-16 md:pt-20">
          <HeroSection />
          <ModeSelector onSelect={handleModeSelect} />
          <FeaturesSection />
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
}