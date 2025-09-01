import { FieldDefination } from './../../../model/fieldDefination.interface';
import { RepositoryListComponent } from './../../repository-list/repository-list.component';
import { CommonModule } from '@angular/common';
import { ANGULARMATERIALModule } from './../../../module/angular-material.module';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'lookup-properties',
  standalone: true,
  imports: [ANGULARMATERIALModule,CommonModule],
  templateUrl: './lookup-properties.component.html',
  styleUrl: './lookup-properties.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class LookupPropertiesComponent {
  protected RepositoryListComponent:FieldDefination[] = [];

}
