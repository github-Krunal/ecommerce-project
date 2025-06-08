import { Component } from '@angular/core';
import { ControlsModule } from './controls/controls.module';

@Component({
  selector: 'app-framework',
  standalone: true,
  imports: [ControlsModule],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.scss'
})
export class FrameworkComponent {

}
