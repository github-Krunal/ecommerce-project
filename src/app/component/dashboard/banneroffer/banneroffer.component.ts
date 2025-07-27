
import { Component, OnInit } from '@angular/core';
import { SERVER_URL } from '../../../constant/api.constant';
import { IOfferBanner } from '../../../model/offerBanner.interface';
import { DashboardService } from '../../../services-api/dashboard.service';

@Component({
  selector: 'app-banneroffer',
  standalone: true,
  imports: [],
  templateUrl: './banneroffer.component.html',
  styleUrl: './banneroffer.component.scss'
})
export class BannerofferComponent implements OnInit {
  protected bannerOfferList:IOfferBanner[]=[]

  constructor(private dashboardService:DashboardService){}

  ngOnInit(): void {
    this.getBannerOffer();
  }

  private getBannerOffer(): void {
    this.dashboardService.getBannerOffer().subscribe((bannerResponse: IOfferBanner[]) => {
      this.bannerOfferList = bannerResponse;
    })
  }

}
