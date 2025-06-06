import { useEffect, useState } from 'react';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1201px)');

    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    setIsDesktop(mediaQuery.matches); // initial check

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isDesktop;
}

export default useIsDesktop;