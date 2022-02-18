import { Bank } from '../Bank';
import { Money } from '../Money';

describe('Money.ts', () => {
  it('Simple Addition', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(reduced).toEqual(Money.dollar(10));
  });
  it('Multiplication', () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  it('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  });

  it('Currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });
});
