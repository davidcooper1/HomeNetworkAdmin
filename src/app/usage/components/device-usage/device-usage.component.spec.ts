import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceUsageComponent } from './device-usage.component';

describe('DeviceUsageComponent', () => {
  let component: DeviceUsageComponent;
  let fixture: ComponentFixture<DeviceUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
