import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  public async create(car: ICar): Promise<Car> {
    const carODM = new CarODM();
    const carCreated = await carODM.create(car);
    return {
      id: carCreated.id,
      model: carCreated.model,
      year: carCreated.year,
      color: carCreated.color,
      status: carCreated.status,
      buyValue: carCreated.buyValue,
      doorsQty: carCreated.doorsQty,
      seatsQty: carCreated.seatsQty,
    };
  }
}