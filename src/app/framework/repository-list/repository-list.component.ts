import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { IBusinessObject } from '../../model/businessObject.interface';
import { GloabalModule } from '../../module/gloabal.module';
import { FrameworkFormComponent } from '../framework-form/framework-form.component';

@Component({
  selector: 'app-repository-list',
  standalone: true,
  imports: [GloabalModule,FrameworkFormComponent],
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class RepositoryListComponent {
  protected isOpenSideNav:boolean=false;
  public businessObject:IBusinessObject={
    isDynamicSave:true,
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



  displayedColumns: string[] = ['position', 'name'];
  dataSource:any =[
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  protected openSidePanel(){
    this.isOpenSideNav=true
  }
  protected closeSidePanel(){
    this.isOpenSideNav=false;
  }
  protected getframeweFormValue(event:any){
    debugger
  }
}
