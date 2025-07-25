import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STOREAGE_CONSTANT } from '../../constant/localstorge.constant';
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
  constructor(private utilityService:UtilityService,private router:Router){}

  ngOnInit(): void {
    this.showInitial();
  }

  private showInitial(){
    this.userInitial=this.utilityService.getInitials();
  }

  public logout(){
    this.utilityService.removeFromLocalStorage(LOCAL_STOREAGE_CONSTANT.USER);
    this.router.navigateByUrl('/auth/login');
  }
}
