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
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import ProductDetailsPage from "./productDetailsPage";
import ProductDetailsContainer from "./productDetailsContainer";
import DescriptionSkeleton from "./productDescriptionSkeleton";
import VariantSelectorSkeleton from "./ProductVariantSelectorSkeleton";
import getMainTheme from "../../theme";

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

ReduxProvider.propTypes = {
  children: PropTypes.element,
  reduxStore: PropTypes.shape({}),
};

const theme = getMainTheme();

describe("ProductDetailsPage", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <ProductDetailsPage />
      </ReduxProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe("ProductDetailsContainer", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<ProductDetailsContainer theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("DescriptionSkeleton", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <DescriptionSkeleton />
      </ReduxProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe("VariantSelectorSkeleton", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <VariantSelectorSkeleton isBundle />
      </ReduxProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
