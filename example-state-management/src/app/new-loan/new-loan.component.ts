import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.scss']
})
export class NewLoanComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    /*this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      address: ['',]
    });*/
    this.secondFormGroup = this._formBuilder.group({
      workAddress: ['', Validators.required],
      bankAccountNumber: ['', Validators.required],
      loanAmount: ['', Validators.required]
    });
  }

  applyLoan() {
    console.log(this.firstFormGroup);
  }

}
