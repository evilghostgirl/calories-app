import React from "react";
import Enzyme from "enzyme";
import { mount, shallow } from "enzyme";
import AddDish from "./AddDish";
import "../../setupTests";

describe("<AddDish />", () => {
  const wrapper = mount(<AddDish />);

  it("value should be number", () => {
    wrapper.find("input").simulate("change", { target: { value: 5 } });
    expect(typeof wrapper.find("input").prop("value")).toBe("number");
  });

  it("should check if input value is greater than 5", () => {
    wrapper.find("input").simulate("change", { target: { value: 6 } });

    expect(wrapper.find("input").prop("value")).toBeGreaterThan(5);
  });

  //https://www.codota.com/code/javascript/functions/enzyme/ShallowWrapper/simulate
});
