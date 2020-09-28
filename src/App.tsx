import React, { createContext } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import CustomersList from "./pages/customers-list.page";
import AddCustomer from "./pages/add-customer.page";
import EditCustomer from "./pages/edit-customer.page";

function App() {
  const customersStore = createContext([]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
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
      </div>
    </div>
  );
}

export default App;
