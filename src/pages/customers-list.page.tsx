import React, { useEffect, useState, createContext } from "react";

import CustomersList from "../components/customers-list.component";

import database from "../assets/customers-sample.json";

const Overview = () => {
  const context = createContext(database);

  const [customers, setCustomers] = useState(database);
  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <div>
      <h1>Overview Page</h1>
      <CustomersList customers={customers} />
    </div>
  );
};

export default Overview;
