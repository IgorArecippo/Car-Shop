export default interface ICar {
  id?: string | undefined,
  model: string,
  year: number,
  color: string,
  status?: boolean | false,
  buyValue: number,
  doorsQty: number,
  seatsQty: number,
}