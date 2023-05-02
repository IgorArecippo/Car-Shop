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
      // {
      //   toJSON: {
      //     transform: function (_doc, ret) {
      //       delete ret.__v;
      //       const retOutput = {
      //         id: ret._id,
      //         model: ret.model,
      //         year: ret.year,
      //         color: ret.color,
      //         status: ret.satus,
      //         buyValue: ret.buyValue,
      //         doorsQty: ret.doorsQty,
      //         seatsQty: ret.seatsQty,
      //       };
      //       return retOutput;
      //     },
      //   },
      // },
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
}
