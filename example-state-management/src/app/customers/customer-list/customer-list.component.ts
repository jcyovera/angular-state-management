import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICustomerState } from '../store/state/customer.state';
import { selectAllCustomer } from '../store/selectors/customer.selector';
import { filter } from 'rxjs/operators';
import { Load } from '../store/actions/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: any[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'loanAmount'];

  constructor(private _store: Store<ICustomerState>) { }

  ngOnInit() {
    this._store.dispatch(new Load());

    this._store.pipe(
      select(selectAllCustomer),
      filter(val => val !== undefined),
    ).subscribe((res) => {
      console.log(res);
      this.customers =  res;
    });
  }

}
