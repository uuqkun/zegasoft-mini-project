import { getMedian, sum } from "../src/excercise-4/index";

describe("Exercise 4 Functions", () => {
    test("Should be return median from given array of numbers", () => {
        const test = getMedian([2, 4, 1, 6, 9, 3]);

        expect(test).toBe(3.5);
    });

    test("Should return total number", () => {
        const test = sum([1, 4, 6, 3, 5]);

        expect(test).toBe(19);
    });
});