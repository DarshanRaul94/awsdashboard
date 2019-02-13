import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3boardComponent } from './s3board.component';

describe('S3boardComponent', () => {
  let component: S3boardComponent;
  let fixture: ComponentFixture<S3boardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3boardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3boardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
