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

import types from "store/actionsTypes/productActionsTypes";
import { handleActions } from "redux-actions";
import { formatProductDetails } from "./helpers";

export const initialState = {
  id: "",
  isLoading: false,
  name: "",
  type: "",
  price: null,
  slider: [],
  variation: [],
  description: "",
  rating: null,
  availabilityMsg: "",
  individualProducts: [],
  bundledProducts: [],
  readyToOrder: false,
  available: false,
  quantities: [],
  quantitiesAreLoading: false,
  details: "",
  attributes: [],
};

const productReducer = handleActions(
  {
    [types.GET_PRODUCT_BY_ID]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [types.GET_PRODUCT_VARIATION]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [types.GET_PRODUCT_BY_ID_SUCCESS]: (state, { productInfo }) => {
      return {
        ...state,
        ...formatProductDetails(productInfo.product),
        resources: productInfo.resources,
        isLoading: false,
      };
    },
    [types.GET_PRODUCT_BY_ID_FAIL]: () => ({
      ...initialState,
      isLoading: false,
    }),

    [types.UPDATE_PRODUCT_QUANTITY]: (state) => ({
      ...state,
      quantitiesAreLoading: true,
    }),

    [types.UPDATE_PRODUCT_QUANTITY_SUCCESS]: (state, { product }) => ({
      ...state,
      ...formatProductDetails(product),
      quantitiesAreLoading: false,
    }),

    [types.UPDATE_PRODUCT_QUANTITY_FAIL]: (state) => ({
      ...state,
      quantitiesAreLoading: false,
    }),
  },
  initialState
);

export default productReducer;
