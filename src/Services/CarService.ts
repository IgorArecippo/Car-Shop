import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import HttpException from '../Middlewares/ErrorHandler';
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

  public async findById(id: string) {
    // console.log(id, 'id service');
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    // console.log(car);
    if (!car) {
      throw new HttpException(404, 'Car not found'); 
    }
    return this.createCarDomain(car);
  }

  public async updateCar(id: string, car: ICar) {
    const carODM = new CarODM();
    const carFind = await carODM.findById(id);
    // console.log(car);
    if (!carFind) {
      throw new HttpException(404, 'Car not found');
    }
    const carUpdated = await carODM.updateCar(id, car);
    return this.createCarDomain(carUpdated);
  }
}