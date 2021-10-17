export function isArray(value) {
    return value instanceof Array;
}
export function sliceArray(array, splicer) {
    const arr = [...array];
    return new Array(Math.ceil(array.length / splicer))
        .fill(arr)
        .map(() => arr.splice(0, splicer).map(val => (isArray(val) ? val[0] : val)));
}
