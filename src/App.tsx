import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import CustomersList from "./pages/customers-list.page";
import AddCustomer from "./pages/add-customer.page";
import EditCustomer from "./pages/edit-customer.page";

import database from "./assets/customers-sample.json";
import { AppContext } from "./context";

function App() {
  const [customers, setCustomers] = useState(database);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AppContext.Provider value={{ customers, setCustomers }}>
          <Switch>
            <Route path="/customers" component={CustomersList} exact={true} />
            <Route path="/customers/add" component={AddCustomer} />
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
