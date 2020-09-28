import React, { useEffect, useState } from "react";

import CustomersList from "../components/customers-list.component";

import database from "../assets/customers-sample.json";

const Overview = () => {
  const [customers, setCustomers] = useState(database);
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Overview Page</h1>
      <CustomersList customers={customers} />
    </div>
  );
};

export default Overview;
