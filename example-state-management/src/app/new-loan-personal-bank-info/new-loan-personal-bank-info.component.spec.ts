import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanPersonalBankInfoComponent } from './new-loan-personal-bank-info.component';

describe('NewLoanPersonalBankInfoComponent', () => {
  let component: NewLoanPersonalBankInfoComponent;
  let fixture: ComponentFixture<NewLoanPersonalBankInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanPersonalBankInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanPersonalBankInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
