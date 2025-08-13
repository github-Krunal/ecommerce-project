import { Component } from '@angular/core';
import { TutorAdminMenuComponent } from '../tutor-admin-menu/tutor-admin-menu.component';

@Component({
  selector: 'app-tutor-admin',
  standalone: true,
  imports: [TutorAdminMenuComponent],
  templateUrl: './tutor-admin.component.html',
  styleUrl: './tutor-admin.component.scss'
})
export class TutorAdminComponent {

}
