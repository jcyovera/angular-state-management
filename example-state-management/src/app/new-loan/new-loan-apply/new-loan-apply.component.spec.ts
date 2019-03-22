import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanApplyComponent } from './new-loan-apply.component';

describe('NewLoanApplyComponent', () => {
  let component: NewLoanApplyComponent;
  let fixture: ComponentFixture<NewLoanApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
