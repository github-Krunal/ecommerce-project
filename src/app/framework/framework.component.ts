import { CommonModule } from '@angular/common';
import { Component, Input,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IBusinessObject } from '../model/businessObject.interface';
import { ControlsModule } from './controls/controls.module';
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

  public onSubmitFrameworkForm(){

  }
}
