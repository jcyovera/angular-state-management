import { Injectable } from '@angular/core';
import { CustomerService } from '../../services/customer.services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CustomerActionTypes } from '../actions/customer.actions';
import * as customerActions from '../actions/customer.actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions,
              private customerService: CustomerService) {}

  @Effect()
  loadCustomer$ =  this.actions$
    .pipe(
      ofType<customerActions.Load>(CustomerActionTypes.Load),
      mergeMap(() => this.customerService.getAll()
      .pipe(
        map( customers => new customerActions.LoadSucces(customers)),
        catchError(() => EMPTY)
      ))
    );

}
