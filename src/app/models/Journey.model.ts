import { Flight } from './Flight.model';

export interface Journey {
  flights?: Flight[];
  origin?: string;
  destination?: string;
  price: number;
}
