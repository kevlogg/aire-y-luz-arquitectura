import React, { useEffect, useRef, useState } from 'react';

export default function SectionDivider() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const dividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="section-divider-container" ref={dividerRef}>
      <div className="section-divider-line" />
      <div className={`section-divider-streak ${hasAnimated ? 'animated' : ''}`} />
    </div>
  );
}
