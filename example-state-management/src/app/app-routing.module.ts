import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLoanComponent } from './new-loan/new-loan.component';

const routes: Routes = [
  { path: 'new-loan', component: NewLoanComponent },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
