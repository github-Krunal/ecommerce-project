import { IRepositoryDefination } from './../../model/repositoryDefination.interface';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { IBusinessObject } from '../../model/businessObject.interface';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';
import { GloabalModule } from '../../module/gloabal.module';
import { FrameworkService } from '../../services-api/framework.service';
import { FrameworkFormComponent } from '../framework-form/framework-form.component';
import { FrameworkTableComponent } from '../framework-table/framework-table.component';

@Component({
  selector: 'record-list',
  standalone: true,
  imports: [GloabalModule,FrameworkFormComponent,FrameworkTableComponent,ANGULARMATERIALModule],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class RecordListComponent {
  public businessObject:IRepositoryDefination | undefined;
  tableColumns: {displayName:string,internalName:string}[] = [];
  dataSource = new MatTableDataSource<any>([]);
  public repositoryID:string="";
  public isOpenSideNav:boolean=false;
  public displayedColumns:string[]=[];
  public recordID:string="";
  public isViewRecord:boolean=false;

  constructor(private route: ActivatedRoute,public frameworkService:FrameworkService){}

  ngOnInit() {
    this.repositoryID = this.route.snapshot.paramMap.get('id')??'';
    this.getBusinessObject()
  }

  private getBusinessObject() {
    this.frameworkService.getSingleRepository(this.repositoryID).subscribe((objectDefination: IRepositoryDefination) => {
      this.businessObject = objectDefination;
      this.setDisplayColumns();
    })
  }

  private setDisplayColumns(){
    let fieldDefination:FieldDefination[]|undefined=this.businessObject?.fieldDefination;
    if(fieldDefination&&fieldDefination.length>0){
      this.tableColumns = fieldDefination.map(field => ({
        displayName: field.displayName,
        internalName: field.formControlName
      }));
      this.displayedColumns = this.tableColumns.map(col => col.internalName);
      this.addActionColumn()
    }
    this.getRecords();
  }

  private addActionColumn(){
    this.tableColumns.unshift({displayName:"Action",internalName:"Action"});
    this.displayedColumns.unshift('Action')
  }

  private getRecords(){
    this.frameworkService.getAllRecords(this.repositoryID).subscribe((records: any) => {
      this.dataSource=records;
    })
  }

  public addRecordForm(){
    this.isOpenSideNav=true;
  }
  public closeSidePanel(){
    this.isOpenSideNav=false;
    this.isViewRecord=false;
    this.getRecords();
  }

  protected onDeleteRecord(id: string) {
    this.frameworkService.deleteRecord(this.repositoryID, id).subscribe(response => {
      this.getRecords();
    })
  }

  protected onEditRecord(id: string){
    this.isOpenSideNav=true;
    this.recordID=id;
  }
  protected onViewRecord(id: string){
    this.isOpenSideNav=true;
    this.recordID=id;
    this.isViewRecord=true;
  }
}
