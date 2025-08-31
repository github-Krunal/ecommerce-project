import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'instuctor-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './instuctor-menu.component.html',
  styleUrl: './instuctor-menu.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class InstuctorMenuComponent {

}
