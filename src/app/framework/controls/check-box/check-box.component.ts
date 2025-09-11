import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { ANGULARMATERIALModule } from '../../../module/angular-material.module';

@Component({
  selector: 'check-box',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ANGULARMATERIALModule],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class CheckBoxComponent {
  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean=false;
  protected fieldValue:string="";

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
