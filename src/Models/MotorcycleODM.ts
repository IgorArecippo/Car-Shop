import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
// import HttpException from '../Middlewares/ErrorHandler';

export default class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean },
        buyValue: { type: Number, required: true },
        category: { type: String, required: true },
        engineCapacity: { type: Number, required: true },
      },
    );
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...car });
  }
}