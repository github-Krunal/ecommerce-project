import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAdminDashboardComponent } from './tutor-admin-dashboard.component';

describe('TutorAdminDashboardComponent', () => {
  let component: TutorAdminDashboardComponent;
  let fixture: ComponentFixture<TutorAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorAdminDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
