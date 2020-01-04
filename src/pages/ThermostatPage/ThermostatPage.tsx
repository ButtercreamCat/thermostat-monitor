import React, { Component } from "react";
import "./ThermostatPage.scss";
import Thermostat from "../../components/Thermostat/Thermostat";
import StatusButtons from "../../components/StatusButtons/StatusButtons";

type ThermostatPageState = {
  status: string;
};

export default class ThermostatPage extends Component<{}, ThermostatPageState> {
  state = {
    status: "Off"
  };

  handleClick = (status: string) => {
    this.setState({
      status
    });
  };

  render() {
    return (
      <section className="unitInfo_content">
        <Thermostat status={this.state.status}></Thermostat>
        <StatusButtons
          handleClick={this.handleClick}
          status={this.state.status}
        ></StatusButtons>
      </section>
    );
  }
}
