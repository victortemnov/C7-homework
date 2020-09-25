import { oddOrEven } from '../oddOrEven';

describe('odd or even function', () => {
    it('2 even', () => {
        expect(oddOrEven(2)).toBe('Number is even');
    }),
        it('3 odd', () => {
            expect(oddOrEven(3)).toBe('Number is odd');
        }),
            it('15 odd', () => {
                expect(oddOrEven(15)).toBe('Number is odd');
            }),
                it('20 even', () => {
                    expect(oddOrEven(20)).toBe('Number is even');
                });
});
