const stairCase = require('./utils/stairCase');
// Remember to pass the number of rungs before executing: "N = {your number} npm run start" :)
console.log('Enjoy your stair: ');
console.log('-'.repeat(process.env.N))
stairCase(process.env.N);
