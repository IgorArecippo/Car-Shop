import ICar from '../Interfaces/ICar';
import Abstract from './Abstract';

export default class Car extends Abstract {
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(car: ICar) {
    super(car.id, car.model, car.year, car.color, car.status || false, car.buyValue);
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }

  // public get id(): string | undefined {
  //   return this.id;
  // }
  // public set id(id: string | undefined) {
  //   this.id = id;
  // }

  // public get model(): string {
  //   return this.model;
  // }
  // public set model(model: string) {
  //   this.model = model;
  // }

  // public get year(): number {
  //   return this.year;
  // }
  // public set year(year: number) {
  //   this.year = year;
  // }

  // public get color(): string {
  //   return this.color;
  // }
  // public set color(color: string) {
  //   this.color = color;
  // }

  // public get status() {
  //   return this.status;
  // }
  // public set status(status: boolean) {
  //   this.status = status;
  // }

  // public get buyValue() {
  //   return this._buyValue;
  // }
  // public set buyValue(buyValue: number) {
  //   this._buyValue = buyValue;
  // }

  // public get doorsQty() {
  //   return this._doorsQty;
  // }
  // public set doorsQty(doorsQty: number) {
  //   this._doorsQty = doorsQty;
  // }

  // public get seatsQty() {
  //   return this._seatsQty;
  // }
  // public set seatsQty(seatsQty: number) {
  //   this._seatsQty = seatsQty;
  // }
}
