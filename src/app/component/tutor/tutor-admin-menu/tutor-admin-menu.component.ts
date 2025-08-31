import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tutor-admin-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutor-admin-menu.component.html',
  styleUrl: './tutor-admin-menu.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class TutorAdminMenuComponent {

}
