import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';
import { FrameworkService } from '../../services-api/framework.service';
import { ActivatedRoute } from '@angular/router';
import { FormRenderControlComponent } from '../form-render-control/form-render-control.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'framework-form-create',
  standalone: true,
  imports: [ANGULARMATERIALModule, FormsModule, FormRenderControlComponent,CommonModule],
  templateUrl: './framework-form-create.component.html',
  styleUrl: './framework-form-create.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class FrameworkFormCreateComponent {
  public frameworkForm: FormGroup | undefined;

  public fieldName:string="";
  public fieldType!:FieldTypeEnum|null;
  public fieldDefinationList:FieldDefination[]=[
  //   {
  //   fieldType:FieldTypeEnum.SINGLE_LINE_FIELD,
  //   formControlName:'abc',
  //   label:"kk"
  // },
  // {
  //   fieldType:FieldTypeEnum.MULTI_LINE_FIELD,
  //   formControlName:'abc',
  //   label:"kk"
  // }
]
  public fieldTypList: FieldTypeEnum[] = Object.values(FieldTypeEnum);
  public repositoryID:string|null="";

  public fieldList:any[]=[
    {
      icon:"add",
      Name:"Text Field"
    },
    {
      icon:"add",
      Name:"Multi-line Field"
    }
  ]

  constructor(public frameworkService:FrameworkService,private route: ActivatedRoute,private formBuilder: FormBuilder){}

  ngOnInit() {
    this.repositoryID = this.route.snapshot.paramMap.get('id');
    this.initializeFrameworkForm();
  }
  private initializeFrameworkForm(): void {
    this.frameworkForm = this.formBuilder.group({});
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const draggedItem = event.previousContainer.data[event.previousIndex];
      // Map the dragged item to a FieldDefination
      const newField: FieldDefination = {
        fieldType: this.mapNameToFieldType(draggedItem.Name),
        formControlName: `field_${Date.now()}`,
        label: draggedItem.Name+`name_${this.fieldDefinationList.length}`
      };

      event.container.data.splice(event.currentIndex, 0, newField);
    }
  }

  private mapNameToFieldType(name: string): FieldTypeEnum {
    switch (name) {
      case 'Text Field':
        return FieldTypeEnum.SINGLE_LINE_FIELD;
      case 'Multi-line Field':
        return FieldTypeEnum.MULTI_LINE_FIELD;
      default:
        return FieldTypeEnum.SINGLE_LINE_FIELD;
    }
  }
  // public addField(){
  //   this.fieldDefinationList.push(
  //     {
  //       fieldType:this.fieldType,
  //       formControlName:this.removeSpaceFromControl(),
  //       label:this.fieldName
  //     }
  //   )
  //   this.resetControls();
  // }
  public submitField(){
    this.frameworkService.updateFieldDefination(this.repositoryID,this.fieldDefinationList).subscribe(response=>{
      this.fieldDefinationList=[]
    })
  }

  // protected resetControls():void{
  //   this.fieldName="";
  //   this.fieldType = null;
  // }

  // public removeSpaceFromControl():string{
  //   return this.fieldName.replace(/\s+/g, '');
  // }
  // public deleteJson(index:number){
  //   this.fieldDefinationList.splice(index, 1);
  // }
}
