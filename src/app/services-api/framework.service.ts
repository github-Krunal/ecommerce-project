import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANT } from '../constant/api.constant';
import { IBusinessObject } from '../model/businessObject.interface';
import { FieldDefination } from '../model/fieldDefination.interface';
import { IOfferBanner } from '../model/offerBanner.interface';
import { IRepositoryDefination } from '../model/repositoryDefination.interface';
import { ISaveFrameworkObject } from '../model/saveFrameworkObject.interface';
import { IAttachmentResponse } from '../model/uploadImage.interface';

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
  public getSingleRepository(id:string|null): Observable<IRepositoryDefination> {
    return this.http.get<IRepositoryDefination>(API_CONSTANT.SINGLE_REPOSITORY+`/${id}`)
  }
  public saveRecordForm(saveFrameworkObject:ISaveFrameworkObject): Observable<any[]> {
    return this.http.post<any>(API_CONSTANT.RECORD_SAVE,saveFrameworkObject)
  }
  public getAllRecords(repositoryID?:string): Observable<any> {
    return this.http.get<any>(API_CONSTANT.RECORD_GET+`/${repositoryID}`)
  }
  public deleteRecord(repositoryID:string|null,recordID:string): Observable<any> {
    return this.http.delete<any>(API_CONSTANT.RECORD_Delete+`/${repositoryID}/${recordID}`)
  }
  public getSignleRecord(repositoryID:string|null,recordID:string|null): Observable<any> {
    return this.http.get<any>(API_CONSTANT.SIGNLE_RECORD+`/${repositoryID}/${recordID}`)
  }
  public updateForm(saveFrameworkObject:ISaveFrameworkObject): Observable<any[]> {
    return this.http.post<any>(API_CONSTANT.UPDATE_RECORD,saveFrameworkObject)
  }

  public uploadAttachment(file: File | null): Observable<IAttachmentResponse> {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    return this.http.post<IAttachmentResponse>(API_CONSTANT.ATTACHMENT_UPLOAD, formData)
  }
  public deleteAttachment(URL:string): Observable<IAttachmentResponse> {
    return this.http.delete<IAttachmentResponse>(API_CONSTANT.ATTACHMENT_DELETE+'/'+URL)
  }
}
