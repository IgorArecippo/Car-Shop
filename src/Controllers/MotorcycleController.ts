import { NextFunction, Request, Response } from 'express';
// import { stringify } from 'querystring';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoService from '../Services/MotoService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotoService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotoService();
  }

  public async create() {
    const moto: IMotorcycle = this.req.body;
    if (moto.status === undefined) moto.status = false;
    try {
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motoList = await this.service.findAll();
      return this.res.status(200).json(motoList);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    // const id = stringify(idParams);
    try {
      const motoById = await this.service.findById(id);
      return this.res.status(200).json(motoById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCar() {
    const { id } = this.req.params;
    const moto = this.req.body;
    try {
      const motoUpdated = await this.service.updateCar(id, moto);
      return this.res.status(200).json(motoUpdated);
    } catch (error) {
      this.next(error);
    }
  }
}
