import mergeSort from "../merge-sort.js";

describe("Merge Sort Tests", () => {
  test("Empty Array", () => {
    expect(mergeSort([])).toEqual([]);
  });
});
