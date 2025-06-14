import { helper1, helper2 } from './utils/index.ts';

console.log(helper1()); // helper1
console.log(helper2()); // helper2

export const greet = (name: string): string => `Hello, ${name}!`;

console.log(greet('TypeScript + ESM + ESLint + Prettier + Watch'));
