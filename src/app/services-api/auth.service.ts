import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANT } from '../constant/api.constant';
import { IRegistration } from '../model/registration.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public postRegistration(registration: IRegistration): Observable<string> {
    return this.http.post<string>(API_CONSTANT.REGISTRATION_POST, registration)
  }
}
