function greet(time: string): string {
    let message: string = "";
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
    const characters = sentence.replace(/\s/g, '').length;

    return `Jumlah huruf adalah ${characters} karakter.`;
}

export {
    countCharacters,
    greet
}