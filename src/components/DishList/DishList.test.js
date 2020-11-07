import React from "react";
import Enzyme from "enzyme";
import DishList from "./DishList";
import { mount, shallow } from "enzyme";
import "../../setupTests";

describe("<AddDish />", () => {
  const wrapper = mount(<DishList />);

  it("data should be listed", () => {
    expect(typeof wrapper.find("input").prop("value")).toBe("number");
  });

  it("should get server message after user clicks the button", async () => {
    const wrapper = mount(<GetServerMessage />);
    const button = wrapper.find("button");
    axios.get.mockResolvedValue({ data: { hello: "testing" } });

    button.simulate("click");
    await wait();

    const p = wrapper.find("p");
    expect(p).toHaveText("Server Message: hello testing");
  });

  //https://www.codota.com/code/javascript/functions/enzyme/ShallowWrapper/simulate
});
