import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBusinessObject } from '../../model/businessObject.interface';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';
import { GloabalModule } from '../../module/gloabal.module';
import { FrameworkService } from '../../services-api/framework.service';
import { FrameworkFormComponent } from '../framework-form/framework-form.component';
import { FrameworkTableComponent } from '../framework-table/framework-table.component';

export interface PeriodicElement {
  first: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {first: "1"},

];
@Component({
  selector: 'record-list',
  standalone: true,
  imports: [GloabalModule,FrameworkFormComponent,FrameworkTableComponent,ANGULARMATERIALModule],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class RecordListComponent {
  @Input() businessObject:IBusinessObject | undefined;
  displayedColumns: string[] = [];
  public dataSource:any[]=[];
  public repositoryID:string|null="";
  public isOpenSideNav:boolean=false;


  constructor(private route: ActivatedRoute,public frameworkService:FrameworkService){}

  ngOnInit() {
    this.repositoryID = this.route.snapshot.paramMap.get('id');
    this.getBusinessObject()
  }

  private getBusinessObject() {
    this.frameworkService.getSingleRepository(this.repositoryID).subscribe((objectDefination: IBusinessObject) => {
      this.businessObject = objectDefination;
    })
    this.setDisplayColumns();
  }

  private setDisplayColumns(){
    let fieldDefination:FieldDefination[]|undefined=this.businessObject?.fieldDefination;
    if(fieldDefination&&fieldDefination.length>0){
      this.displayedColumns=fieldDefination.map(field=>field.formControlName)
    }
    this.getRecords();
  }

  private getRecords(){
    this.frameworkService.getRecords(this.repositoryID).subscribe((records: any) => {
      this.dataSource=records
    })
  }

  public addRecordForm(){
    this.isOpenSideNav=true;
  }
  public closeSidePanel(){
    this.isOpenSideNav=false;
  }
}
