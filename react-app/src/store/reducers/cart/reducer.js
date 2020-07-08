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

import types from "store/actionsTypes/cartActionsTypes";
import { handleActions } from "redux-actions";
import getCartData from "./helpers";
import showNotification from "../../helpers";

export const initialState = {
  totals: {},
  shipments: {},
  items: [],
  numOfShipments: 0,
  numItems: 0,
  hasBonusProduct: false,
  approachingDiscounts: [],
  variation: [],
  shipmentUUID: "",
  isLoading: false,
};

const cartReducer = handleActions(
  {
    [types.GET_CART_DATA__SUCCESS]: (state, { data }) => {
      return {
        ...state,
        ...getCartData(data),
      };
    },

    [types.GET_CART_DATA__FAILURE]: (state) => {
      return state;
    },

    [types.ADD_PRODUCT_TO_CART_SUCCESS]: (state, { productName, data }) => {
      showNotification({
        type: "success",
        heading: "Success",
        content: `Item "${productName}" has been added to a Shopping Cart.`,
      });
      return {
        ...state,
        ...getCartData(data),
      };
    },

    [types.ADD_PRODUCT_TO_CART_FAIL]: (state, { data }) => {
      showNotification({
        type: "error",
        heading: "Error",
        content:
          data?.message || "Oops! Something went wrong with this product.",
      });

      return state;
    },

    [types.DELETE_PRODUCT_FROM_CART__SUCCESS]: (state, { data }) => {
      return {
        ...state,
        ...getCartData(data),
      };
    },

    [types.DELETE_PRODUCT_FROM_CART__FAILURE]: (state) => {
      return state;
    },

    [types.SELECT_SHIPPING_METHOD]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [types.UPDATE_PRODUCT_QUANTITY_SUCCESS]: (state, { data }) => {
      return {
        ...state,
        ...getCartData(data),
      };
    },

    [types.UPDATE_PRODUCT_QUANTITY_FROM_FAIL]: (state) => {
      return state;
    },
    PLACE_ORDER__SUCCESS: (state) => ({
      ...state,
      numItems: 0,
    }),
  },
  initialState
);

export default cartReducer;
