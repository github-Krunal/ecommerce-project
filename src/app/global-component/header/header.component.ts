import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { UtilityService } from '../../global-service/utility.service';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ANGULARMATERIALModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers:[UtilityService]
})
export class HeaderComponent implements OnInit {
  protected userInitial:string="NA"
  constructor(private utilityService:UtilityService){}

  ngOnInit(): void {
    this.showInitial();
  }

  private showInitial(){
    debugger
    this.userInitial=this.utilityService.getInitials();
  }
}
