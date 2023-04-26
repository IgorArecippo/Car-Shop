import ICar from '../Interfaces/ICar';

export default class Car implements ICar {
  private _id: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

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
    this._id = id;
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status || false;
    this._buyValue = buyValue;
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }

  public get id(): string | undefined {
    return this._id;
  }
  public set id(id: string | undefined) {
    this._id = id;
  }

  public get model(): string {
    return this._model;
  }
  public set model(model: string) {
    this._model = model;
  }

  public get year(): number {
    return this._year;
  }
  public set year(year: number) {
    this._year = year;
  }

  public get color(): string {
    return this._color;
  }
  public set color(color: string) {
    this._color = color;
  }

  public get status() {
    return this._status;
  }
  public set status(status: boolean) {
    this._status = status;
  }

  public get buyValue() {
    return this._buyValue;
  }
  public set buyValue(buyValue: number) {
    this._buyValue = buyValue;
  }

  public get doorsQty() {
    return this._doorsQty;
  }
  public set doorsQty(doorsQty: number) {
    this._doorsQty = doorsQty;
  }

  public get seatsQty() {
    return this._seatsQty;
  }
  public set seatsQty(seatsQty: number) {
    this._seatsQty = seatsQty;
  }
}
