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
        path: 'instructor',
        loadComponent: () =>
          import('./instructor/instuctor-sidebar/instuctor-sidebar.component').then((m) => m.InstuctorSidebarComponent),
          children:[
            {
              path:'',
              pathMatch:'full',
              redirectTo:'dashboard'
            },
              {
                path: 'dashboard',
                loadComponent: () =>
                  import('../tutor/instructor/instructor-dashboard/instructor-dashboard.component').then((m) => m.InstructorDashboardComponent),
              },
              {
                path: 'courses',
                loadComponent: () =>
                  import('../tutor/instructor/instructor-courses/instructor-courses.component').then((m) => m.InstructorCoursesComponent),
              },

          ]
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
