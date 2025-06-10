import { FieldDefination } from './../model/fieldDefination.interface';
import { CommonModule } from '@angular/common';
import { Component, Input,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IBusinessObject } from '../model/businessObject.interface';
import { ControlsModule } from './controls/controls.module';
import { FieldTypeEnum } from '../enum/fieldType.enum';
@Component({
  selector: 'app-framework',
  standalone: true,
  imports: [ControlsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class FrameworkComponent {

  @Input() businessObject:IBusinessObject | undefined;
  public frameworkForm: FormGroup | undefined;
  protected fieldDefination:FieldDefination[]=[];
  protected fieldTypeEnum = FieldTypeEnum;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.generateFrameworkForm();
    this.getFieldDefination();
  }

  private getFieldDefination(): void {
    if (this.businessObject?.fieldDefination) {
      this.fieldDefination = this.businessObject?.fieldDefination
    }
  }

  private generateFrameworkForm(): void {
    this.frameworkForm = this.formBuilder.group({});
  }

  public onSubmitFrameworkForm(){
    debugger
    console.log(this.frameworkForm);
  }
}
