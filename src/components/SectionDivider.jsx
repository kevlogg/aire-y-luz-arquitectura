import React, { useEffect, useRef, useState } from 'react';

export default function SectionDivider() {
  const [streakKey, setStreakKey] = useState(0);
  const [streakDir, setStreakDir] = useState(null); // 'down' | 'up'
  const dividerRef = useRef(null);
  const lastScrollY = useRef(0);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const currentY = window.scrollY;
        const isScrollingDown = currentY >= lastScrollY.current;
        lastScrollY.current = currentY;

        if (entry.isIntersecting && !isIntersectingRef.current) {
          isIntersectingRef.current = true;
          setStreakDir(isScrollingDown ? 'down' : 'up');
          setStreakKey((prev) => prev + 1);
        } else if (!entry.isIntersecting) {
          isIntersectingRef.current = false;
        }
      },
      {
        threshold: 0,
        rootMargin: '-25% 0px -25% 0px'
      }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-divider-container" ref={dividerRef}>
      <div className="section-divider-line" />
      {streakDir && (
        <div 
          key={streakKey}
          className={`section-divider-streak animated-${streakDir}`} 
        />
      )}
    </div>
  );
}
