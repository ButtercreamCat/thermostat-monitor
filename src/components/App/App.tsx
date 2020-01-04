import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UnitsListPage from "../../pages/UnitsListPage/UnitsListPage";
import UnitInfoPage from "../../pages/UnitInfoPage/UnitInfoPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <UnitsListPage></UnitsListPage>
            </Route>
            <Route path="/unit/:id" component={UnitInfoPage}></Route>
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
