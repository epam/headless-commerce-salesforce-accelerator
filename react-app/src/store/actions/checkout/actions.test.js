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

import configureStore from "redux-mock-store";

import actions from "./actions";
import types from "../../actionsTypes/checkoutActionsTypes";

describe("checkout actions", () => {
  const store = configureStore([])({});

  afterEach(() => {
    store.clearActions();
  });

  describe("checkoutBegin", () => {
    it("is expected to create CHECKOUT_BEGIN action", () => {
      const expectedActions = [{ type: types.CHECKOUT_BEGIN }];

      store.dispatch(actions.checkoutBegin());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("checkoutBeginSuccess", () => {
    it("is expected to create CHECKOUT_BEGIN__SUCCESS action", () => {
      const expectedActions = [
        { type: types.CHECKOUT_BEGIN__SUCCESS, data: {} },
      ];

      store.dispatch(actions.checkoutBeginSuccess({}));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("checkoutBeginFail", () => {
    it("is expected to create CHECKOUT_BEGIN__FAIL action", () => {
      const expectedActions = [{ type: types.CHECKOUT_BEGIN__FAIL }];

      store.dispatch(actions.checkoutBeginFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("goToStage", () => {
    it("is expected to create GO_TO_STAGE action", () => {
      const expectedActions = [{ type: types.GO_TO_STAGE, stage: "PAYMENT" }];

      store.dispatch(actions.goToStage("PAYMENT"));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateShippingMethodsList", () => {
    it("is expected to create UPDATE_SHIPPING_METHODS_LIST action", () => {
      const data = {};
      const expectedActions = [
        { type: types.UPDATE_SHIPPING_METHODS_LIST, data },
      ];

      store.dispatch(actions.updateShippingMethodsList(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateShippingMethodsListSuccess", () => {
    it("is expected to create UPDATE_SHIPPING_METHODS_LIST__SUCCESS action", () => {
      const data = {};
      const expectedActions = [
        { type: types.UPDATE_SHIPPING_METHODS_LIST__SUCCESS, data },
      ];

      store.dispatch(actions.updateShippingMethodsListSuccess(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateShippingMethodsListFail", () => {
    it("is expected to create UPDATE_SHIPPING_METHODS_LIST__FAIL action", () => {
      const expectedActions = [
        { type: types.UPDATE_SHIPPING_METHODS_LIST__FAIL },
      ];

      store.dispatch(actions.updateShippingMethodsListFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("selectCheckoutShippingMethod", () => {
    it("is expected to create CHECKOUT_SELECT_SHIPPING_METHOD action", () => {
      const methodId = "002";
      const shipmentUUID = "2336506e61315f4cf2d508479c";
      const expectedActions = [
        { type: types.CHECKOUT_SELECT_SHIPPING_METHOD, methodId, shipmentUUID },
      ];

      store.dispatch(
        actions.selectCheckoutShippingMethod(methodId, shipmentUUID)
      );
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("selectCheckoutShippingMethodSuccess", () => {
    it("is expected to create CHECKOUT_SELECT_SHIPPING_METHOD_SUCCESS action", () => {
      const data = {};
      const expectedActions = [
        { type: types.CHECKOUT_SELECT_SHIPPING_METHOD_SUCCESS, data },
      ];

      store.dispatch(actions.selectCheckoutShippingMethodSuccess(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("selectCheckoutShippingMethodFail", () => {
    it("is expected to create CHECKOUT_SELECT_SHIPPING_METHOD_FAIL action", () => {
      const expectedActions = [
        { type: types.CHECKOUT_SELECT_SHIPPING_METHOD_FAIL },
      ];

      store.dispatch(actions.selectCheckoutShippingMethodFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("submitShipping", () => {
    it("is expected to create SUBMIT_SHIPPING action", () => {
      const requestData = {
        csrf_token: "2336506e61315f4cf2d508479c",
        shipmentUUID: "0888eevde4",
        originalShipmentUUID: "1234567890f",
        shipmentSelector: "new",
      };
      const history = "checkout?stage=shipping";
      const expectedActions = [
        { type: types.SUBMIT_SHIPPING, requestData, history },
      ];

      store.dispatch(actions.submitShipping(requestData, history));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("submitShippingSuccess", () => {
    it("is expected to create SUBMIT_SHIPPING__SUCCESS action", () => {
      const data = {};
      const expectedActions = [{ type: types.SUBMIT_SHIPPING__SUCCESS, data }];

      store.dispatch(actions.submitShippingSuccess(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("submitShippingFail", () => {
    it("is expected to create SUBMIT_SHIPPING__FAIL action", () => {
      const data = {};
      const expectedActions = [{ type: types.SUBMIT_SHIPPING__FAIL, data }];

      store.dispatch(actions.submitShippingFail(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("submitBilling", () => {
    it("is expected to create SUBMIT_PAYMENT action", () => {
      const requestData = {
        csrf_token: "2336506e61315f4cf2d508479c",
        shipmentUUID: "0888eevde4",
        originalShipmentUUID: "1234567890f",
        shipmentSelector: "new",
      };
      const history = "checkout?stage=shipping";
      const expectedActions = [
        { type: types.SUBMIT_PAYMENT, requestData, history },
      ];

      store.dispatch(actions.submitBilling(requestData, history));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("submitBillingSuccess", () => {
    it("is expected to create SUBMIT_PAYMENT__SUCCESS action", () => {
      const data = {};
      const expectedActions = [{ type: types.SUBMIT_PAYMENT__SUCCESS, data }];

      store.dispatch(actions.submitBillingSuccess(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("submitBillingFail", () => {
    it("is expected to create SUBMIT_PAYMENT__FAIL action", () => {
      const data = {};
      const expectedActions = [{ type: types.SUBMIT_PAYMENT__FAIL, data }];

      store.dispatch(actions.submitBillingFail(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("placeOrder", () => {
    it("is expected to create PLACE_ORDER action", () => {
      const expectedActions = [{ type: types.PLACE_ORDER }];

      store.dispatch(actions.placeOrder());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("placeOrderSuccess", () => {
    it("is expected to create PLACE_ORDER__SUCCESS action", () => {
      const data = {};
      const expectedActions = [{ type: types.PLACE_ORDER__SUCCESS, data }];

      store.dispatch(actions.placeOrderSuccess(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("placeOrderFail", () => {
    it("is expected to create PLACE_ORDER__FAIL action", () => {
      const data = {};
      const expectedActions = [{ type: types.PLACE_ORDER__FAIL, data }];

      store.dispatch(actions.placeOrderFail(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
