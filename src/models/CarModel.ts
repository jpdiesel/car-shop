import { Document, model as createModel, Schema } from 'mongoose';
import { CarType } from '../interfaces/CarInterface';
import MongoModel from './MongoModel';

interface CarDocument extends CarType, Document { }

const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

export default class CarModel extends MongoModel<CarType> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}