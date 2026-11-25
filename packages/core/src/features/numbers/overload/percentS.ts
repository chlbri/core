export {};

declare global {
  interface Number {
    /**
     * Percent value of the number rendered as a string with a trailing `%`.
     *
     * Defined in `src/features/numbers/overload/percentS.ts`.
     *
     * @returns The percentage as a string, for example `10.percentS` yields
     * `"10%"`.
     */
    get percentS(): string;
  }
}

Object.defineProperty(Number.prototype, 'percentS', {
  get: function () {
    return `${this.toString()}%`;
  },
  configurable: false,
  enumerable: false,
});
