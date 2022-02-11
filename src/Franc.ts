import { Money } from './Money';

export class Franc extends Money {
  constructor(protected amount: number) {
    super(amount);
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
