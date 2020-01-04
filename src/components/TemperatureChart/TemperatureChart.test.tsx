import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TemperatureChart from "./TemperatureChart";

jest.mock("axios", () => {
  const response = {
    data: {
      date: "30 May - 31 May",
      point_data: [
        {
          id: "ambient_temperature",
          name: "Ambient Temperature",
          unit: "°C",
          graph_data: [
            {
              actual: 23.42,
              x: "2019-05-30T00:00:00-04:00"
            }
          ]
        },
        {
          id: "outdoor_temperature",
          name: "Outdoor Temperature",
          unit: "°C",
          graph_data: [
            {
              actual: 13.03,
              x: "2019-05-30T00:00:00-04:00"
            }
          ]
        },
        {
          id: "target_temperature",
          name: "Target Temperature",
          unit: "°C",
          graph_data: [
            {
              actual: 25.5,
              x: "2019-05-30T00:00:00-04:00"
            }
          ]
        }
      ],
      report_unit: "fifteen_minutes"
    }
  };

  return {
    get: jest.fn(() => Promise.resolve(response))
  };
});

let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
const axios = require("axios");

beforeEach(() => {
  wrapper = shallow(<TemperatureChart></TemperatureChart>);
});

test("should render TemperatureChart correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("fetch data on componentDidMount", async () => {
  const instance = wrapper.instance() as TemperatureChart;
  instance.componentDidMount();
  const getSpy = jest.spyOn(axios, "get");
  expect(getSpy).toHaveBeenCalled();
  expect(getSpy).toHaveBeenCalledWith(
    "https://raw.githubusercontent.com/ParityInc/backend-assignment/master/thermostat.json"
  );
  await Promise.resolve();
  expect(wrapper.state()).toHaveProperty("categories", [
    { category: "2019-05-30 - 00:00|" }
  ]);
  expect(wrapper.state()).toHaveProperty("dataset", [
    { seriesname: "Ambient Temperature", data: "23.42|" },
    { seriesname: "Outdoor Temperature", data: "13.03|" },
    { seriesname: "Target Temperature", data: "25.5|" }
  ]);
});
