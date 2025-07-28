import { FieldTypeEnum } from "../enum/fieldType.enum";

export interface FieldDefination {
  formControlName: string,
  displayName:string,
  fieldType:FieldTypeEnum|null
}
