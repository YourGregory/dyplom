import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplanesTicketsComponent } from './airplanes-tickets.component';

describe('AirplanesTicketsComponent', () => {
  let component: AirplanesTicketsComponent;
  let fixture: ComponentFixture<AirplanesTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplanesTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplanesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
