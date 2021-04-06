import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsTicketsComponent } from './trains-tickets.component';

describe('TrainsTicketsComponent', () => {
  let component: TrainsTicketsComponent;
  let fixture: ComponentFixture<TrainsTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainsTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
