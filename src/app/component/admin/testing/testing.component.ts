import { Component } from '@angular/core';
import { FieldTypeEnum } from '../../../enum/fieldType.enum';
import { TableNameEnum } from '../../../enum/tableName.enum';
import { FrameworkComponent } from '../../../framework/framework.component';
import { IBusinessObject } from '../../../model/businessObject.interface';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [FrameworkComponent],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
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
