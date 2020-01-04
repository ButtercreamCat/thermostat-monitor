import React from "react";
import { shallow } from "enzyme";
import UnitsListPage from "./UnitsListPage";

test("should render UnitsListPage correctly", () => {
  const wrapper = shallow(<UnitsListPage></UnitsListPage>);
  expect(wrapper).toMatchSnapshot();
});
