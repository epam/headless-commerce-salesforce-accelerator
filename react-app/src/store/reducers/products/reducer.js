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

import types from "store/actionsTypes/productsActionsTypes";
import { handleActions } from "redux-actions";
import { formatProductsInfo } from "./helpers";

export const initialState = {
  ids: [],
  isLoading: false,
  category: "",
  resultsCount: null,
  pageSize: null,
  pageNumber: null,
};

const productsReducer = handleActions(
  {
    [types.GET_PRODUCTS]: (state) => ({
      ...state,
      isLoading: true,
      ids: [],
    }),
    [types.GET_PRODUCTS_SUCCESS]: (state, { products }) => ({
      ...state,
      ...formatProductsInfo(products.productSearch),
      isLoading: false,
    }),
    [types.GET_PRODUCTS_FAIL]: () => ({
      ...initialState,
    }),
  },
  initialState
);

export default productsReducer;
