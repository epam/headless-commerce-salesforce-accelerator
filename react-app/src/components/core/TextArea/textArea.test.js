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
import TextArea from ".";
import { StyledTextAreaLabel, StyledTextarea } from "./textAreaStyled";
import getMainTheme from "../../../theme";

const defaultProps = {
  name: "name",
  id: "noter-text-area",
  minLength: 5,
  maxLength: 55,
  placeholder: "",
  label: "label",
  register: () => null,
  defaultValue: "some value",
};

const theme = getMainTheme();

describe("TextArea", () => {
  const numericInput = shallow(<TextArea {...defaultProps} />);
  it("should match snapshot", () => {
    expect(numericInput).toMatchSnapshot();
  });
});

describe("StyledTextAreaLabel", () => {
  const textInput = shallow(<StyledTextAreaLabel theme={theme} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledTextarea", () => {
  const textInput = shallow(<StyledTextarea theme={theme} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});
