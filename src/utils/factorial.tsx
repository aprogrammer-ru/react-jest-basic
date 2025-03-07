export const factorial = (n: number): number => {
    if (n < 0) {
        throw new Error("Number must be non-negative");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};