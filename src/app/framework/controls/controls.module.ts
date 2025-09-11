import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleLineFieldComponent } from './single-line-field/single-line-field.component';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';
import { MultiLineFieldComponent } from './multi-line-field/multi-line-field.component';
import { LookUpComponent } from './look-up/look-up.component';
import { CheckBoxComponent } from './check-box/check-box.component';

const COMPONENTS=[
  SingleLineFieldComponent,
  MultiLineFieldComponent,
  LookUpComponent,
  CheckBoxComponent
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
