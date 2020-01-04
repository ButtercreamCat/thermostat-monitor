import React, { Component } from "react";
import "./Thermostat.scss";

interface ThermostatProps {
  status: string;
}

class Thermostat extends Component<ThermostatProps> {
  render() {
    const { status } = this.props;

    const eleArr: JSX.Element[] = [];
    let rotation = 0;
    while (rotation < 180) {
      eleArr.push(
        <div
          className="thermostat_line"
          style={{ transform: `rotate(${rotation}deg)` }}
          key={rotation}
        ></div>
      );
      rotation += 2;
    }
    return (
      <div className="thermostat">
        <div className="thermostat_circle">
          <div className="thermostat_data">
            <div className="thermostat_data_temperature">23</div>
            <div
              className={`thermostat_data_icon icon-${status.toLocaleLowerCase()}`}
            ></div>
            <div className="thermostat_data_status">{status}</div>
          </div>
        </div>
        <div
          className={`thermostat_wave ${
            status.toLocaleLowerCase() === "off" ? "off" : ""
          }`}
        ></div>
        <div
          className={`thermostat_wave ${
            status.toLocaleLowerCase() === "off" ? "off" : ""
          }`}
        ></div>
        <div
          className={`thermostat_wave ${
            status.toLocaleLowerCase() === "off" ? "off" : ""
          }`}
        ></div>
        {eleArr}
      </div>
    );
  }
}

export default Thermostat;
