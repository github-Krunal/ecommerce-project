import { FieldTypeEnum } from "../enum/fieldType.enum";

export interface FieldDefination {
  formControlName: string,
  label:string,
  fieldType:FieldTypeEnum|null
}
