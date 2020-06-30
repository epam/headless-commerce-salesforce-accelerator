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
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";

import ThemeProvider from "../../globalThemeProvider";

import ProductItem from "./productItem";

const variation = [
  {
    displayName: "Color",
    displayValue: "Silver Ox",
    attributeId: "color",
    id: "color",
  },
];

const store = createStore(() => ({}));

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

ReduxProvider.propTypes = {
  children: PropTypes.element,
  reduxStore: PropTypes.shape({}),
};

storiesOf("Product Item", module)
  .addDecorator((story) => (
    <ThemeProvider>
      <ReduxProvider reduxStore={store}>
        <Router>{story()}</Router>
      </ReduxProvider>
    </ThemeProvider>
  ))
  .add("product item basket", () => (
    <div style={{ margin: "20px", width: "760px" }}>
      <ProductItem
        productName="Top Pop Dress"
        availability="In Stock"
        price={{
          sales: {
            value: 36,
            currency: "USD",
            formatted: "$36.00",
            decimalPrice: "36.00",
          },
          list: null,
        }}
        banner="https://epamsystems02-alliance-prtnr-eu10-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8b36de24/images/medium/PG.60119277.JJG03XX.PZ.jpg"
        quantity={1}
        totalPrice="459$"
        type="master"
        maxQuantityAvailable={4}
        variation={variation}
      />
    </div>
  ))
  .add("product item mini cart", () => (
    <div style={{ margin: "20px", width: "344px" }}>
      <ProductItem
        productName="Top Pop Dress"
        price={{
          sales: {
            value: 36,
            currency: "USD",
            formatted: "$36.00",
            decimalPrice: "36.00",
          },
          list: null,
        }}
        banner="https://epamsystems02-alliance-prtnr-eu10-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8b36de24/images/medium/PG.60119277.JJG03XX.PZ.jpg"
        quantity={1}
        type="master"
        isPreview
      />
    </div>
  ))
  .add("product item checkout preview", () => (
    <div style={{ margin: "20px", width: "344px" }}>
      <ProductItem
        productName="Top Pop Dress"
        price={{
          sales: {
            value: 36,
            currency: "USD",
            formatted: "$36.00",
            decimalPrice: "36.00",
          },
          list: null,
        }}
        banner="https://epamsystems02-alliance-prtnr-eu10-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8b36de24/images/medium/PG.60119277.JJG03XX.PZ.jpg"
        quantity={1}
        type="master"
        isPreview
        isInOrder
      />
    </div>
  ));
