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
import { storiesOf } from "@storybook/react";

import WrapperStyled from "./commonStyles";
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

const theme = {
  colors: {
    mineShaft: "#222222",
    iron: "#D9DCDD",
  },
};

storiesOf("Filters", module)
  .addDecorator((story) => (
    <div style={{ margin: "20px", width: "900px" }}>{story()}</div>
  ))
  .add("Brand Filter", () => (
    <>
      <BrandFilter {...defaultProps} />
      <BrandFilter {...defaultProps} selected="true" />
    </>
  ))
  .add("Size Filter", () => (
    <>
      <WrapperStyled selected="false" theme={theme}>
        <SizeFilter {...defaultProps} displayValue="XS" id="size" />
      </WrapperStyled>
      <WrapperStyled selected="true" theme={theme}>
        <SizeFilter
          {...defaultProps}
          displayValue="XS"
          id="size"
          selected="true"
        />
      </WrapperStyled>
    </>
  ))
  .add("Price Filter", () => (
    <>
      <PriceFilter {...defaultProps} displayValue="$0 - $19.99" id="price" />
      <PriceFilter
        {...defaultProps}
        displayValue="$0 - $19.99"
        id="price"
        selected="true"
      />
    </>
  ))
  .add("Color Filter", () => (
    <>
      <WrapperStyled selected="false" theme={theme}>
        <ColorFilter
          {...defaultProps}
          displayValue="green"
          id="refinementColor"
        />
      </WrapperStyled>
      <WrapperStyled selected="true" theme={theme}>
        <ColorFilter
          {...defaultProps}
          displayValue="green"
          id="refinementColor"
          selected="true"
        />
      </WrapperStyled>
    </>
  ));
