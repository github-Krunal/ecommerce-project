import { Component,CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, } from '@angular/core';
import { FieldTypeEnum } from '../../../enum/fieldType.enum';
import { TableNameEnum } from '../../../enum/tableName.enum';
// import { FrameworkComponent } from '../../../framework/framework.component';
import { IBusinessObject } from '../../../model/businessObject.interface';
import { GloabalModule } from '../../../module/gloabal.module';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [GloabalModule,CdkDropList, CdkDrag],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class TestingComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
