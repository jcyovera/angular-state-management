import { State } from './../../store/state/app.state';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectPersonalInfo } from 'src/app/store/selectors/personal-info.selectors';

@Component({
  selector: 'new-loan-personal-info',
  templateUrl: './new-loan-personal-info.component.html',
  styleUrls: ['./new-loan-personal-info.component.scss']
})
export class NewLoanPersonalInfoComponent implements OnInit {
  @Input() formGroupPersonalInfo:FormGroup;

  constructor(private _store: Store<State>) { }

  ngOnInit() {
    this._store.pipe(select(selectPersonalInfo)).subscribe((data) => {
       console.log(data);
    });
  }

}
