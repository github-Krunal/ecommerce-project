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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

const ANGULAR_MATERIAL_MODULE=[
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatSnackBarModule,
  MatToolbarModule,
  DragDropModule,
  MatAutocompleteModule,
  MatChipsModule,
  FormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ANGULAR_MATERIAL_MODULE,
  ],
  exports:[
    ANGULAR_MATERIAL_MODULE,
  ]
})
export class ANGULARMATERIALModule { }
