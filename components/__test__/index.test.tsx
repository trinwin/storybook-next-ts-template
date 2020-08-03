import React from "react";
import { mount } from "enzyme";
import Home from "../../pages/index";
describe("Pages", () => {
  describe("Home", () => {
    it("should render without throwing an error", function () {
      const wrap = mount(<Home />);
      expect(wrap.find("h1").text()).toBe("Welcome to My Next App!");
    });
  });
});
