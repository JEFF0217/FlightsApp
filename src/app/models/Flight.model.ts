import { Transport } from "./Transport.model";

export interface Flight {
    transport?: Transport;
    origin?: string;
    destination?: string;
    price: number;
  }