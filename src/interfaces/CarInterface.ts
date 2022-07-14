import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

const CarSchema = VehicleSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

// feito com a ajuda do link a seguir: 
// // https://github.com/colinhacks/zod

export type Car = z.infer<typeof CarSchema>;
export { CarSchema };
