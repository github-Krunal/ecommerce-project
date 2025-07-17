import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ANGULARMATERIALModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { RightPanelComponent } from '../global-component/right-panel/right-panel.component';



const MODULES=[
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  RouterModule
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
