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

import StyledTypography from "./typographyStyled";
import getMainTheme from "../../../theme";

const defaultProps = {
  fontSize: 14,
  lineheight: 24,
  margin: "8px 0 0 0",
  colortheme: "mineShaft",
  fontWeight: "regular",
  align: "right",
  display: "block",
};

const theme = getMainTheme();

describe("StyledTypography", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(
      <StyledTypography theme={theme} {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
