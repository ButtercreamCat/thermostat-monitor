import React from "react";
import { shallow } from "enzyme";
import ChartPage from "./ChartPage";

test("should render chart page correctly", () => {
  const wrapper = shallow(<ChartPage />);
  expect(wrapper).toMatchSnapshot();
});
