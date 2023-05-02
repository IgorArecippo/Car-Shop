import { Model, Schema, UpdateQuery, isValidObjectId, model, models } from 'mongoose';
import HttpException from '../Middlewares/ErrorHandler';

export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, schema);
  }

  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }

  public async findAll(): Promise<T[]> {
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

  public async updateCar(id: string, data: T) {
    if (!isValidObjectId(id)) {
      throw new HttpException(422, 'Invalid mongo id');
    }
    await this.model.findByIdAndUpdate({ _id: id }, { ...data as UpdateQuery<T> });
    return this.findById(id);
  }
}