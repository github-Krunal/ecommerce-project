import { CommonModule } from '@angular/common';

import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { IBusinessObject } from '../../model/businessObject.interface';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ISaveFrameworkObject } from '../../model/saveFrameworkObject.interface';
import { FrameworkService } from '../../services-api/framework.service';
import { ControlsModule } from '../controls/controls.module';
import { FormRenderControlComponent } from '../form-render-control/form-render-control.component';

@Component({
  selector: 'framework-form',
  standalone: true,
  imports: [ControlsModule, ReactiveFormsModule, FormRenderControlComponent,CommonModule],
  templateUrl: './framework-form.component.html',
  styleUrl: './framework-form.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class FrameworkFormComponent {

  @Input() businessObject:IBusinessObject | undefined;
  @Input() repositoryID:string|null="";
  @Input() recordID:string|null="";
  @Output() closeFormEmitter = new EventEmitter<boolean>(false);
  @Output() frameworkFormValueEmitter = new EventEmitter<any>();
  public frameworkForm: FormGroup | undefined;
  protected fieldDefination:FieldDefination[]=[];
  protected fieldTypeEnum = FieldTypeEnum;

  constructor(private formBuilder: FormBuilder,public frameworkService:FrameworkService){}

  ngOnInit(): void {
    this.generateForm();
  }
  private generateForm(){
    this.formInitalization();
  }
  private formInitalization(){
    this.initializeFrameworkForm();
    this.getFieldDefination();
  }
  private getFieldDefination(): void {
    if (this.businessObject?.fieldDefination) {
      this.fieldDefination = this.businessObject?.fieldDefination
    }
  }

  private initializeFrameworkForm(): void {
    this.frameworkForm = this.formBuilder.group({});
    if (this.recordID) {
      this.getRecord();
    }
  }

  private getRecord(){
    this.frameworkService.getSignleRecord(this.repositoryID,this.recordID).subscribe(record=>{
      this.fieldDefination.forEach(field=>{
        const fieldValue=record[field.formControlName];
        this.frameworkForm?.get(field.formControlName)?.setValue(fieldValue);
      })
    })
  }

  public onSubmitFrameworkForm() {
    if (this.businessObject?.isCustomFormSave) {
      this.repositoryFormSave();
    } else {
      this.frameworkFormSave();
    }
  }

  private frameworkFormSave() {
    if (this.recordID) {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  private repositoryFormSave(){
    let frameworkFormValue = this.frameworkForm?.value;
    this.frameworkFormValueEmitter.emit(frameworkFormValue);
  }

  private saveForm() {
    let saveFrameworkObject:ISaveFrameworkObject={
      repositoryID:this.repositoryID,
      record:this.frameworkForm?.value,
    };
    this.frameworkService.saveRecordForm(saveFrameworkObject).subscribe(record=>{
      this.closeFrameworkForm();
    })
  }

  private updateForm() {
    let saveFrameworkObject:ISaveFrameworkObject={
      repositoryID:this.repositoryID,
      recordID:this.recordID,
      record:this.frameworkForm?.value,
    };
    this.frameworkService.updateForm(saveFrameworkObject).subscribe(record=>{
      this.closeFrameworkForm();
    })
  }
  public closeFrameworkForm() {
    this.closeFormEmitter.emit(false)
  }
}
