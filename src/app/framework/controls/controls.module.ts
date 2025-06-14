import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleLineFieldComponent } from './single-line-field/single-line-field.component';
import {MatTableModule} from '@angular/material/table';

const COMPONENTS=[
  SingleLineFieldComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    COMPONENTS
  ],
  exports:[
    COMPONENTS
  ]
})
export class ControlsModule { }
