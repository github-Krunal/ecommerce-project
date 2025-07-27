
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ControlsModule } from '../controls/controls.module';

@Component({
  selector: 'form-render-control',
  standalone: true,
  imports: [ControlsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './form-render-control.component.html',
  styleUrl: './form-render-control.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class FormRenderControlComponent {
  @Input() fieldDefination:FieldDefination[]=[];
  @Input() frameworkForm: FormGroup | undefined;
  @Input() isFieldDefinationCreate:boolean=false;
  @Output() fieldEmitter = new EventEmitter<FieldDefination>();
  protected fieldTypeEnum = FieldTypeEnum;

  protected deleteField(index:number){
     this.fieldDefination.splice(index, 1);
  }

  protected selectedField(field:FieldDefination){
    this.fieldEmitter.emit(field)
  }
}
