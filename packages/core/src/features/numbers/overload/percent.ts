export {};

declare global {
  interface Number {
    /**
     * Percent value of the number, computed as the number divided by one
     * hundred.
     *
     * Defined in `src/features/numbers/overload/percent.ts`.
     *
     * @returns The percentage as a fraction, for example `10.percent` yields
     * `0.1`.
     */
    get percent(): number;
  }
}

Object.defineProperty(Number.prototype, 'percent', {
  get: function () {
    return this.valueOf() / 100;
  },
  configurable: false,
  enumerable: false,
});
