import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository-list/repository-list.component';

const FRAMEWOEK_ROUTES:Routes=[
  {
    path:'',
    component:RepositoryListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(FRAMEWOEK_ROUTES),
    CommonModule
  ]
})
export class FrameworkModule { }
