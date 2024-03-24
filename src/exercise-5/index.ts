interface IIntroduction {
    name: string;
    age: number;
    address: string;
    birthDate: string;
};

function introduction({ name, age, address, birthDate }: IIntroduction): string {
    return `Hello, my name is ${name}, I'm ${age} years old, I live in ${address}, and I was born in ${birthDate}.`;
};

function createObject(keys: string[]): Record<string, number> {
    const obj: Record<string, number> = {};
    keys.forEach((key, index) => {
        obj[key] = index + 1;
    });
    return obj;
}

function calculate(birthDate: number): number {
    let minus = 5;
    let times = 3;
    let modulus = 2;

    return ((birthDate - minus) * times) % modulus;
}

export { calculate, createObject, introduction };