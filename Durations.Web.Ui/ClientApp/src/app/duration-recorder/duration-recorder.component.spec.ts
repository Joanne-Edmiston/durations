import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationRecorderComponent } from './duration-recorder.component';

describe('DurationRecorderComponent', () => {
  let component: DurationRecorderComponent;
  let fixture: ComponentFixture<DurationRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
