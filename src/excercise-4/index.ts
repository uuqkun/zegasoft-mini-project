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

export {
    sum,
    getMedian
}