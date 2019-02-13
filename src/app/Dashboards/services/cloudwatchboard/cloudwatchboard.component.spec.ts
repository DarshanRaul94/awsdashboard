import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudwatchboardComponent } from './cloudwatchboard.component';

describe('CloudwatchboardComponent', () => {
  let component: CloudwatchboardComponent;
  let fixture: ComponentFixture<CloudwatchboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudwatchboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudwatchboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
