import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANT } from '../constant/api.constant';
import { ILogin, ILoginResponse } from '../model/login.interface';
import { IRegistration, IRegistrationResponse } from '../model/registration.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public postRegistration(registration: IRegistration): Observable<IRegistrationResponse> {
    return this.http.post<IRegistrationResponse>(API_CONSTANT.REGISTRATION_POST, registration)
  }

  public postLogin(login: ILogin): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(API_CONSTANT.LOGIN_POST, login)
  }
}
