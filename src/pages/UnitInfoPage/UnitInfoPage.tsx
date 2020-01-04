import React, { Component } from "react";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import "./UnitInfoPage.scss";
import ThermostatPage from "../ThermostatPage/ThermostatPage";
import ChartPage from "../ChartPage/ChartPage";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";

type TParams = { id: string };

class UnitInfoPage extends Component<RouteComponentProps<TParams>> {
  render() {
    const { match } = this.props;
    return (
      <div className="unitInfo">
        <InfoSidebar id={match.params.id} url={match.url}></InfoSidebar>

        <Switch>
          <Route path={`${match.path}/thermostat`}>
            <ThermostatPage></ThermostatPage>
          </Route>
          <Route path={`${match.path}/chart`}>
            <ChartPage></ChartPage>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default UnitInfoPage;
