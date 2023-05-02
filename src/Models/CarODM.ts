import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';
// import HttpException from '../Middlewares/ErrorHandler';

export default class CarODM extends AbstractODM<ICar> {
  // private schema: Schema;
  // private model: Model<ICar>;
  constructor() {
    const schema = new Schema<ICar>(
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
    // this.model = models.Car || model('Car', this.schema);
    super(schema, 'Car');
  }
}
