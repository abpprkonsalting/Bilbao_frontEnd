import { ImporterCompany } from "../enums/importer-company";
import { Material } from "../enums/material";
import { FinalClient } from "../enums/final-client";
import { Unit } from "../enums/unit";

export class Request {
  id: number = 0;
  importerCompany?: ImporterCompany;
  specialist?: string;
  requestedMaterial?: Material;
  finalClient?: FinalClient;
  unit: Unit = Unit.Ton;
  Quantity: number = 0;
  date: Date = new Date(Date.now());
}
