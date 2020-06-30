import React from "react";
import { shallow } from "enzyme";
import Notification from ".";

describe("Notification", () => {
  describe("when it`s error type", () => {
    it("should match snapshot", () => {
      const notification = shallow(
        <Notification type="error" heading="It`s error" />
      );
      expect(notification).toMatchSnapshot();
    });
  });
  describe("when it`s info type", () => {
    it("should match snapshot", () => {
      const notification = shallow(
        <Notification type="info" heading="Please note" />
      );
      expect(notification).toMatchSnapshot();
    });
  });
  describe("when it`s warning type", () => {
    it("should match snapshot", () => {
      const notification = shallow(
        <Notification type="warning" heading="Attention" />
      );
      expect(notification).toMatchSnapshot();
    });
  });
  describe("when it`s success type", () => {
    it("should match snapshot", () => {
      const notification = shallow(
        <Notification type="success" heading="Wow, it`s fine" />
      );
      expect(notification).toMatchSnapshot();
    });
  });
});
