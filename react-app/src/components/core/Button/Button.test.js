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
import Button from ".";
import getMainTheme from "../../../theme";

const defaultProps = {
  plain: true,
  isIconOnly: true,
};

const theme = getMainTheme();

describe("Button", () => {
  const wrapped = shallow(<Button />);
  it("should match snapshot", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("Button link", () => {
  const wrapped = shallow(
    <Button theme={theme} {...defaultProps} size="lg" variant="link" />
  );
  it("should match snapshot", () => {
    expect(wrapped.dive()).toMatchSnapshot();
  });
});

describe("Button secondary", () => {
  const wrapped = shallow(
    <Button theme={theme} {...defaultProps} size="lg" variant="secondary" />
  );
  it("should match snapshot", () => {
    expect(wrapped.dive()).toMatchSnapshot();
  });
});
