import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Line from "fusioncharts/fusioncharts.zoomline";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import axios from "axios";

ReactFC.fcRoot(FusionCharts, Line, FusionTheme);

interface TemperatureChartState {
  chart: {
    caption: string;
    subcaption: string;
    yaxisname: string;
    xaxisname: string;
    numberSuffix: string;
    forceaxislimits: string;
    pixelsperpoint: string;
    pixelsperlabel: string;
    compactdatamode: string;
    dataseparator: string;
    bgColor: string;
    theme: string;
  };
  categories: { category: string }[] | undefined;
  dataset: { seriesname: string; data: string }[] | undefined;
}

class TemperatureChart extends Component<{}, TemperatureChartState> {
  state: TemperatureChartState = {
    chart: {
      caption: "Temperature",
      subcaption: "Click & drag on the plot area to zoom & then scroll",
      yaxisname: "Temperature",
      xaxisname: "Date",
      numberSuffix: "°C",
      forceaxislimits: "1",
      pixelsperpoint: "0",
      pixelsperlabel: "30",
      compactdatamode: "1",
      dataseparator: "|",
      bgColor: "#fafafa",
      theme: "fusion"
    },
    categories: undefined,
    dataset: undefined
  };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/ParityInc/backend-assignment/master/thermostat.json"
      )
      .then(response => {
        const pointData: {
          id: string;
          name: string;
          unit: string;
          graph_data: { x: string; actual: number }[];
        }[] = response.data.point_data;
        // Convert to fusionchart data format

        // Aggregate data for x-axis
        const categoriesReducer = (
          accumulator: string,
          currentValue: { x: string; actual: number }
        ) => {
          const trimmedString = currentValue.x
            .replace(":00-04:00", "")
            .replace("T", " - ");
          accumulator += trimmedString + "|";
          return accumulator;
        };
        const categoryResult = pointData[0].graph_data.reduce(
          categoriesReducer,
          ""
        );
        const categoriesResult = [
          {
            category: categoryResult
          }
        ];

        // Aggregate data for y-axis
        const datasetReducer = (
          accumulator: { seriesname: string; data: string }[],
          currentValue: {
            id: string;
            name: string;
            unit: string;
            graph_data: { x: string; actual: number }[];
          }
        ) => {
          const seriesObj: { seriesname: string; data: string } = {
            seriesname: "",
            data: ""
          };
          seriesObj.seriesname = currentValue.name;
          const temperatureReducer = (
            accumulator: string,
            currentValue: { x: string; actual: number }
          ) => {
            accumulator += currentValue.actual + "|";
            return accumulator;
          };
          seriesObj.data = currentValue.graph_data.reduce(
            temperatureReducer,
            ""
          );
          const result = accumulator.concat([seriesObj]);
          return result;
        };
        const datasetResult = pointData.reduce(datasetReducer, []);

        // Set State to trigger the re-render
        this.setState({
          categories: categoriesResult,
          dataset: datasetResult
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.categories ? (
          <ReactFC
            type="zoomline"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={this.state}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default TemperatureChart;
