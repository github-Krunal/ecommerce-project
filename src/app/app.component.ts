import { Component,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GloabalModule } from './module/gloabal.module';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,GloabalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppComponent {
  protected showHeader: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showHeader = !event.urlAfterRedirects.includes('/login');
      });
  }
}
