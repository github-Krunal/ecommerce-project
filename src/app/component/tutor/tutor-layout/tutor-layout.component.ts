import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TutorHeaderComponent } from '../tutor-header/tutor-header.component';

@Component({
  selector: 'app-tutor-layout',
  standalone: true,
  imports: [RouterModule,TutorHeaderComponent],
  templateUrl: './tutor-layout.component.html',
  styleUrl: './tutor-layout.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class TutorLayoutComponent {

}
