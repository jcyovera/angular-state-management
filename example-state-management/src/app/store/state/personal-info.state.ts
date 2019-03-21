export interface IPersonalInfoState {
    firstName: string;
    lastName: string;
    dni: number;
    address: string;
  }
  
  export const initialPersonalInfoState: IPersonalInfoState = {
    firstName: '',
    lastName: '',
    dni: null,
    address: '',
  };