import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamboardComponent } from './iamboard.component';

describe('IamboardComponent', () => {
  let component: IamboardComponent;
  let fixture: ComponentFixture<IamboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IamboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
