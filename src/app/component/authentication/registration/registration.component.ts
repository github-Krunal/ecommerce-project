import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlsModule } from '../../../framework/controls/controls.module';
import { IRegistration } from '../../../model/registration.interface';
import { GloabalModule } from '../../../module/gloabal.module';
import { AuthService } from '../../../services-api/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ControlsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class RegistrationComponent {
  public registrationForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,public authService:AuthService){}

  ngOnInit(): void {
    this.formInitialization();
  }

  private formInitialization(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: [''],
      password: ['']
    });
  }

  protected onSubmitRegistrationForm(){
    let registration:IRegistration=this.registrationForm?.value;
    this.authService.postRegistration(registration).subscribe((response:string)=>{

    })
  }
}
