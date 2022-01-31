export interface Etablissement {
  IDEtab: number;
  type: string;
  classement: string;
  nom: string;
  telephone: string;
  email: string;
  siteInternet: string;
  capaciteDAccueil: number;
  codePostal: number;
  adresse: string;
  departement: string;
  region: string;
  commune: string;
  nbLogement: number;
  coordonnesGPSX: number;
  coordonnesGPSY: number;
}
