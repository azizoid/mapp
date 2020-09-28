import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import CustomersList from "./pages/customers-list.page";
import AddCustomer from "./pages/add-customer.page";
import EditCustomer from "./pages/edit-customer.page";

import database from "./assets/customers-sample.json";

import { AppContext } from "./context";

function flatternDatabase(dbList: any) {
  return dbList.map((arrayData: any) => {
    const newData = {
      ...arrayData,
      name: arrayData.name.first + ", " + arrayData.name.last,
    };

    return newData;
  });
}

function App() {
  const [customers, setCustomers] = useState(flatternDatabase(database));

  useEffect(() => {
    console.log(customers);
  }, [customers]);

  return (
    <div className="App">
      <Navbar />
      <h1>&nbsp;</h1>
      <div className="container">
        <AppContext.Provider value={{ customers, setCustomers }}>
          <Switch>
            <Route path="/" component={CustomersList} exact={true} />
            <Route path="/add" component={AddCustomer} />
            <Route
              path="/customer/:id"
              render={(q) => {
                return <EditCustomer id={Number(q.match.params.id)} />;
              }}
            />
          </Switch>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
