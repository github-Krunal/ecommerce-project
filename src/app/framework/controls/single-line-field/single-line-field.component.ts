import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldDefination } from '../../../model/fieldDefination.interface';

@Component({
  selector: 'single-line-field',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './single-line-field.component.html',
  styleUrl: './single-line-field.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class SingleLineFieldComponent implements OnInit{

  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;

  ngOnInit(): void {
    this.addControlInForm();
  }
  private addControlInForm(): void {
    this.frameworkForm?.addControl(this.field.formControlName, new FormControl(''));
  }
}
