const { calculateAverage, letterGrade, isPassing } = require('../src/gradeToolkit');

const TOTAL_TESTS = 10;
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

check('letterGrade returns A for 90+', letterGrade(95) === 'A');
check('letterGrade returns B for 80-89', letterGrade(85) === 'B');
check('letterGrade returns C for 70-79', letterGrade(72) === 'C');
check('letterGrade returns D for 60-69', letterGrade(65) === 'D');
check('letterGrade returns F below 60', letterGrade(40) === 'F');

check('isPassing uses the default 60 threshold', isPassing(60) === true && isPassing(59) === false);

console.log(`\n${passed}/${TOTAL_TESTS} tests passed`);
if (passed !== TOTAL_TESTS) process.exit(1);
