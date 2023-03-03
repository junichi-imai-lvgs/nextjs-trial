import type { Transition } from 'framer-motion';

export const TRANSITION_DURATION = 0.3;
export const EASING = 'easeInOut';
export const TRANSITION: Transition = {
  duration: TRANSITION_DURATION,
  ease: EASING,
};

export const VARIANTS = {
  active: { opacity: 1 },
  inactive: { opacity: 0 },
};
