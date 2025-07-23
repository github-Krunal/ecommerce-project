import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ANGULARMATERIALModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class HeaderComponent {

}
