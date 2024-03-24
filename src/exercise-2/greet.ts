function greet(time: string): string {
    let message: string = "";

    // Get the hour from the time
    const hour = parseFloat(time.split('.')[0]);

    if (hour >= 0 && hour < 23) {
        if (hour >= 0 && hour < 12) {
            message = 'Selamat pagi!';
        }
        else if (hour >= 12 && hour < 17) {
            message = 'Selamat siang!';
        }
        else {
            message = 'Selamat sore!';
        }
    }

    return message;
}

function countCharacters(sentence: string): string {
    // Remove whitespaces and count the characters
    const characters = sentence.replace(/\s/g, '').length;

    return `Jumlah huruf adalah ${characters} karakter.`;
}

function formatNumbers(input: number): number {
    // Convert input to string
    const rounded = input.toFixed(2);

    // Split the number into base and decimal
    const [base, decimal] = rounded.split('.');

    // Get the first number of the decimal
    const decimalNumber = Math.round(parseFloat(`${decimal[0]}.${decimal[1]}`));

    // Convert decimal to float if needed
    // const formattedDecimal = parseFloat(`0.${decimalNumber}`);

    // Convert base to float
    const formattedBase = parseFloat(base);

    let output: number;

    if (decimalNumber >= 0 && decimalNumber <= 3) {
        output = formattedBase;
    } else if (decimalNumber <= 7) {
        output = formattedBase + 0.5;
    } else {
        output = formattedBase + 1;
    }

    return output;
}

export {
    formatNumbers,
    countCharacters,
    greet
}