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

import BrandFilter from "./brandFilter";
import PriceFilter from "./priceFilter";
import ColorFilter from "./colorsFilter";
import SizeFilter from "./sizeFilter";

const defaultProps = {
  displayValue: "Brand",
  handleChange: () => null,
  selected: false,
  id: "brand",
};

describe("BrandFilter", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(<BrandFilter {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("PriceFilter", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(
      <PriceFilter {...defaultProps} displayValue="Price" id="price" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe("ColorFilter", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(
      <ColorFilter
        {...defaultProps}
        displayValue="Colors"
        id="refinementColor"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe("SizeFilter", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(
      <SizeFilter {...defaultProps} displayValue="Size" id="size" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
