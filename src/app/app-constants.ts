import { environment } from '../environments/environment';

export const constants = {
  baseUrl: environment.production ? 'http://localhost:4200/' : 'http://localhost:4200/',
  webUrl: environment.production ? '/' : '/',
  apiUrl: environment.production ? 'http://localhost:4200/api/' : 'http://localhost:4200/api/',
  assetsUrl: environment.production ? 'assets/' : 'assets/'
};


