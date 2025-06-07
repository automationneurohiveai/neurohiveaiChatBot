import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Отключаем наблюдение после первого появления для лучшей производительности
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

// Компонент-обертка для анимаций
export const ScrollAnimationWrapper = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  animationType = 'fadeUp' 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const getAnimationClass = () => {
    const baseClass = isVisible ? 'animate-visible' : 'animate-hidden';
    return `${baseClass} ${animationType}`;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}; 