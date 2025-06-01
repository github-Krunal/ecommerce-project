import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANT } from '../constant/api.constant';
import { IOfferBanner } from '../model/offerBanner.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getBannerOffer(): Observable<IOfferBanner[]> {
    return this.http.get<IOfferBanner[]>(API_CONSTANT.BANNER_OFFER)
  }
}
