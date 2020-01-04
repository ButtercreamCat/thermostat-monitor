import React from "react";
import { shallow } from "enzyme";
import ThermostatPage from "./ThermostatPage";

test("should render ThermostatPage correctly", () => {
  const wrapper = shallow(<ThermostatPage></ThermostatPage>);
  expect(wrapper).toMatchSnapshot();
});

test("should set state correctly on status button click", () => {
  const wrapper = shallow(<ThermostatPage></ThermostatPage>);
  const handleClickProp: (status: string) => void = wrapper
    .find("StatusButtons")
    .prop("handleClick");
  handleClickProp("Auto");
  expect(wrapper.state("status")).toBe("Auto");
});
