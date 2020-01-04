import React, { Component } from "react";
import TemperatureChart from "../../components/TemperatureChart/TemperatureChart";

export default class ChartPage extends Component {
  render() {
    return (
      <div className="unitInfo_content">
        <TemperatureChart></TemperatureChart>
      </div>
    );
  }
}
