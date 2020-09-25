import { reverseString } from '../../reverseString/reverseString.js';

describe("string reverse function", () => {
    it('abc => cba', () => {
        expect(reverseString('abc')).toBe('cba');
    });
});