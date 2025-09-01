import { CommonModule } from '@angular/common';
import { ANGULARMATERIALModule } from './../../../module/angular-material.module';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FrameworkService } from '../../../services-api/framework.service';
import { IRepositoryDefination } from '../../../model/repositoryDefination.interface';

@Component({
  selector: 'lookup-properties',
  standalone: true,
  imports: [ANGULARMATERIALModule,CommonModule],
  templateUrl: './lookup-properties.component.html',
  styleUrl: './lookup-properties.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class LookupPropertiesComponent {
  protected repositoryList:IRepositoryDefination[] = [];

  constructor(private frameworkService:FrameworkService){}

  ngOnInit(): void {
    this.getAllRepositories();
  }

  private getAllRepositories(){
    this.frameworkService.getRepositoyList().subscribe((repositories:IRepositoryDefination[])=>{
      this.repositoryList=repositories;
    })
  }

}
