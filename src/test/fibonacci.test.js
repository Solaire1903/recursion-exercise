import { fibs, fibsRec } from "../fibonacci.js";

describe("Iterative Fibonacci Tests", () => {
  test("Fibonacci of 0", () => {
    expect(fibs(0)).toEqual([]);
  });

  test("Fibonacci of 1", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("Fibonacci of 3", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
  });

  test("Fibonacci of 8", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("Fibonacci of 20", () => {
    expect(fibs(20)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]);
  });
});

describe("Recursive Fibonacci Tests", () => {
  test("Fibonacci of 0", () => {
    expect(fibsRec(0)).toEqual([]);
  });

  test("Fibonacci of 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("Fibonacci of 3", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1]);
  });

  test("Fibonacci of 8", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("Fibonacci of 20", () => {
    expect(fibsRec(20)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]);
  });
});
