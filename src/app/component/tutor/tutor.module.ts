import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { TutorLayoutComponent } from './tutor-layout/tutor-layout.component';
import { TutorHeaderComponent } from './tutor-header/tutor-header.component';

const TUTOR_ROUTES:Routes=[
  {
    path: '',
    component: TutorLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../tutor/tutor-dashboard/tutor-dashboard.component').then((m) => m.TutorDashboardComponent),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('../tutor/tutor-admin/tutor-admin.component').then((m) => m.TutorAdminComponent),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(TUTOR_ROUTES),
    TutorHeaderComponent
  ]
})
export class TutorModule { }
