import { LOCAL_STOREAGE_CONSTANT } from './../constant/localstorge.constant';
import { Injectable } from '@angular/core';
import { SnackbarComponent } from '../global-component/snackbar/snackbar.component';
import { IUser } from '../model/login.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private snackbarService:SnackbarService){ }

  public showSnackbar(message?: string) {
    if (message) {
      this.snackbarService.show(message);
    }
  }

  public setInLocalStorage(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }

  public getInLocalStorage(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  public removeFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  public getInitials(): string {
    const user = this.getInLocalStorage(LOCAL_STOREAGE_CONSTANT.USER) as IUser | null;
    const source = user?.username?.trim() || user?.email?.trim();

    if (!source) return '';

    const words = source.split(/[\s@._-]+/).filter(Boolean);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase(); // e.g., "admin" → "AD"
    }
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase(); // e.g., "admin user" → "AU"
  }


}
