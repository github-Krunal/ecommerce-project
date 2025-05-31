import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const ADMIN_ROUTES:Routes=[
  {
    path:'',
    component:SampleComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ADMIN_ROUTES),
    CommonModule,
    SampleComponent,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
