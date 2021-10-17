import { generateTests } from '../test';
import { colorHex1, colorHex2, rgba } from './color';
describe('Function rgba ======================================>', () => {
    generateTests(rgba, [
        [3, 34, 53, 99],
        [16, 56, 2, 3],
    ], ['rgba(3,34,53,99)', 'rgba(16,56,2,3)']);
});
describe('colorHex1 ============================================>', () => {
    generateTests(colorHex1, [
        [3, 'f', 'e'],
        [1, 'f', 2, 3],
    ], ['#3fe', '#1f23']);
});
describe('colorHex2 ==============================================>', () => {
    generateTests(colorHex2, [
        ['03', 'ff', 'e5'],
        ['13', 'ff', 'f8', '09'],
    ], ['#03ffe5', '#13fff809']);
});
