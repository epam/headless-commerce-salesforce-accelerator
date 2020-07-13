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

import SearchResultsLabel from "./searchResultsLabel";
import ProductsPage from "./productsPage";

import {
  StyledSearchResultsLabel,
  StyledSearchQuery,
  StyledSearchAmount,
} from "./searchResultsLabelStyled";
import StyledSearchResults from "./searchResultsStyled";
import getMainTheme from "../../theme";

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

ReduxProvider.propTypes = {
  children: PropTypes.element,
  reduxStore: PropTypes.shape({}),
};

const theme = getMainTheme();

describe("SearchResultsLabel", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<SearchResultsLabel query="Bags" amount={158} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("ProductsPage", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <ProductsPage />
      </ReduxProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledSearchResultsLabel", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<StyledSearchResultsLabel theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledSearchQuery", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<StyledSearchQuery theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledSearchAmount", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<StyledSearchAmount theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledSearchResults", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<StyledSearchResults theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });
});
