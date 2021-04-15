export interface Annonce {
  id?: number;
  titre?: string;
  typeCarburant?: boolean;
  description?: string;
  prix?: string;
  kilometrage?: number;
  modele?: string;
  garage?: string;
  couleur?: string;
  etatVehicule?: string;
  etatVehicule2?: string;
  photos?: [
    string,
  ];
  reference?: string;
}


