import {Garage} from './Garage';

export interface User {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  roles?: string;
  username?: string;
  password?: string;
  numTel?: string;
  numeroSiret?: string;
  garages?: [
    {
      id: number;
      nomGarage: string;

    }
  ];
}

