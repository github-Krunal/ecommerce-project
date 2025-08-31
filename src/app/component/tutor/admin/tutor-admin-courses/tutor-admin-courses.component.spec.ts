import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAdminCoursesComponent } from './tutor-admin-courses.component';

describe('TutorAdminCoursesComponent', () => {
  let component: TutorAdminCoursesComponent;
  let fixture: ComponentFixture<TutorAdminCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorAdminCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorAdminCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
