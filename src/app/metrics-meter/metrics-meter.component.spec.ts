import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsMeterComponent } from './metrics-meter.component';

describe('MetricsMeterComponent', () => {
  let component: MetricsMeterComponent;
  let fixture: ComponentFixture<MetricsMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricsMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
