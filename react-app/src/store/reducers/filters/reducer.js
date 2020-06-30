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

import filterRefinementsActions from "store/actionsTypes/filterRefinementsActionsTypes";
import { handleActions } from "redux-actions";

import { getSelectedRefinements, getFormattedRefinements } from "./helpers";

export const initialState = {
  refinements: [],
  selectedRefinements: [],
  resources: null,
  isLoading: false,
};

const filterRefinementsReducer = handleActions(
  {
    [filterRefinementsActions.GET_FILTER_REFINEMENTS__START]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [filterRefinementsActions.GET_FILTER_REFINEMENTS__SUCCESS]: (
      state,
      { refinements, resources }
    ) => ({
      refinements: getFormattedRefinements(refinements),
      selectedRefinements: getSelectedRefinements(refinements),
      resources,
      isLoading: false,
    }),
    [filterRefinementsActions.GET_FILTER_REFINEMENTS__FAILURE]: () => ({
      ...initialState,
    }),
  },
  initialState
);

export default filterRefinementsReducer;
