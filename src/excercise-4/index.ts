function getMedian(arr: number[]): number {
    const sortedArr = arr.sort();
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (sortedArr[mid] + sortedArr[mid - 1]) / 2;
    }

    return arr.sort()[mid];
}

function sum(arr: number[]): number {
    return arr.reduce((prev, curr) => prev + curr);
}

function getMode(arr: number[]): number {
    interface ModeFreq {
        num: number;
        freq: number;
    };

    // Create a mapper array to store the number and its frequency
    let mapper: ModeFreq[] = [];

    // Remove duplicates from the array
    const cleanedArr = [...new Set(arr)];

    // Initialize the mapper array
    cleanedArr.forEach((num, i) => {
        mapper[i] = { num: num, freq: 0 };
    });

    // Count the frequency of each number
    arr.forEach(num => {
        mapper.forEach((obj) => {
            if (obj.num === num) obj.freq++;
        });
    });

    return Math.max(...mapper.map(obj => obj.freq));
}
export {
    getMode,
    sum,
    getMedian
}