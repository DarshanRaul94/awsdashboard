import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2boardComponent } from './ec2board.component';

describe('Ec2boardComponent', () => {
  let component: Ec2boardComponent;
  let fixture: ComponentFixture<Ec2boardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2boardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2boardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
