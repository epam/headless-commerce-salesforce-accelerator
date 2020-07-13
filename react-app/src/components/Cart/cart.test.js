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

import CartValidationMsg from "./CartValidationMsg";
import EditProductDialog from "./EditProductDialog";
import RemoveProductDialog from "./RemoveProductDialog";
import ShippingMethods from "./ShippingMethods";

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

ReduxProvider.propTypes = {
  children: PropTypes.element,
  reduxStore: PropTypes.shape({}),
};

describe("CartValidationMsg", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <CartValidationMsg />
      </ReduxProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("EditProductDialog", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(<EditProductDialog />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("RemoveProductDialog", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <RemoveProductDialog />
      </ReduxProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("ShippingMethods", () => {
  it("it should match snapshot", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <ShippingMethods />
      </ReduxProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
