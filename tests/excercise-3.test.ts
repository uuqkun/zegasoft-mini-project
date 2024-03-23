import { checkSign, fibonacci, multiplyByTwo } from "../src/excercise-3/index";

describe("Excercise 3", () => {
    test("multiplyByTwo", () => {
        const test = multiplyByTwo(5);
        
        expect(test).toBe("Jumlah 5 dikali 2 = 0,2,4,6,8");
    });

    test("fibonacci", () => {
        const test = fibonacci(10);
        
        expect(test).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });

    test("checkSign", () => {
        const test = checkSign(-10);
        
        expect(test).toBe("-10 is negative");
    });
});