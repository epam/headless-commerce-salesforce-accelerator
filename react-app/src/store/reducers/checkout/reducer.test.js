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
import checkoutMocked from "components/Checkout/__mocks__/checkoutMocked";
import reducer, { initialState } from "./reducer";
import actions from "../../actions/checkout/actions";
import constants from "./constants";
import {
  formatCheckoutData,
  formatShippingData,
  createShippingData,
  createBillingData,
} from "./helpers";

describe("productsReducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("is expected to have initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("is expected to handle CHECKOUT_BEGIN", () => {
    store.dispatch(actions.checkoutBegin());

    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle CHECKOUT_BEGIN__SUCCESS", () => {
    store.dispatch(actions.checkoutBeginSuccess(checkoutMocked));

    const expectedState = {
      ...formatCheckoutData(checkoutMocked),
      billingData: {
        email: null,
      },
      error: [],
      forms: null,
      shippingData: {
        giftMessage: {},
      },
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle CHECKOUT_BEGIN__FAIL", () => {
    store.dispatch(actions.checkoutBeginFail());

    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle GO_TO_STAGE", () => {
    store.dispatch(actions.goToStage("PAYMENT"));

    const expectedState = {
      ...initialState,
      currentStage: "PAYMENT",
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle UPDATE_SHIPPING_METHODS_LIST__SUCCESS", () => {
    store.dispatch(actions.updateShippingMethodsListSuccess(checkoutMocked));
    const { customer, order } = checkoutMocked;
    const expectedState = {
      ...initialState,
      order,
      customer,
      shipments: order.shipping[0],
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle CHECKOUT_SELECT_SHIPPING_METHOD", () => {
    store.dispatch(actions.selectCheckoutShippingMethod());

    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle CHECKOUT_SELECT_SHIPPING_METHOD_SUCCESS", () => {
    store.dispatch(actions.selectCheckoutShippingMethodSuccess(checkoutMocked));
    const expectedState = {
      ...initialState,
      ...formatShippingData(checkoutMocked),
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle SUBMIT_SHIPPING", () => {
    store.dispatch(actions.submitShipping());
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle SUBMIT_SHIPPING__SUCCESS", () => {
    store.dispatch(actions.submitShippingSuccess(checkoutMocked));
    const expectedState = {
      ...initialState,
      order: checkoutMocked?.order,
      customer: checkoutMocked?.customer,
      shipments: checkoutMocked?.order?.shipping[0],
      shippingData: createShippingData(checkoutMocked),
      shippingForm: checkoutMocked?.form,
      isLoading: false,
      currentStage: constants.PAYMENT,
      error: [],
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle SUBMIT_SHIPPING__FAIL", () => {
    store.dispatch(actions.submitShippingFail(checkoutMocked));
    const expectedState = {
      ...initialState,
      isLoading: false,
      error: checkoutMocked?.fieldErrors,
      shippingForm: {},
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle SUBMIT_PAYMENT", () => {
    store.dispatch(actions.submitBilling());
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle SUBMIT_PAYMENT__SUCCESS", () => {
    store.dispatch(actions.submitBillingSuccess(checkoutMocked));
    const expectedState = {
      ...initialState,
      order: checkoutMocked?.order,
      customer: checkoutMocked?.customer,
      shipments: checkoutMocked?.order?.shipping[0],
      billingData: createBillingData(checkoutMocked),
      isLoading: false,
      currentStage: constants.PLACE_ORDER,
      billingForm: checkoutMocked?.form,
      error: [],
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle SUBMIT_PAYMENT__FAIL", () => {
    store.dispatch(actions.submitBillingFail(checkoutMocked));
    const expectedState = {
      ...initialState,
      isLoading: false,
      error: checkoutMocked.fieldErrors,
      billingForm: checkoutMocked?.form,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle PLACE_ORDER", () => {
    store.dispatch(actions.placeOrder());
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle PLACE_ORDER__SUCCESS", () => {
    store.dispatch(actions.placeOrderSuccess(checkoutMocked));
    const expectedState = {
      ...initialState,
      currentStage: constants.ORDER_CONFIRM,
      orderID: checkoutMocked.orderID,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle PLACE_ORDER__FAIL", () => {
    store.dispatch(actions.placeOrderFail(checkoutMocked));
    const expectedState = {
      ...initialState,
      isLoading: false,
      data: checkoutMocked,
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
