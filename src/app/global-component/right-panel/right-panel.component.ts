import { CommonModule } from '@angular/common';
import { Component, Input, input, ViewChild, viewChild,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,  } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ANGULARMATERIALModule } from '../../module/angular-material.module';

@Component({
  selector: 'gb-right-panel',
  standalone: true,
  imports: [ANGULARMATERIALModule,CommonModule],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class RightPanelComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @Input() isOpenSideNav:boolean=false;
  openPanel(){
    this.drawer.open()
  }
}
