import { ANGULARMATERIALModule } from './../../../module/angular-material.module';
import { Component } from '@angular/core';

@Component({
  selector: 'tutor-header',
  standalone: true,
  imports: [ANGULARMATERIALModule],
  templateUrl: './tutor-header.component.html',
  styleUrl: './tutor-header.component.scss'
})
export class TutorHeaderComponent {

}
