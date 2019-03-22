import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-loan-apply',
  templateUrl: './new-loan-apply.component.html',
  styleUrls: ['./new-loan-apply.component.scss']
})
export class NewLoanApplyComponent implements OnInit {
  @Output() applyLoan = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  apply() {
    this.applyLoan.emit(true);
  }

}
