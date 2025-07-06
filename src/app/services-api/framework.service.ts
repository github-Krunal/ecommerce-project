import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANT } from '../constant/api.constant';
import { IBusinessObject } from '../model/businessObject.interface';
import { FieldDefination } from '../model/fieldDefination.interface';
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
  public updateFieldDefination(repositoryID:string|null,fieldDefinationList:FieldDefination[]): Observable<string> {
    return this.http.post<string>(API_CONSTANT.FIELD_DEFINATION_UPDATE+`/${repositoryID}`,fieldDefinationList)
  }
  public getSingleRepository(id:string|null): Observable<IBusinessObject> {
    return this.http.get<IBusinessObject>(API_CONSTANT.SINGLE_REPOSITORY+`/${id}`)
  }
}
