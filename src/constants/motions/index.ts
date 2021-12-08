import { Variants } from 'framer-motion';

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};
