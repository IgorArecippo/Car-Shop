export default class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,
    doorsQty: number,
    seatsQty: number,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
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
