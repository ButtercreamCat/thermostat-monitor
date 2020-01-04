import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Thermostat from "./Thermostat";

let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

beforeEach(() => {
  wrapper = shallow(<Thermostat status="Heat"></Thermostat>);
});

test("should render Thermostat correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should Thermostat displays the correct status", () => {
  expect(
    wrapper
      .find(".thermostat_data_icon")
      .hasClass("thermostat_data_icon icon-heat")
  ).toBe(true);
  expect(wrapper.find(".thermostat_data_status").text()).toBe("Heat");
});

test("should Thermostat wave element has the correct class name", () => {
  wrapper = shallow(<Thermostat status="Off"></Thermostat>);
  expect(
    wrapper
      .find(".thermostat_wave")
      .at(0)
      .hasClass("thermostat_wave off")
  ).toBe(true);
});
