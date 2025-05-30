import { Component } from '@angular/core';
import { BannerofferComponent } from "./banneroffer/banneroffer.component";

const COMPONENTS_LIST=[
  BannerofferComponent
]
@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [COMPONENTS_LIST]
})
export class DashboardComponent {

}
