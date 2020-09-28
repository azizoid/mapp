import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Overview from "./pages/overview.page";
import Details from "./pages/details.page";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/overview">Overview</Link>
        <Link to="/details/1">Details</Link>
      </div>
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
