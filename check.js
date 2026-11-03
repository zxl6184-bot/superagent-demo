import { sum } from './src/sum.js';

const cases = [
  [3, 4, 7],
  [0, 0, 0],
  [-2, 5, 3],
];

for (const [a, b, expected] of cases) {
  const actual = sum(a, b);
  if (actual !== expected) {
    console.error(`FAIL sum(${a}, ${b}) = ${actual}, expected ${expected}`);
    process.exit(1);
  }
}
console.log('ok');
