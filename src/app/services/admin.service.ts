import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUploadImageResponse } from '../model/uploadImage.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public uploadImage(formData:FormData): Observable<IUploadImageResponse>{
    return this.http.post<IUploadImageResponse>('https://your-api.com/upload', formData)
  }
}
