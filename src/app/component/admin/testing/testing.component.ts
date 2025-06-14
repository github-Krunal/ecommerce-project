import { Component,CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, } from '@angular/core';
import { FieldTypeEnum } from '../../../enum/fieldType.enum';
import { TableNameEnum } from '../../../enum/tableName.enum';
import { FrameworkComponent } from '../../../framework/framework.component';
import { IBusinessObject } from '../../../model/businessObject.interface';
import { GloabalModule } from '../../../module/gloabal.module';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [FrameworkComponent,GloabalModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class TestingComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
  public businessObject:IBusinessObject={
    tableName:TableNameEnum.BannerField,
    fieldDefination:[
      {
            formControlName:'OfferName',
            label:'OfferName',
            fieldType:FieldTypeEnum.SINGLE_LINE_FIELD
      },
      {
        formControlName:'second',
        label:'second',
        fieldType:FieldTypeEnum.SINGLE_LINE_FIELD
  }
    ]
  }
}
