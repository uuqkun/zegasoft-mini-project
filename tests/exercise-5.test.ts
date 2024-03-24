import { calculate, createObject, introduction } from "../src/exercise-5/index";

describe('Exercise 5 functions', () => {
    test('introduction function', () => {
        const test = introduction({ name: 'John Doe', age: 30, address: '123 Main St', birthDate: '01/01/1990' });
        expect(test).toBe('Hello, my name is John Doe, I\'m 30 years old, I live in 123 Main St, and I was born in 01/01/1990.');
    });

    test('createObject function', () => {
        const test = createObject(['one', 'two', 'three']);
        expect(test).toEqual({ one: 1, two: 2, three: 3 });
    });

    test('calculate function', () => {
        const test = calculate(7);
        expect(test).toBe(0);
    });
});