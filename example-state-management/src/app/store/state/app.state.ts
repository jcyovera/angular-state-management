import { IPersonalInfoState } from './personal-info.state';
import { IBankInfoState } from './bank-info.state';

export interface State {
   personalInfo: IPersonalInfoState;
   bankInfo: IBankInfoState;
}
