function calculateAverage(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error('scores must be a non-empty array');
  }
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

function letterGrade(average) {
  if (typeof average !== 'number' || Number.isNaN(average)) {
    throw new Error('average must be a number');
  }
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
}

function isPassing(average, passingThreshold = 60) {
  return average >= passingThreshold;
}

module.exports = { calculateAverage, letterGrade, isPassing };
