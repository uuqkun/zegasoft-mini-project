import { getMedian, getMode, sum } from "../src/exercise-4/index";

describe("Exercise 4 Functions", () => {
    test("Should be return median from given array of numbers", () => {
        const test = getMedian([2, 4, 1, 6, 9, 3]);

        expect(test).toBe(3.5);
    });

    test("Should return total number", () => {
        const test = sum([1, 4, 6, 3, 5]);

        expect(test).toBe(19);
    });

    test("Should return mode from given array of numbers", () => {
        const test = getMode([1, 2, 1, 3, 3, 4, 5, 1, 2, 3, 5]);

        expect(test).toBe(3);
    })
});