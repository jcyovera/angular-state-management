import { CustomerEffects } from './store/effects/customer.effect';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { customerReducers } from './store/reducers/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [CustomerListComponent],
  providers: [CustomerEffects],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    StoreModule.forFeature('customers', customerReducers),
    EffectsModule.forRoot([CustomerEffects])
  ]
})
export class CustomersModule { }
