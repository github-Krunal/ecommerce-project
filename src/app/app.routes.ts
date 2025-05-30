import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:"admin",
    loadChildren:()=>import('../app/component/admin/admin.module').then(admin=>admin.AdminModule)
  },
  {
    path:"dashboard",
    loadChildren:()=>import('../app/component/dashboard/dashboard.module').then(dashboard=>dashboard.DashboardModule)
  }
];
