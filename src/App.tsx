import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Overview from "./pages/overview.page";
import Details from "./pages/details.page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/overview" component={Overview} />
          <Route
            path="/details/:id"
            render={(q) => {
              return <Details id={Number(q.match.params.id)} />;
            }}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
