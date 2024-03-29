import { Router } from 'express';
import CarController from '../controllers/CarController';

const CarRouter = Router();

const carController = new CarController();

CarRouter.post('/cars', (req, res) => 
  carController.create(req, res));

CarRouter.get('/cars', (req, res) => 
  carController.read(req, res));

CarRouter.get('/cars/:id', (req, res) => 
  carController.readOne(req, res));

CarRouter.put('/cars/:id', (req, res) => 
  carController.update(req, res));

CarRouter.delete('/cars/:id', (req, res) => 
  carController.delete(req, res));

export default CarRouter;
