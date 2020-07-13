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
import SelectMinMax from ".";
import { StyledFormControl, StyledSelect } from "./selectMinMaxStyled";

import getMainTheme from "../../../theme";

const defaultProps = {
  iconisrotated: true,
  min: 1,
  max: 10,
};

const theme = getMainTheme();

describe("SelectMinMax", () => {
  const wrapped = shallow(<SelectMinMax {...defaultProps} />);
  it("should match snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("SelectMinMax", () => {
  const wrapped = shallow(<SelectMinMax theme={theme} {...defaultProps} />);
  it("should match snapshot", () => {
    expect(wrapped.dive()).toMatchSnapshot();
  });
});

describe("StyledFormControl", () => {
  const wrapped = shallow(<StyledFormControl theme={theme} />);
  it("should match snapshot", () => {
    expect(wrapped.dive()).toMatchSnapshot();
  });
});

describe("StyledSelect", () => {
  const wrapped = shallow(<StyledSelect theme={theme} />);
  it("should match snapshot", () => {
    expect(wrapped.dive()).toMatchSnapshot();
  });
});
