/*
 * Copyright 2020 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { shallow } from "enzyme";
import Select from ".";
import {
  StyledFormControl,
  StyledSelect,
  StyledSelectWrapper,
  StyledErrorMsg,
} from "./selectStyled";
import getMainTheme from "../../../theme";

const defaultProps = {
  values: [
    {
      ID: "001",
      default: true,
      description: "Order received within 7-10 business days",
      displayName: "Ground",
      displayValue: "Ground (7-10 Business Days)",
      estimatedArrivalTime: "7-10 Business Days",
      selected: true,
      shippingCost: "$7.99",
    },
    {
      ID: "002",
      default: false,
      description: "Order received in 2 business days",
      displayName: "2-Day Express",
      displayValue: "2-Day Express (2 Business Days)",
      estimatedArrivalTime: "2 Business Days",
      selected: false,
      shippingCost: "$11.99",
    },
  ],
  iconisrotated: false,
  margin: "16px 0px 0px 0px",
  fullWidth: true,
};

const theme = getMainTheme();

describe("ArrowIcon", () => {
  const wrapped = shallow(<Select {...defaultProps} />);
  it("should match snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("StyledSelect", () => {
  const wrapped = shallow(<StyledSelect {...defaultProps} theme={theme} />);
  it("should match snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("StyledFormControl", () => {
  const wrapped = shallow(<StyledFormControl theme={theme} />);
  it("should match snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("StyledErrorMsg", () => {
  const wrapped = shallow(<StyledErrorMsg theme={theme} />);
  it("should match snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("StyledSelectWrapper", () => {
  const wrapped = shallow(
    <StyledSelectWrapper theme={theme} {...defaultProps} />
  );
  it("should match snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
