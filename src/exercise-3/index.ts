function multiplyByTwo(n: number): string {
    let output: Array<number> = [];

    for (let i = 0; i < n; i++) {
        output.push(i * 2);
    }
    return `Jumlah ${n} dikali 2 = ${output}`;
}

function fibonacci(n: number): number[] {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        const fibSequence: number[] = [0, 1];
        for (let i = 2; i <= n; i++) {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
        return fibSequence;
    }
}

function checkSign(n: number): string {
    let sign: string;

    if (n > 0) {
        sign = `${n} is positive`;
    } else if (n < 0) {
        sign = `${n} is negative`;
    } else {
        sign = `${n} is zero`;
    }

    return sign;
}

export {
    checkSign,
    fibonacci,
    multiplyByTwo
}