import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import HttpException from '../Middlewares/ErrorHandler';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class CarService {
  private createMotoDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async create(moto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const motoCreated = await motoODM.create(moto);
    return this.createMotoDomain(motoCreated);
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
    const motoODM = new MotorcycleODM();
    const carList = await motoODM.findAll();
    return carList.map((moto) => this.createMotoDomain(moto));
  }

  public async findById(id: string) {
    // console.log(id, 'id service');
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.findById(id);
    // console.log(moto);
    if (!moto) {
      throw new HttpException(404, 'Motorcycle not found');
    }
    return this.createMotoDomain(moto);
  }

  public async updateCar(id: string, moto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const motoFind = await motoODM.findById(id);
    // console.log(car);
    if (!motoFind) {
      throw new HttpException(404, 'Motorcycle not found');
    }
    const motoUpdated = await motoODM.updateCar(id, moto);
    return this.createMotoDomain(motoUpdated);
  }
}
