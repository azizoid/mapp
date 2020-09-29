
export interface ICustomer {
  customerID: number;
  name: string;
  birthday: string;
  gender: "m" | "w";
  lastContact: string;
  customerLifetimeValue: number;
}

export interface ICustomersList {
  customers: ICustomer[];
}