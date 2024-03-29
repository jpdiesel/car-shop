// src/controllers/Frame.ts

import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const car = await this.service.create(body);
      if (!car) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in car) {
        return res.status(400).json(car);
      }
      return res.status(201).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  read = async (_req: Request, res: Response):Promise<typeof res> => {
    try {
      const car = await this.service.read();
      if (!car) return res.status(500).json({ error: this.errors.internal });
      return res.status(200).json(car);
    } catch (error) { 
      return res.status(400).json(error);
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      if (id.length < 24) { 
        return res.status(400).json({ error: this.errors.hexadecimalId });
      }
      const car = await this.service.readOne(id);
      return car
        ? res.status(200).json(car)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (req: Request, res: Response<Car | ResponseError>)
  :Promise<typeof res> => {
    const { id } = req.params;
    const { body } = req;
    if (Object.keys(body).length === 0) {
      return res.status(400).json({ error: this.errors.emptyBody });
    }
    if (id.length < 24) { 
      return res.status(400).json({ error: this.errors.hexadecimalId });
    }
    try {
      const car = await this.service.update(id, body);
      return car
        ? res.status(200).json(car)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      if (id.length < 24) { 
        return res.status(400).json({ error: this.errors.hexadecimalId });
      }
      const car = await this.service.delete(id);
      return car
        ? res.status(204).json()
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default CarController;