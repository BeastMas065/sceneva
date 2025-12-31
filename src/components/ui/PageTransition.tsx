import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface FadeOverlayProps {
  isActive: boolean;
  onComplete?: () => void;
}

export function FadeOverlay({ isActive, onComplete }: FadeOverlayProps) {
  useEffect(() => {
    if (isActive && onComplete) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-background z-[100] pointer-events-none transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}