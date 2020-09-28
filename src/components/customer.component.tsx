import React from "react";

interface IName {
  first: string;
  last: string;
}
interface ICustomer {
  customerID: number;
  name: IName;
  birthday: string;
  gender: string;
  lastContact: string;
  customerLifetimeValue: number;
}

// interface ICustomersList {
//   customers: ICustomer[];
// }

const Customer = (customer: ICustomer) => {
  console.log(customer);
  return <div></div>;
};

export default Customer;
