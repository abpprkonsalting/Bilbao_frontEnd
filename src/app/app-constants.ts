import { environment } from '../environments/environment';

export const constants = {
  baseUrl: environment.production ? 'http://127.0.0.1:8000/' : 'http://127.0.0.1:8000/',
  webUrl: environment.production ? '/' : '/',
  apiUrl: environment.production ? 'http://127.0.0.1:8000/' : 'http://127.0.0.1:8000/api/',
  assetsUrl: environment.production ? 'assets/' : 'assets/'
};


