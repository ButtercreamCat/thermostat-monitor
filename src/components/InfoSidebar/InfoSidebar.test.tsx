import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import InfoSidebar from "./InfoSidebar";

let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

beforeEach(() => {
  wrapper = shallow(<InfoSidebar id="101" url="/unit/101"></InfoSidebar>);
});

test("should render InfoSidebar correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should display correct unit number", () => {
  expect(wrapper.find(".unitInfo_sidebar_header_title").text()).toBe(
    "Unit 101"
  );
});

test("should highlight button on click", () => {
  wrapper
    .find(".button-rect-withIcon")
    .at(0)
    .simulate("click");
  expect(
    wrapper
      .find(".button-rect-withIcon")
      .at(0)
      .hasClass("button button-rect-withIcon button-active")
  ).toBe(true);
});

test("should change state on click", () => {
  wrapper
    .find(".button-rect-withIcon")
    .at(0)
    .simulate("click");
  expect(wrapper.state("section")).toBe("Thermostat");
  wrapper
    .find(".button-rect-withIcon")
    .at(1)
    .simulate("click");
  expect(wrapper.state("section")).toBe("Chart");
});
