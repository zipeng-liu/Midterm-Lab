export class MenuItem {
  private _mealType: string;
  private _mealName: string;
  private _mealQuantity: string;
  private _price: string;

  constructor(mealType: string, mealName: string, mealQuantity: string, price: string) {
    this._mealType = mealType;
    this._mealName = mealName;
    this._mealQuantity = mealQuantity;
    this._price = price;
  }

  get mealType(): string {
    return this._mealType;
  }

  set mealType(value: string) {
    this._mealType = value;
  }

  get mealName(): string {
    return this._mealName;
  }

  set mealName(value: string) {
    this._mealName = value;
  }

  get mealQuantity(): string {
    return this._mealQuantity;
  }

  set mealQuantity(value: string) {
    this._mealQuantity = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }
}

