import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';

const TUTOR_ROUTES:Routes=[
  {
    path:'',
    redirectTo:"dashboard",
    pathMatch:"full"
  },
  {
    path:'dashboard',
    component:TutorDashboardComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(TUTOR_ROUTES)
  ]
})
export class TutorModule { }
