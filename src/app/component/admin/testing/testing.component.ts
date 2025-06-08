import { Component } from '@angular/core';
import { FrameworkComponent } from '../../../framework/framework.component';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [FrameworkComponent],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {

}
