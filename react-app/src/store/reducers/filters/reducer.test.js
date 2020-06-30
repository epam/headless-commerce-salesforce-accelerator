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

import filterRefinementsActions from "store/actions/filters/actions";
import reducer, { initialState } from "./reducer";

describe("filterRefinementsReducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("Expected to have initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("Expected handle GET_FILTER_REFINEMENTS__START", () => {
    const params = "?cgid=test";
    store.dispatch(filterRefinementsActions.getFilterRefinementsStart(params));

    const actualState = store.getState();
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(actualState).toEqual(expectedState);
  });

  it("Expected handle GET_FILTER_REFINEMENTS__SUCCESS", () => {
    const mockedRefinements = [
      { displayName: "Name1", values: [] },
      { displayName: "Name2", values: [] },
    ];
    const expectedState = {
      refinements: mockedRefinements,
      selectedRefinements: [],
      resources: {},
      isLoading: false,
    };

    const response = mockedRefinements;

    store.dispatch(
      filterRefinementsActions.getFilterRefinementsSuccess(response, {})
    );

    const actualState = store.getState();

    expect(actualState).toEqual(expectedState);
  });

  it("Expected handle GET_FILTER_REFINEMENTS__FAILURE", () => {
    store.dispatch(filterRefinementsActions.getFilterRefinementsFailure());

    const actualState = store.getState();
    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    expect(actualState).toEqual(expectedState);
  });
});
