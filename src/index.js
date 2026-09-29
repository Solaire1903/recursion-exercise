/**
 * Returns the first n numbers from the Fibonacci Sequence
 * @param {number} n The amount of numbers to return from the sequence
 * @returns An array containing the first n numbers of the Fibonacci Sequence
 */
const fibs = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence;
};

export { fibs };
