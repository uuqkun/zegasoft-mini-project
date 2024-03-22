import { countCharacters, greet } from '../src/excercise-2/greet';

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
    })
});