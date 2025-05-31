import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONSTANT } from '../constant/api.constant';
import { IOfferBanner } from '../model/offerBanner.interface';
import { IUploadImageResponse } from '../model/uploadImage.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http: HttpClient) { }

  public uploadImage(file:File|null): Observable<IUploadImageResponse>{
    const formData = new FormData();
    if(file){
formData.append('file', file);
}
    return this.http.post<IUploadImageResponse>(API_CONSTANT.IMAGE_UPLOAD, formData)
  }
  public postBannerOffer(offerBanner:IOfferBanner): Observable<string>{
    return this.http.post<string>(API_CONSTANT.BANNER_OFFER, offerBanner)
  }
}
