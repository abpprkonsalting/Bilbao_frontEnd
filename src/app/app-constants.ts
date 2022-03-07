import { environment } from '../environments/environment';
import { Company } from './infrastructure/model/company';
import { Currency } from './infrastructure/model/currency';
import { DeliveryConditions } from './infrastructure/model/delivery-conditions';
import { Material } from './infrastructure/model/material';
import { PaymentMethod } from './infrastructure/model/payment-method';
import { RejectedReason } from './infrastructure/model/rejected-reason';
import { Unit } from './infrastructure/model/unit';

let companies: Company[] = [
  {id: 0,name:"RESA_CARIBE"},
  {id: 0,name:"ACINOX"},
  {id: 0,name:"TECNOIMPORT"},
  {id: 0,name:"TECNOTEX"},
  {id: 0,name:"METALCUBA"}
]
let currencies: Currency[] = [
  {id: 0,name:"Euro"},
  {id: 0,name:"Dollar"}
]
let deliveriesConditions: DeliveryConditions[] = [
  {id: 0,name:"CFR"},
  {id: 0,name:"CPT"},
  {id: 0,name:"FOB"},
  {id: 0,name:"CIF"},
  {id: 0,name:"DAP"}
  
]
let materials: Material[] = [
  {id: 0,name:"Laminados_varios"},
  {id: 0,name:"Materiales_para_estructuras"},
  {id: 0,name:"Materiales_p_andamios"},
  {id: 0,name:"Alambrón_ac"},
  {id: 0,name:"Alambre_trefilado"},
  {id: 0,name:"Alambre_galv"},
  {id: 0,name:"Alambrón_Al"},
  {id: 0,name:"Alambrón"},
  {id: 0,name:"Laminados_ac_inox"},
  {id: 0,name:"Chapa_ac"},
  {id: 0,name:"Barra_ac"},
  {id: 0,name:"Forjados"},
  {id: 0,name:"Tubos"},
  {id: 0,name:"Tubo_Al"},
  {id: 0,name:"Planchas_Ac"},
  {id: 0,name:"Chapas_LF"},
  {id: 0,name:"Lingote_Zn"},
  {id: 0,name:"Aluzinc_y_tornillos"},
  {id: 0,name:"Perfiles_y_planchas"},
  {id: 0,name:"Plancha_p_piso"},
  {id: 0,name:"Planchas_y_chapas"},
  {id: 0,name:"Planchas_LC"},
  {id: 0,name:"Lingote_bronce"},
  {id: 0,name:"Lingotes_Pb"},
  {id: 0,name:"Granallas"},
  {id: 0,name:"Pintura"},
  {id: 0,name:"Hormigón"},
  {id: 0,name:"Bobina_galv"},
  {id: 0,name:"Pb_puro"},
  {id: 0,name:"Pb_aleado"},
  {id: 0,name:"Arena_de_Cromita"},
  {id: 0,name:"Silicato_de_Zirconio"}
]
let paymentMethods: PaymentMethod[] = [
  {id: 0,name:"CC_vista"},
  {id: 0,name:"CC_360"},
  {id: 0,name:"CC_80_20"},
  {id: 0,name:"TB_60_dias_BL"},
  {id: 0,name:"TB_30_dias_BL"},
  {id: 0,name:"CC_70_30"},
  {id: 0,name:"A_convenir"},
  {id: 0,name:"TB_vs_venta"},
  {id: 0,name:"TB_50_50"}
]
let rejectedReasons: RejectedReason[] = [
  {id: 0,name:"Unknown"},
  {id: 0,name:"Closed_with_other_provider"},
  {id: 0,name:"Too_expensive"},
  {id: 0,name:"Bad_quality_material"}
]
let units: Unit[] = [
  {id: 0,name:"Ton"},
  {id: 0,name:"Unit"},
  {id: 0,name:"Liter"}
]

export const constants = {
  baseUrl: environment.production ? 'http://backend.abpprkonsalting.com/public/web/' : '/',
  webUrl: environment.production ? 'http://backend.abpprkonsalting.com/public/web/' : '/',
  apiUrl: environment.production ? 'http://backend.abpprkonsalting.com/api/' : 'http://127.0.0.1:8000/',
  assetsUrl: environment.production ? 'assets/' : 'assets/',
  companies: companies,
  currencies: currencies,
  deliveriesConditions: deliveriesConditions,
  materials: materials,
  paymentMethods: paymentMethods,
  rejectedReasons: rejectedReasons,
  units: units


};


