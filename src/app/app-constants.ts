import { environment } from '../environments/environment';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

export const constants = {
  baseUrl: environment.production ? 'http://backend.abpprkonsalting.com/public/web/' : '/',
  webUrl: environment.production ? 'http://backend.abpprkonsalting.com/public/web/' : '/',
  apiUrl: environment.production ? 'http://backend.abpprkonsalting.com/api/' : 'http://127.0.0.1:8000/',
  assetsUrl: environment.production ? 'assets/' : 'assets/'
};


