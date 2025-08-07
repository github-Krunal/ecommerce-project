import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:"auth",
    loadChildren:()=>import('../app/component/authentication/authentication.module').then(auth=>auth.AuthenticationModule)
  },
  {
    path:"admin",
    loadChildren:()=>import('../app/component/admin/admin.module').then(admin=>admin.AdminModule)
  },
  {
    path:"dashboard",
    loadChildren:()=>import('../app/component/dashboard/dashboard.module').then(dashboard=>dashboard.DashboardModule)
  },
  {
    path:"repository",
    loadChildren:()=>import('../app/framework/framework.module').then(framework=>framework.FrameworkModule)
  },
  {
    path:"tutor",
    loadChildren:()=>import('../app/component/tutor/tutor.module').then(framework=>framework.TutorModule)
  },
];
