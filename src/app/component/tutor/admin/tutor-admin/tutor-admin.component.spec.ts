import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAdminComponent } from './tutor-admin.component';

describe('TutorAdminComponent', () => {
  let component: TutorAdminComponent;
  let fixture: ComponentFixture<TutorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
