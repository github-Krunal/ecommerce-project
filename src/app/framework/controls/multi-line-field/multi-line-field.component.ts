
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldDefination } from '../../../model/fieldDefination.interface';

@Component({
  selector: 'multi-line-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './multi-line-field.component.html',
  styleUrl: './multi-line-field.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class MultiLineFieldComponent implements OnInit{
  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;

  ngOnInit(): void {
    this.addControlInForm();
  }
  private addControlInForm(): void {
    this.frameworkForm?.addControl(this.field.formControlName, new FormControl(''));
  }
}
