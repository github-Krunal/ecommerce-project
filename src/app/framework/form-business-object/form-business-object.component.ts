import { CommonModule } from '@angular/common';
import { FieldDefination } from './../../model/fieldDefination.interface';
import { Component, Output, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-business-object',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-business-object.component.html',
  styleUrl: './form-business-object.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class FormBusinessObjectComponent {
  @Input() field!: FieldDefination
}
