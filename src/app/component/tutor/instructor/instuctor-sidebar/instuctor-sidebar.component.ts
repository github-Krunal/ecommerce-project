import { InstuctorMenuComponent } from './../instuctor-menu/instuctor-menu.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instuctor-sidebar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,InstuctorMenuComponent],
  templateUrl: './instuctor-sidebar.component.html',
  styleUrl: './instuctor-sidebar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class InstuctorSidebarComponent {

}
