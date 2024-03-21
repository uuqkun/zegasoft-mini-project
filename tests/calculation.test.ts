import { summation, subtraction, division } from "../src/excercise-1/calculation";

describe('calculation.ts', () => {
    it("should return a proper value", () => {
        let a: number = 124;
        let b: number = 4;

        expect(summation(a, b)).toBe(128);
        expect(subtraction(a, b)).toBe(120);
        expect(division(a, b)).toBe(31);
    });
});