import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilityService } from '../../../global-service/utility.service';
import { GloabalModule } from '../../../module/gloabal.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,GloabalModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers:[UtilityService]
})
export class LoginComponent {

  constructor(private utilityService:UtilityService){}

  ngOnInit(): void {
  }
}
