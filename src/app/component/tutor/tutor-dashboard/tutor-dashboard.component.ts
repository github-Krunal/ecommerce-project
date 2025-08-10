import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tutor-dashboard',
  standalone: true,
  imports: [TutorDashboardComponent],
  templateUrl: './tutor-dashboard.component.html',
  styleUrl: './tutor-dashboard.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class TutorDashboardComponent {

}
