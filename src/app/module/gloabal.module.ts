import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ANGULARMATERIALModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { RightPanelComponent } from '../global-component/right-panel/right-panel.component';
import { SnackbarComponent } from '../global-component/snackbar/snackbar.component';
import { HeaderComponent } from '../global-component/header/header.component';
import { LoaderComponent } from '../global-component/loader/loader.component';
import { NoRecordFoundComponent } from '../global-component/no-record-found/no-record-found.component';
import { CommonTableComponent } from '../global-component/common-table/common-table.component';



const MODULES=[
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  RouterModule
]

const COMPONENT=[
  RightPanelComponent,
  SnackbarComponent,
  HeaderComponent,
  LoaderComponent,
  NoRecordFoundComponent,
  CommonTableComponent
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
