import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders correct html with type and value", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain(
      '<li data-notification-type="default">test</li>'
    );
  });

  it("renders correct html with html prop", () => {
    const html = { __html: "<u>test</u>" };
    const wrapper = shallow(<NotificationItem type="default" html={html} />);
    expect(wrapper.html()).toContain(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});
