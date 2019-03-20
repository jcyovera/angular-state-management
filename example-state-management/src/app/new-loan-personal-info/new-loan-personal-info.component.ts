import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'new-loan-personal-info',
  templateUrl: './new-loan-personal-info.component.html',
  styleUrls: ['./new-loan-personal-info.component.scss']
})
export class NewLoanPersonalInfoComponent implements OnInit {
  @Input() formGroupPersonalInfo:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
