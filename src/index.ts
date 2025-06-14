import { helper1, helper2 } from './utils/index.ts';
import { runUserService } from './UserServiceModule/UserServiceModule.ts';
import { runAdminService } from './UserService/UserService.ts';

console.log(helper1()); // helper1
console.log(helper2()); // helper2

export const greet = (name: string): string => `Hello, ${name}!`;

console.log(greet('TypeScript + ESM + ESLint + Prettier + Watch'));

runUserService();
runAdminService();
