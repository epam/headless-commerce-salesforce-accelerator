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

import menuActionsTypes from "store/actionsTypes/menuActionsTypes";
import { handleActions } from "redux-actions";

export const initialState = {
  categories: [],
  isLoading: false,
};

const menuReducer = handleActions(
  {
    [menuActionsTypes.GET_MENU_CATEGORIES__START]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [menuActionsTypes.GET_MENU_CATEGORIES__SUCCESS]: (state, action) => {
      return {
        categories: action.categories,
        isLoading: false,
      };
    },
    [menuActionsTypes.GET_MENU_CATEGORIES__FAILURE]: () => ({
      categories: [],
      isLoading: false,
    }),
  },
  initialState
);

export default menuReducer;
