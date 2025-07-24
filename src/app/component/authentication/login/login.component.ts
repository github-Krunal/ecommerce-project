import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LOCAL_STOREAGE_CONSTANT } from '../../../constant/localstorge.constant';
import { UtilityService } from '../../../global-service/utility.service';
import { ILogin, ILoginResponse } from '../../../model/login.interface';
import { GloabalModule } from '../../../module/gloabal.module';
import { AuthService } from '../../../services-api/auth.service';

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
  public loginForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,public authService:AuthService,private utilityService:UtilityService,private router:Router){}

  ngOnInit(): void {
    this.formInitialization();
  }

  private formInitialization(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['']
    });
  }

  protected onSubmitloginForm(){
    let login:ILogin=this.loginForm?.value;
    this.authService.postLogin(login).subscribe((loginResponse:ILoginResponse)=>{
      if(loginResponse.user?._id){
        this.utilityService.setInLocalStorage(LOCAL_STOREAGE_CONSTANT.USER,loginResponse.user)
        this.utilityService.showSnackbar(loginResponse?.message);
        this.router.navigateByUrl('')
        this.resetForm();
      }
    })
  }

  private resetForm(){
    this.loginForm?.reset();
  }
}
