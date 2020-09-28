import React from "react";
import { Link } from "react-router-dom";

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

interface ICustomersList {
  customers: ICustomer[];
}

const CustomersList: React.FC<ICustomersList> = ({ customers }) => {
  console.log(customers);
  return (
    <div>
      <Link to="/customers/add" className="btn btn-success">
        Add Customer
      </Link>
      <hr />
      <table className="table table-striped">
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.customerID}</td>
              <td>{customer.name.first}</td>
              <td>{customer.name.last}</td>
              <td>{customer.birthday}</td>
              <td>{customer.gender}</td>
              <td>{customer.lastContact}</td>
              <td>{customer.customerLifetimeValue}</td>
              <td>
                <Link to="/" className="edit">
                  edit
                </Link>
              </td>
              <td>
                <Link to="/" className="delete btn btn-sm btn-danger">
                  x
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
