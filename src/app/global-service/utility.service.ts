import { Injectable } from '@angular/core';
import { SnackbarComponent } from '../global-component/snackbar/snackbar.component';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private snackbarService:SnackbarService){ }

  public showSnackbar(message:string){
    this.snackbarService.show(message);
  }
}
