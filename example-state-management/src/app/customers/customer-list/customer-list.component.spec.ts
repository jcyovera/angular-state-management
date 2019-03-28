import { LoadSucces, Load } from './../store/actions/customer.actions';
import { ICustomer } from './../store/models/customer.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { ICustomerState } from '../store/state/customer.state';
import { Store, StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import * as fromFeature from '../store/reducers/customer.reducer';

fdescribe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let storeCustomer: Store<ICustomerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        MatTableModule,
        StoreModule.forRoot({
          ...{ customers: fromFeature.customerReducers}
        })
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    storeCustomer = TestBed.get(Store);
    spyOn(storeCustomer, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call load action', () => {
    const expetedAction = new Load();
    expect(storeCustomer.dispatch).toHaveBeenCalledWith(expetedAction);
  });



  it('should has customers after ngOnit event', () => {
    const expected: ICustomer[] = [{id: 1, firstName: 'juan', lastName: 'demo', amount: 10, email: ''}];
    const action = new LoadSucces(expected);

    storeCustomer.dispatch(action);
    fixture.detectChanges();
    expect(component.customers).toBe(expected);
  });
});
