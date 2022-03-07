import { environment } from '../environments/environment';
import { Company } from './infrastructure/model/company';

let companies: Company[] = [
  {id: 0,name:"RESA_CARIBE"},
  {id: 0,name:"ACINOX"},
  {id: 0,name:"TECNOIMPORT"},
  {id: 0,name:"TECNOTEX"},
  {id: 0,name:"METALCUBA"}
]

export const constants = {
  baseUrl: environment.production ? 'http://backend.abpprkonsalting.com/public/web/' : '/',
  webUrl: environment.production ? 'http://backend.abpprkonsalting.com/public/web/' : '/',
  apiUrl: environment.production ? 'http://backend.abpprkonsalting.com/api/' : 'http://127.0.0.1:8000/',
  assetsUrl: environment.production ? 'assets/' : 'assets/',
  companies: companies
};


