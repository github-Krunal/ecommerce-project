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
  public getRepositoyList(): Observable<any[]> {
    return this.http.get<any>(API_CONSTANT.REPOSITORY_LIST)
  }
  public deleteRepository(id:string): Observable<any[]> {
    return this.http.delete<any>(API_CONSTANT.REPOSITORY_DELETE+`/${id}`)
  }
}
