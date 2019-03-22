export interface IBankInfoState {
  workAddress: string;
  bankAccountNumber: string;
  loanAmount: number;
}

export const initialBankInfoState: IBankInfoState = {
  workAddress: '',
  bankAccountNumber: '',
  loanAmount: null
};
