import React, { useEffect, useState } from "react";

import database from "../assets/customers-sample.json";

const Overview = () => {
  const [customers, setCustomers] = useState(database);
  useEffect(() => {}, []);

  return <div>Overview Page</div>;
};

export default Overview;
