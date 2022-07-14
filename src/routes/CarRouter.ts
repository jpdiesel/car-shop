import { Router } from 'express';
import CarController from '../controllers/CarController';

const CarRouter = Router();

const carController = new CarController();

CarRouter.post('/cars', (req, res) => 
  carController.create(req, res));

CarRouter.get('/cars', (req, res) => 
  carController.read(req, res));

export default CarRouter;
