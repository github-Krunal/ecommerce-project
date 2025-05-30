import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerofferComponent } from './banneroffer.component';

describe('BannerofferComponent', () => {
  let component: BannerofferComponent;
  let fixture: ComponentFixture<BannerofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerofferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
