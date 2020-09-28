export interface IName {
  first: string;
  last: string;
}
export interface ICustomer {
  customerID: number;
  name: string;
  birthday: string;
  gender: string;
  lastContact: string;
  customerLifetimeValue: number;
}

export interface ICustomersList {
  customers: ICustomer[];
}