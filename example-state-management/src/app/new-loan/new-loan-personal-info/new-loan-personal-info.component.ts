import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/state/app.state';
import { selectPersonalInfo } from 'src/app/store/selectors/personal-info.selectors';
import { PersonalInfo } from 'src/app/store/models/personal-info.model';
import { LoadSuccess } from 'src/app/store/actions/personal-info.actions';

@Component({
  selector: 'new-loan-personal-info',
  templateUrl: './new-loan-personal-info.component.html',
  styleUrls: ['./new-loan-personal-info.component.scss']
})
export class NewLoanPersonalInfoComponent implements OnInit {
  //@Input() formGroupPersonalInfo:FormGroup;
  personalInfo: PersonalInfo;

  constructor( private _store: Store<State>,) { }

  ngOnInit() {
    this._store.pipe(select(selectPersonalInfo)).subscribe((data)=>{
      this.personalInfo =  Object.assign({}, data);
      console.log(data);
    });
  }

  savePersonalInfo(){
    this._store.dispatch(new LoadSuccess(this.personalInfo));
  }

}
