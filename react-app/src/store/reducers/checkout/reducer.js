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

import { handleActions } from "redux-actions";
import types from "../../actionsTypes/checkoutActionsTypes";
import constants from "./constants";
import {
  formatCheckoutData,
  formatShippingData,
  createShippingData,
  createBillingData,
} from "./helpers";

export const initialState = {
  currentStage: null,
  token: null,
  order: null,
  customer: null,
  forms: null,
  expirationYears: constants.EXPIRATION_YEARS,
  isLoading: false,
  shippingData: {},
  error: [],
};

const checkoutReducer = handleActions(
  {
    [types.CHECKOUT_BEGIN]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [types.CHECKOUT_BEGIN__SUCCESS]: (state, { data }) => {
      const { giftMessage } = state.shippingData;

      return {
        ...state,
        ...formatCheckoutData(data),
        ...formatShippingData(data, giftMessage),
        billingData:
          createBillingData(
            data?.order?.billing?.billingAddress,
            data?.order?.orderEmail
          ) || {},
        isLoading: false,
      };
    },
    [types.CHECKOUT_BEGIN__FAIL]: () => ({
      ...initialState,
      isLoading: false,
    }),
    [types.GO_TO_STAGE]: (state, { stage }) => ({
      ...state,
      currentStage: stage,
    }),
    [types.UPDATE_SHIPPING_METHODS_LIST__SUCCESS]: (state, { data }) => {
      const { order, customer } = data;
      return {
        ...state,
        order,
        customer,
        shipments: order.shipping[0],
        isLoading: false,
      };
    },
    [types.CHECKOUT_SELECT_SHIPPING_METHOD]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [types.CHECKOUT_SELECT_SHIPPING_METHOD_SUCCESS]: (state, { data }) => ({
      ...state,
      ...formatShippingData(data),
      isLoading: false,
    }),
    [types.SUBMIT_SHIPPING]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [types.SUBMIT_SHIPPING__SUCCESS]: (state, { data }) => ({
      ...state,
      order: data?.order,
      customer: data?.customer,
      shipments: data?.order?.shipping[0],
      shippingData: createShippingData(data),
      shippingForm: data?.form,
      isLoading: false,
      currentStage: constants.PAYMENT,
      error: [],
    }),

    [types.SUBMIT_SHIPPING__FAIL]: (state, { data }) => ({
      ...state,
      isLoading: false,
      error: data.fieldErrors,
      shippingForm: { ...data.form },
    }),
    [types.SUBMIT_PAYMENT]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [types.SUBMIT_PAYMENT__SUCCESS]: (state, { data }) => ({
      ...state,
      order: data?.order || state.order,
      customer: data?.customer,
      shipments: data?.order?.shipping[0],
      billingData: createBillingData(data),
      isLoading: false,
      currentStage: constants.PLACE_ORDER,
      billingForm: data?.form,
      error: [],
    }),
    [types.SUBMIT_PAYMENT__FAIL]: (state, { data }) => ({
      ...state,
      isLoading: false,
      error: data.fieldErrors,
      billingForm: data?.form,
    }),
    [types.PLACE_ORDER]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [types.PLACE_ORDER__SUCCESS]: (state, { data }) => ({
      ...state,
      currentStage: constants.ORDER_CONFIRM,
      orderID: data.orderID,
    }),
    [types.PLACE_ORDER__FAIL]: (state, { data }) => ({
      ...state,
      isLoading: false,
      data,
    }),
  },
  initialState
);

export default checkoutReducer;
