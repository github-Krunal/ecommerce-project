import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstuctorSidebarComponent } from './instuctor-sidebar.component';

describe('InstuctorSidebarComponent', () => {
  let component: InstuctorSidebarComponent;
  let fixture: ComponentFixture<InstuctorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstuctorSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstuctorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
