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

import { createStore } from "redux";

import productMocked from "components/ProductDetails/__mocks__/productMocked";
import reducer, { initialState } from "./reducer";
import actions from "../../actions/product/actions";

import productTypes from "./constants";

const { product, productVariant, resources } = productMocked;

const productInfo = {
  id: product.id,
  rating: product.rating,
  readyToOrder: product.readyToOrder,
  available: product.available,
  name: product.productName,
  type: productTypes.STANDARD,
  slider: product.images.large,
  variation: product.variationAttributes,
  description: product.shortDescription,
  availabilityMsg: product.availability.messages.join(". "),
  price: product.price,
  quantities: product.quantities,
  details: product.longDescription,
  attributes: product.attributes,
};

const productVariantInfo = {
  id: productVariant.id,
  rating: productVariant.rating,
  readyToOrder: productVariant.readyToOrder,
  available: productVariant.available,
  name: productVariant.productName,
  type: productTypes.STANDARD,
  slider: productVariant.images.large,
  variation: productVariant.variationAttributes,
  description: productVariant.shortDescription,
  availabilityMsg: productVariant.availability.messages.join(". "),
  price: productVariant.price,
  quantities: productVariant.quantities,
  details: productVariant.longDescription,
  attributes: productVariant.attributes,
};

describe("productsReducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("is expected to have initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("is expected to handle GET_PRODUCT_BY_ID", () => {
    store.dispatch(actions.getProductById("25502108M"));

    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle GET_PRODUCT_BY_ID_SUCCESS", () => {
    const expectedState = {
      ...initialState,
      ...productInfo,
      resources,
    };

    store.dispatch(actions.getProductByIdSuccess(productMocked));

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle GET_PRODUCT_BY_ID_FAIL", () => {
    store.dispatch(actions.getProductByIdFail());

    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle GET_PRODUCT_VARIATION", () => {
    store.dispatch(
      actions.getProductById(
        "https:/test/Product-Variation?dwvar_25519274M_size=9SM&pid=25519274M&quantity=1"
      )
    );

    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle UPDATE_PRODUCT_QUANTITY", () => {
    store.dispatch(
      actions.updateProductQuantity(
        "test/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=1"
      )
    );

    const expectedState = {
      ...initialState,
      quantitiesAreLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle UPDATE_PRODUCT_QUANTITY_SUCCESS", () => {
    store.dispatch(actions.updateProductQuantitySuccess(productVariant));

    const expectedState = {
      ...initialState,
      ...productVariantInfo,
      quantitiesAreLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle UPDATE_PRODUCT_QUANTITY_FAIL", () => {
    store.dispatch(actions.updateProductQuantityFail());

    const expectedState = {
      ...initialState,
      quantitiesAreLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
