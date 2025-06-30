import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANT } from '../constant/api.constant';
import { IOfferBanner } from '../model/offerBanner.interface';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  constructor(private http: HttpClient) { }

  public saveRepositoyFrom(repositoryDefination:any): Observable<any[]> {
    return this.http.post<any>(API_CONSTANT.REPOSITORY_SAVE,repositoryDefination)
  }
}
