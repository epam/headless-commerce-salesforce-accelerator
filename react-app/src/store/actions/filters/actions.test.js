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

import filterRefinementsActionsTypes from "store/actionsTypes/filterRefinementsActionsTypes";
import filterRefinementsActions from "./actions";

describe("actions", () => {
  const store = configureStore([])({});

  afterEach(() => {
    store.clearActions();
  });

  describe("getFilterRefinementsStart", () => {
    it("expect to create GET_FILTER_REFINEMENTS__START action", () => {
      const params = "?cgid=test";

      const expectedActions = [
        {
          type: filterRefinementsActionsTypes.GET_FILTER_REFINEMENTS__START,
          params,
        },
      ];

      store.dispatch(
        filterRefinementsActions.getFilterRefinementsStart(params)
      );
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getFilterRefinementsSuccess", () => {
    it("expect to create GET_FILTER_REFINEMENTS__SUCCESS action", () => {
      const refinements = [{ displayName: "Price", values: [] }];
      const resources = {};

      const expectedActions = [
        {
          type: filterRefinementsActionsTypes.GET_FILTER_REFINEMENTS__SUCCESS,
          refinements,
          resources,
        },
      ];

      store.dispatch(
        filterRefinementsActions.getFilterRefinementsSuccess(
          refinements,
          resources
        )
      );
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getFilterRefinementsFailure", () => {
    it("Expected to create GET_FILTER_REFINEMENTS__FAILURE action", () => {
      const expectedActions = [
        { type: filterRefinementsActionsTypes.GET_FILTER_REFINEMENTS__FAILURE },
      ];

      store.dispatch(filterRefinementsActions.getFilterRefinementsFailure());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
