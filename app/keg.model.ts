export class Keg {
  public lessThan10Pints: boolean = false;

  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public pintsLeft: number) { }

}
