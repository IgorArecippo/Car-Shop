import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const carCreated = await carODM.create(car);
    return this.createCarDomain(carCreated);
    // return {
    //   id: carCreated.id,
    //   model: carCreated.model,
    //   year: carCreated.year,
    //   color: carCreated.color,
    //   status: carCreated.status,
    //   buyValue: carCreated.buyValue,
    //   doorsQty: carCreated.doorsQty,
    //   seatsQty: carCreated.seatsQty,
    // };
  }

  public async findAll() {
    const carODM = new CarODM();
    const carList = await carODM.findAll();
    return carList.map((car) => this.createCarDomain(car));
  }
}