import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsboardComponent } from './rdsboard.component';

describe('RdsboardComponent', () => {
  let component: RdsboardComponent;
  let fixture: ComponentFixture<RdsboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdsboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
