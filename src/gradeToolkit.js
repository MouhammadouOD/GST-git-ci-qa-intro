function calculateAverage(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error('scores must be a non-empty array');
  }
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

module.exports = { calculateAverage };
