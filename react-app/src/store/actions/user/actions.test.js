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
import types from "../../actionsTypes/userActionsTypes";

describe("user actions", () => {
  const store = configureStore([])({});
  afterEach(() => {
    store.clearActions();
  });

  describe("getLoginForm", () => {
    it("is expected to create GET_LOGIN_FORM action", () => {
      const expectedActions = [{ type: types.GET_LOGIN_FORM }];

      store.dispatch(actions.getLoginForm());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getLoginFormSuccess", () => {
    it("is expected to create GET_LOGIN_FORM_SUCCESS action", () => {
      const expectedActions = [{ type: types.GET_LOGIN_FORM_SUCCESS }];

      store.dispatch(actions.getLoginFormSuccess());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("getLoginFormFail", () => {
    it("is expected to create GET_LOGIN_FORM_FAIL action", () => {
      const expectedActions = [{ type: types.GET_LOGIN_FORM_FAIL }];

      store.dispatch(actions.getLoginFormFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("getUserStatus", () => {
    it("is expected to create GET_USER_STATUS action", () => {
      const expectedActions = [{ type: types.GET_USER_STATUS }];

      store.dispatch(actions.getUserStatus());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("getUserStatusSuccess", () => {
    it("is expected to create GET_USER_STATUS_SUCCESS action", () => {
      const expectedActions = [{ type: types.GET_USER_STATUS_SUCCESS }];

      store.dispatch(actions.getUserStatusSuccess());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("getUserStatusFail", () => {
    it("is expected to create GET_USER_STATUS_FAIL action", () => {
      const expectedActions = [{ type: types.GET_USER_STATUS_FAIL }];

      store.dispatch(actions.getUserStatusFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("login", () => {
    it("is expected to create LOGIN action", () => {
      const expectedActions = [{ type: types.LOGIN }];

      store.dispatch(actions.login());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("loginSuccess", () => {
    it("is expected to create LOGIN_SUCCESS action", () => {
      const expectedActions = [{ type: types.LOGIN_SUCCESS }];

      store.dispatch(actions.loginSuccess());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("loginFail", () => {
    it("is expected to create LOGIN_FAIL action", () => {
      const expectedActions = [{ type: types.LOGIN_FAIL }];

      store.dispatch(actions.loginFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
