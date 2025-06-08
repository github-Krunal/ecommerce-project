import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GloabalModule } from '../../module/gloabal.module';
import { TestingComponent } from './testing/testing.component';


const ADMIN_ROUTES:Routes=[
  {
    path:'',
    component:TestingComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ADMIN_ROUTES),
    CommonModule,
    SampleComponent,
    ReactiveFormsModule,
    GloabalModule
  ]
})
export class AdminModule { }
