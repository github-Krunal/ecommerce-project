import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstuctorMenuComponent } from './instuctor-menu.component';

describe('InstuctorMenuComponent', () => {
  let component: InstuctorMenuComponent;
  let fixture: ComponentFixture<InstuctorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstuctorMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstuctorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
