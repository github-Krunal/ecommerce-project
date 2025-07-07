import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { IBusinessObject } from '../../model/businessObject.interface';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';
import { GloabalModule } from '../../module/gloabal.module';
import { FrameworkService } from '../../services-api/framework.service';
import { FrameworkFormComponent } from '../framework-form/framework-form.component';
import { FrameworkTableComponent } from '../framework-table/framework-table.component';

@Component({
  selector: 'app-repository-list',
  standalone: true,
  imports: [GloabalModule,FrameworkFormComponent,FrameworkTableComponent,ANGULARMATERIALModule],
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers:[FrameworkService]
})
export class RepositoryListComponent implements OnInit {
  protected isOpenSideNav:boolean=false;
  public businessObject:IBusinessObject={
    isCustomFormSave:true,
    fieldDefination:[
      {
            formControlName:'repositoryName',
            label:'Repository Name',
            fieldType:FieldTypeEnum.SINGLE_LINE_FIELD
      },
      {
        formControlName:'description',
        label:'Description',
        fieldType:FieldTypeEnum.MULTI_LINE_FIELD
      },

    ]
  }
  public respositoryList:any[]=[];

  displayedColumns: string[] = ['Action','repositoryName', 'description'];
  dataSource:any =[];

  constructor(private frameworkService:FrameworkService){}

  ngOnInit(): void {
    this.getAllRespositories();
  }

  protected openSidePanel(){
    this.isOpenSideNav=true
  }
  protected closeSidePanel(){
    this.isOpenSideNav=false;
  }
  protected getframeweFormValue(event:any){
    event['createdDate']=this.getCurrentDate();
    this.saveRepositoryForm(event)
  }
  private saveRepositoryForm(repositoryDefination: any){
    this.frameworkService.saveRepositoyFrom(repositoryDefination).subscribe(repositoryResponse=>{
      this.getAllRespositories();
    })
  }

  private getAllRespositories(){
    this.frameworkService.getRepositoyList().subscribe(responsitories=>{
      this.respositoryList=responsitories;
    })
  }

  protected onDeleteRepository(repository:any){
    this.frameworkService.deleteRepository(repository._id).subscribe(a=>{
      this.getAllRespositories();
    })
  }

  private getCurrentDate():string {
    const now = new Date();

    const pad = (n: number) => n.toString().padStart(2, '0');

    const formattedDate =
      `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ` +
      `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    return formattedDate
  }
}
