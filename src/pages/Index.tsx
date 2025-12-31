import { useState } from 'react';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { QuizScreen } from '@/components/QuizScreen';
import { ProcessingScreen } from '@/components/ProcessingScreen';
import { ResultScreen } from '@/components/ResultScreen';
import { Scores, recommendMovie, Movie } from '@/data/movies';

type AppState = 'welcome' | 'quiz' | 'processing' | 'result';

const Index = () => {
  const [state, setState] = useState<AppState>('welcome');
  const [userName, setUserName] = useState('');
  const [scores, setScores] = useState<Scores | null>(null);
  const [recommendation, setRecommendation] = useState<{ movie: Movie; reasons: string[] } | null>(null);

  const handleStart = (name: string) => {
    setUserName(name);
    setState('quiz');
  };

  const handleQuizComplete = (finalScores: Scores) => {
    setScores(finalScores);
    setState('processing');
  };

  const handleProcessingComplete = () => {
    if (scores) {
      const result = recommendMovie(scores);
      setRecommendation(result);
      setState('result');
    }
  };

  const handleRetake = () => {
    setScores(null);
    setRecommendation(null);
    setState('quiz');
  };

  return (
    <>
      {state === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {state === 'quiz' && <QuizScreen userName={userName} onComplete={handleQuizComplete} />}
      {state === 'processing' && <ProcessingScreen onComplete={handleProcessingComplete} />}
      {state === 'result' && recommendation && (
        <ResultScreen 
          movie={recommendation.movie} 
          reasons={recommendation.reasons}
          userName={userName}
          onRetake={handleRetake}
        />
      )}
    </>
  );
};

export default Index;
