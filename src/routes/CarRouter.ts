import { Router } from 'express';
import CarController from '../controllers/CarController';

const CarRouter = Router();

const carController = new CarController();

CarRouter.post('/cars', (req, res) => 
  carController.create(req, res));

export default CarRouter;
