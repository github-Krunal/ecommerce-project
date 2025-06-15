import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleLineFieldComponent } from './single-line-field/single-line-field.component';
import {MatTableModule} from '@angular/material/table';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';

const COMPONENTS=[
  SingleLineFieldComponent
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
