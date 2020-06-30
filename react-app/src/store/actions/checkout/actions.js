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

import types from "../../actionsTypes/checkoutActionsTypes";

const actions = {
  checkoutBegin: (stage) => ({
    type: types.CHECKOUT_BEGIN,
    stage,
  }),
  checkoutBeginSuccess: (data) => ({
    type: types.CHECKOUT_BEGIN__SUCCESS,
    data,
  }),
  checkoutBeginFail: () => ({
    type: types.CHECKOUT_BEGIN__FAIL,
  }),
  goToStage: (stage) => ({
    type: types.GO_TO_STAGE,
    stage,
  }),
  updateShippingMethodsList: (data) => ({
    type: types.UPDATE_SHIPPING_METHODS_LIST,
    data,
  }),
  updateShippingMethodsListSuccess: (data) => ({
    type: types.UPDATE_SHIPPING_METHODS_LIST__SUCCESS,
    data,
  }),
  updateShippingMethodsListFail: () => ({
    type: types.UPDATE_SHIPPING_METHODS_LIST__FAIL,
  }),
  selectCheckoutShippingMethod: (methodId, shipmentUUID) => ({
    type: types.CHECKOUT_SELECT_SHIPPING_METHOD,
    methodId,
    shipmentUUID,
  }),
  selectCheckoutShippingMethodSuccess: (data) => ({
    type: types.CHECKOUT_SELECT_SHIPPING_METHOD_SUCCESS,
    data,
  }),
  selectCheckoutShippingMethodFail: () => ({
    type: types.CHECKOUT_SELECT_SHIPPING_METHOD_FAIL,
  }),
  submitShipping: (requestData, history) => ({
    type: types.SUBMIT_SHIPPING,
    requestData,
    history,
  }),
  submitShippingSuccess: (data) => ({
    type: types.SUBMIT_SHIPPING__SUCCESS,
    data,
  }),
  submitShippingFail: (data) => ({
    type: types.SUBMIT_SHIPPING__FAIL,
    data,
  }),
  submitBilling: (requestData, history) => ({
    type: types.SUBMIT_PAYMENT,
    requestData,
    history,
  }),
  submitBillingSuccess: (data) => ({
    type: types.SUBMIT_PAYMENT__SUCCESS,
    data,
  }),
  submitBillingFail: (data) => ({
    type: types.SUBMIT_PAYMENT__FAIL,
    data,
  }),
  placeOrder: () => ({
    type: types.PLACE_ORDER,
  }),
  placeOrderSuccess: (data) => ({
    type: types.PLACE_ORDER__SUCCESS,
    data,
  }),
  placeOrderFail: (data) => ({
    type: types.PLACE_ORDER__FAIL,
    data,
  }),
};

export default actions;
