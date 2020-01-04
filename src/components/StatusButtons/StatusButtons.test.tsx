import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import StatusButtons from "./StatusButtons";

let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
const handleClickSpy = jest.fn();

beforeEach(() => {
  wrapper = shallow(
    <StatusButtons handleClick={handleClickSpy} status="Off" />
  );
});

test("should render StatusButtons correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should button has correct class name", () => {
  expect(
    wrapper
      .find("button")
      .at(4)
      .hasClass("button button-square-withIcon button-active")
  ).toBe(true);
});

test("should call handleClick prop when click the button", () => {
  wrapper
    .find("button")
    .at(0)
    .simulate("click");
  expect(handleClickSpy).toHaveBeenLastCalledWith("Cool");
});
