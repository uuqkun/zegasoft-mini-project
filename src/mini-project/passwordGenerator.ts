
/**
 * Generates a password based on the given name.
 * @param name - The name to generate the password from.
 * @returns The generated password.
 */
function generatePassword(name: string): string {
    let generated: string = '';

    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        const isVowels = char === 'a' || char === 'i' || char === 'u' || char === 'e' || char === 'o' || char === 'A' || char === 'I' || char === 'U' || char === 'E' || char === 'O';
        const isAfterVowels = char === 'b' || char === 'j' || char === 'v' || char === 'f' || char === 'p' || char === 'B' || char === 'J' || char === 'V' || char === 'F' || char === 'P';

        if (isVowels) {
            generated += String.fromCharCode(name.charCodeAt(i) + 1);
        } else if (isAfterVowels) {
            generated += String.fromCharCode(name.charCodeAt(i) - 1);
        } else {
            generated += char;
        }
    }

    generated = generated.split('').reverse().join('').replace(/\s/g, '');
    
    /**
     * Reverses the case of each character in the generated password.
     * steps: 
     * 1. split the generated password into an array of characters
     * 2. map through each character and check if it is uppercase or lowercase
     * 3. if it is uppercase, convert it to lowercase and vice versa
     */
    let reverseCase = generated.split('') 
        .map((l: string) => l === l.toUpperCase()
            ? l.toLowerCase()
            : l.toUpperCase())
        .join('');

    return reverseCase;
}

export { generatePassword };
