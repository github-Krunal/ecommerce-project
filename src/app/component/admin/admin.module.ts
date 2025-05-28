import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { RouterModule, Routes } from '@angular/router';


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
    SampleComponent
  ]
})
export class AdminModule { }
