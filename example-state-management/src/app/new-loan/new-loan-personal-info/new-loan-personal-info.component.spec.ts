import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanPersonalInfoComponent } from './new-loan-personal-info.component';

describe('NewLoanPersonalInfoComponent', () => {
  let component: NewLoanPersonalInfoComponent;
  let fixture: ComponentFixture<NewLoanPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
