import { LOCAL_STOREAGE_CONSTANT } from './../constant/localstorge.constant';
import { Injectable } from '@angular/core';
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
    if (typeof window !== 'undefined' && window.localStorage) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
    }
  }

  public removeFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  private getUser():IUser |null{
    return  this.getInLocalStorage(LOCAL_STOREAGE_CONSTANT.USER) as IUser | null;
  }

  public getInitials(): string {
    const user = this.getUser();
    const source = user?.username?.trim() || user?.email?.trim();

    if (!source) return '';

    const words = source.split(/[\s@._-]+/).filter(Boolean);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase(); // e.g., "admin" → "AD"
    }
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase(); // e.g., "admin user" → "AU"
  }

  public getCurrentUserID():string {
    return this.getUser()?._id ?? '';
  }

  public getCurrentDate():string {
    const now = new Date();

    const pad = (n: number) => n.toString().padStart(2, '0');

    const formattedDate =
      `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ` +
      `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    return formattedDate
  }
}
