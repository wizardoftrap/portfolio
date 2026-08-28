// src/hooks/useReveal.js
import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element once it scrolls into view.
 * Replaces the per-section scroll listeners: one observer, disconnected
 * after the first intersection so nothing keeps running post-reveal.
 */
export const useReveal = (rootMargin = '0px 0px -12% 0px') => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Without IntersectionObserver, show the content rather than hide it.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isVisible];
};

/**
 * Tracks which section is currently in view so the nav can mark it.
 */
export const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The entry closest to the top of the viewport wins.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

/**
 * Staggered reveal class + delay for a list item.
 * Takes the element's own class first so spreading this never drops it.
 */
export const revealProps = (base, isVisible, index = 0, step = 60) => ({
  className: `${base} reveal${isVisible ? ' is-visible' : ''}`.trim(),
  style: { '--reveal-delay': `${index * step}ms` }
});
