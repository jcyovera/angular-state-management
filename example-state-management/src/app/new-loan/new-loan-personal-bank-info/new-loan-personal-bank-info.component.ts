import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'new-loan-personal-bank-info',
  templateUrl: './new-loan-personal-bank-info.component.html',
  styleUrls: ['./new-loan-personal-bank-info.component.scss']
})
export class NewLoanPersonalBankInfoComponent implements OnInit {
  @Input() formGroupBankInfo:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
