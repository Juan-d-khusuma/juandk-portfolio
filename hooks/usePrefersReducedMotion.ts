import {useMemo} from 'react';
/**
 * Hook to get the prefers-reduced-motion media query value.
 * @return {boolean}
 *
 * @example
 * usePrefersReducedMotion()
 */
function usePrefersReducedMotion() {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const {matchMedia} = window;
    const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

    return prefersReducedMotion.matches;
  }, []);
}

export default usePrefersReducedMotion;
