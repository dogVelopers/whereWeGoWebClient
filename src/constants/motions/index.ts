import { Inertia, Variants } from 'framer-motion';

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const selectedCardDragTransition: Partial<
  Omit<Inertia, 'type' | 'velocity'>
> = { bounceStiffness: 800, bounceDamping: 100 };

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const logoVariants: Variants = {
  initial: {
    x: -30,
    opacity: 0,
    transition: { duration: 1, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const defaultRightFadeInVariants: Variants = {
  initial: {
    x: -50,
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
