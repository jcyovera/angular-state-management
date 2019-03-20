import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLoanComponent } from './new-loan/new-loan.component';

const routes: Routes = [
  { path: 'new-loan', component: NewLoanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
