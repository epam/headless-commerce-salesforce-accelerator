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
});
