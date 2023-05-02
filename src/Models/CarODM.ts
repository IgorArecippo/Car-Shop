import { Model, Schema, model, models, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import HttpException from '../Middlewares/ErrorHandler';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean },
        buyValue: { type: Number, required: true },
        doorsQty: { type: Number, required: true },
        seatsQty: { type: Number, required: true },
      },
    );
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll(): Promise<ICar[]> { 
    return this.model.find({});
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) {
      throw new HttpException(422, 'Invalid mongo id');
    }
    const result = await this.model.findOne({ _id: id }, { __v: false });
    // console.log(result, id, 'model');
    return result;
  }

  public async updateCar(id: string, car: ICar) {
    if (!isValidObjectId(id)) {
      throw new HttpException(422, 'Invalid mongo id');
    }
    await this.model.findByIdAndUpdate({ _id: id }, { ...car });
    return this.findById(id);
  }
}
