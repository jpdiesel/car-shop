import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

// feito com a ajuda do link a seguir: 
// // https://github.com/colinhacks/zod

export type Vehicle = z.infer<typeof VehicleSchema>;
export { VehicleSchema };
