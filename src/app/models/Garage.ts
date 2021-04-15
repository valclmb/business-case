export interface Garage {
  id: number;
  nomGarage?: string;
  numTel?: string;
  adresseLigne1?: string;
  adresseLigne2?: string;
  codePostal?: number;
  ville?: string;
  user?: {
    prenom?: string;
    nom?: string;
};
}
