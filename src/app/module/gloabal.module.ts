import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightPanelComponent } from '../component/global/right-panel/right-panel.component';
import { ANGULARMATERIALModule } from './angular-material.module';



const MODULES=[
  ReactiveFormsModule,
  FormsModule,
  CommonModule
]

const COMPONENT=[
  RightPanelComponent
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES,
    ANGULARMATERIALModule,
    COMPONENT
  ],
  exports:[
    MODULES,
    ANGULARMATERIALModule,
    COMPONENT
  ]
})
export class GloabalModule { }
