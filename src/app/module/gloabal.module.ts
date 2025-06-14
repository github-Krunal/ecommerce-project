import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

const ANGULAR_MATERIAL_MODULE=[
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule
]

const MODULES=[
  ReactiveFormsModule,
  FormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES,
    ANGULAR_MATERIAL_MODULE
  ],
  exports:[
    MODULES,
    ANGULAR_MATERIAL_MODULE
  ]
})
export class GloabalModule { }
