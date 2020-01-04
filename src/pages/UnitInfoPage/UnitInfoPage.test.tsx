import React from "react";
import { shallow } from "enzyme";
import UnitInfoPage from "./UnitInfoPage";
import { createMemoryHistory, createLocation } from "history";
import { match as routerMatch } from "react-router";

const history = createMemoryHistory();
const path = "/unit/:id";

const match: routerMatch<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(":id", "110"),
  params: { id: "110" }
};

const location = createLocation(match.url);

test("should render UnitInfoPage correctly", () => {
  const wrapper = shallow(
    <UnitInfoPage
      history={history}
      location={location}
      match={match}
    ></UnitInfoPage>
  );
  expect(wrapper).toMatchSnapshot();
});
