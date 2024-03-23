import { generatePassword } from "../src/mini-project/passwordGenerator";

describe('Test generatePassword function', () => {
    test('should return correct format of password', () => {
        let test = generatePassword('Vika Vitaloka');

        expect(test).toBe('BKPLBTJuBKJu');
    });
});