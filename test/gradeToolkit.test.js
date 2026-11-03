const { calculateAverage } = require('../src/gradeToolkit');

const TOTAL_TESTS = 4;
let passed = 0;

function check(name, condition) {
  if (condition) {
    passed += 1;
    console.log(`PASS: ${name}`);
  } else {
    console.log(`FAIL: ${name}`);
  }
}

check('calculateAverage computes the mean of scores', calculateAverage([80, 90, 100]) === 90);
check('calculateAverage handles a single score', calculateAverage([75]) === 75);
check('calculateAverage throws on an empty array', (() => {
  try {
    calculateAverage([]);
    return false;
  } catch (e) {
    return true;
  }
})());
check('calculateAverage throws on non-array input', (() => {
  try {
    calculateAverage('not an array');
    return false;
  } catch (e) {
    return true;
  }
})());

console.log(`\n${passed}/${TOTAL_TESTS} tests passed`);
if (passed !== TOTAL_TESTS) process.exit(1);
