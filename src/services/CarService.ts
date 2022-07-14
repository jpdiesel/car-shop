import Service, { ServiceError } from '.';
import { Car, CarType } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';

class CarService extends Service<CarType> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: CarType): Promise<CarType | ServiceError | null> => {
    const parsed = Car.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  read = async (): Promise<CarType[]> => this.model.read();

  readOne = async (id: string):Promise<CarType | null> => 
    this.model.readOne(id);

  update = async (id: string, obj: CarType)
  : Promise<CarType | ServiceError | null> => {
    const parsed = Car.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.update(id, obj);
  };
}

export default CarService;