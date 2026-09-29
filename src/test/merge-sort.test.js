import mergeSort from "../merge-sort.js";

describe("Merge Sort Tests", () => {
  test("Empty Array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("One Value", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("Already sorted", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Unsorted", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("Big Numbers", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
