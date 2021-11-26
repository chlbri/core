export declare function getReferences<T extends readonly string[]>(args: T): {
    [key in T[number]]: number[];
};
