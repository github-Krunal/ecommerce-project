import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorBannerComponent } from './tutor-banner.component';

describe('TutorBannerComponent', () => {
  let component: TutorBannerComponent;
  let fixture: ComponentFixture<TutorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
