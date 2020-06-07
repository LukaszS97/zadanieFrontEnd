import { Geo } from './geo';

export class Address {
  street: string;
  suite: string;
  city: string;
  kodPocztowy: string;
  geo: Geo = new Geo();
}
