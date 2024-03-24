import { countCharacters, formatNumbers, greet } from '../src/exercise-2/greet';

describe('greet.ts functions', () => {
    it('should return a proper value', () => {
        const test = greet('22.00');

        expect(test).toBe('Selamat sore!');
    });
});


describe('greet.ts second function', () => {
    it('Should return right amount of character within a sentence', () => {
        const test = countCharacters('of character within');

        expect(test).toBe('Jumlah huruf adalah 17 karakter.')
    });
});

describe('greet.ts third function', () => {
    it('Should return base number only', () => {
        const numbers: number[] = [3.23, 3.14, 3.22, 3.32];
        const test: number[] = [];

        numbers.map(num => {
            test.push(formatNumbers(num));
        });

        expect(test).toBeInstanceOf(Object);
        expect(test).toStrictEqual([3, 3, 3, 3]);
    });

    it('Should return base number + 0.5', () => {
        const numbers: number[] = [5.41, 5.37, 5.67, 5.72];
        const test: number[] = [];

        numbers.map(num => {
            test.push(formatNumbers(num));
        });

        expect(test).toBeInstanceOf(Object);
        expect(test).toStrictEqual([5.5, 5.5, 5.5, 5.5]);
    });

    it('Should return base number + 1', () => {
        const numbers: number[] = [10.76, 10.82, 10.97, 10.99];
        const test: number[] = [];

        numbers.map(num => {
            test.push(formatNumbers(num));
        });

        expect(test).toBeInstanceOf(Object);
        expect(test).toStrictEqual([11, 11, 11, 11]);
    });
});