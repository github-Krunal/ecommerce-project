import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleLineFieldComponent } from './single-line-field/single-line-field.component';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';
import { MultiLineFieldComponent } from './multi-line-field/multi-line-field.component';
import { LookUpComponent } from './look-up/look-up.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { DateFieldComponent } from './date-field/date-field.component';

const COMPONENTS=[
  SingleLineFieldComponent,
  MultiLineFieldComponent,
  LookUpComponent,
  CheckBoxComponent,
  AttachmentComponent,
  DropdownFieldComponent,
  DateFieldComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    COMPONENTS,
    ANGULARMATERIALModule
  ],
  exports:[
    COMPONENTS,
    ANGULARMATERIALModule
  ]
})
export class ControlsModule { }
