import { ImporterCompany } from "../enums/importer-company";
import { Material } from "../enums/material";
import { FinalClient } from "../enums/final-client";
import { Unit } from "../enums/unit";
import { OportunityPart } from "./oportunity-part";

export class Request extends OportunityPart {

  importerCompany?: ImporterCompany;
  specialist?: string;
  requestedMaterial?: Material;
  finalClient?: FinalClient;
  unit?: Unit;
  quantity: number = 0;
  date: Date = new Date(Date.now());
  validUntil: Date = new Date();
  override type: string = "Request";

  public constructor(days: number) {
    super();
    this.addDays(this.validUntil, days);
  }

  private addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}
