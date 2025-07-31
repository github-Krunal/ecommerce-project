import { FieldTypeEnum } from "../enum/fieldType.enum";

export interface FieldDefination {
  _id?: string,
  formControlName: string,
  displayName:string,
  fieldType:FieldTypeEnum|null,
}
