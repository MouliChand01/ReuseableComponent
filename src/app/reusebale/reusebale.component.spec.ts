import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusebaleComponent } from './reusebale.component';

describe('ReusebaleComponent', () => {
  let component: ReusebaleComponent;
  let fixture: ComponentFixture<ReusebaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusebaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusebaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
