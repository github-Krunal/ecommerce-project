import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'admin'
  },
  {
    path:"admin",
    loadChildren:()=>import('../app/component/admin/admin.module').then(admin=>admin.AdminModule)
  }
];
