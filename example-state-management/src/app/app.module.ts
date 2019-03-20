import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewLoanPersonalInfoComponent } from './new-loan-personal-info/new-loan-personal-info.component';
import { NewLoanPersonalBankInfoComponent } from './new-loan-personal-bank-info/new-loan-personal-bank-info.component';
import { NewLoanApplyComponent } from './new-loan-apply/new-loan-apply.component';
import {MatNativeDateModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatSelectModule, MatStepperModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewLoanComponent,
    NewLoanPersonalInfoComponent,
    NewLoanPersonalBankInfoComponent,
    NewLoanApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
