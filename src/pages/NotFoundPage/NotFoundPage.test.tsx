import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "./NotFoundPage";

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFoundPage></NotFoundPage>);
  expect(wrapper).toMatchSnapshot();
});
