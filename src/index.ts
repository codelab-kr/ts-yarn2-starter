import fs from 'fs';

const file = fs.readFileSync('src/index.ts', 'utf8');
console.log(file);