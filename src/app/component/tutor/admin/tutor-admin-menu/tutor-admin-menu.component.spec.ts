import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAdminMenuComponent } from './tutor-admin-menu.component';

describe('TutorAdminMenuComponent', () => {
  let component: TutorAdminMenuComponent;
  let fixture: ComponentFixture<TutorAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorAdminMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
