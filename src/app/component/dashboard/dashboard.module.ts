import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { BannerofferComponent } from './banneroffer/banneroffer.component';

const COMPONENTS_LIST=[
  DashboardComponent,
  BannerofferComponent
]

const DASHBOARD_ROUTES:Routes=[
  {
    path:'',
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES),
    CommonModule,
    COMPONENTS_LIST
  ]
})
export class DashboardModule { }
