import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../context";

const CustomersPage = () => {
  const context = useContext(AppContext);

  const [customers, setCustomers] = useState(context.customers);

  const onClickDelete = (id: number): void => {
    const res = window.confirm("Are you sure");
    if (res) {
      setCustomers((prev) => prev.filter((item) => item.customerID !== id));
    }
  };

  return (
    <div>
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
                <Link to={`/customer/${customer.customerID}`} className="edit">
                  edit
                </Link>
              </td>
              <td>
                <button
                  className="delete btn btn-sm btn-danger"
                  onClick={() => onClickDelete(customer.customerID)}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersPage;
