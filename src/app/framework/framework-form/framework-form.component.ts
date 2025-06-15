import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { IBusinessObject } from '../../model/businessObject.interface';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ControlsModule } from '../controls/controls.module';

@Component({
  selector: 'framework-form',
  standalone: true,
  imports: [ControlsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './framework-form.component.html',
  styleUrl: './framework-form.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class FrameworkFormComponent {

  @Input() businessObject:IBusinessObject | undefined;
  @Output() closeFormEmitter = new EventEmitter<boolean>(false);
  @Output() frameworkFormValueEmitter = new EventEmitter<any>();
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

  public onSubmitFrameworkForm() {
    let frameworkFormValue = this.frameworkForm?.value;
    if (!this.businessObject?.isDynamicSave) {
      this.frameworkFormValueEmitter.emit(frameworkFormValue)
    }
    this.closeFrameworkForm();
  }
  public closeFrameworkForm() {
    this.closeFormEmitter.emit(false)
  }
}
