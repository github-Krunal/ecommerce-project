import { CommonModule } from '@angular/common';
import { FieldDefination } from './../../model/fieldDefination.interface';
import { Component, Output, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LookupPropertiesComponent } from './lookup-properties/lookup-properties.component';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { DropdownPropertiesComponent } from './dropdown-properties/dropdown-properties.component';

@Component({
  selector: 'form-business-object',
  standalone: true,
  imports: [CommonModule,FormsModule,LookupPropertiesComponent,DropdownPropertiesComponent],
  templateUrl: './form-business-object.component.html',
  styleUrl: './form-business-object.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class FormBusinessObjectComponent {
  @Input() field!: FieldDefination;
  protected fieldTypeEnum = FieldTypeEnum;
}
