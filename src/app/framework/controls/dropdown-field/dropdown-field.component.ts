import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldDefination } from '../../../model/fieldDefination.interface';

@Component({
  selector: 'dropdown-field',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class DropdownFieldComponent {

  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean=false;
  protected fieldValue:string="";
  protected dropdownOptions:string[]=[]

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm(){
    this.addControlInForm();
 }

 private getFormValue(){
   this.frameworkForm.get(this.field.formControlName)?.valueChanges.subscribe(value => {
     this.fieldValue=value;
   });
 }

 private addControlInForm(): void {
   this.frameworkForm?.addControl(this.field.formControlName, new FormControl(''));
   this.getFormValue();
 }
}
