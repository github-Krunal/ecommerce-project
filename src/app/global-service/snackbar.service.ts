import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../global-component/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) {}

  show(message: string, duration: number = 3000) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message },
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
