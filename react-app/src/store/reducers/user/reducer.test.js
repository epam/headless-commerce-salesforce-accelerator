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

import reducer, { initialState } from "./reducer";
import actions from "../../actions/user/actions";

describe("usersReducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("is expected to have initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("is expected handle GET_USER_STATUS_SUCCESS", () => {
    const identification = {
      anonymous: true,
      identified: false,
      authenticated: false,
      profile: {},
    };

    const expectedState = {
      userStatus: "ANONYMOUS",
      resources: {},
      error: "",
      profile: {
        firstName: undefined,
        lasName: undefined,
      },
    };

    store.dispatch(actions.getUserStatusSuccess(identification));

    const actualState = store.getState();
    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle GET_LOGIN_FORM_SUCCESS", () => {
    const expectedState = {
      userStatus: "ANONYMOUS",
      resources: {
        checkout: "Checkout",
        login: "Login",
        guestCheckoutTitle: "Guest Checkout",
      },
      error: "",
      loginForm: {
        valid: true,
      },
      csrf_token: "LQ9SXlZgfjWA0lVMe_4EoofJ",
    };

    const response = {
      csrf: {
        tokenName: "csrf_token",
        token: "LQ9SXlZgfjWA0lVMe_4EoofJ",
      },
      loginForm: {
        login: { valid: true },
        error: null,
      },
      queryString: "",
      resources: {
        checkout: "Checkout",
        login: "Login",
        guestCheckoutTitle: "Guest Checkout",
      },
      tracking_consent: null,
    };

    store.dispatch(actions.getLoginFormSuccess(response));

    const actualState = store.getState();
    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle LOGIN_SUCCESS", () => {
    const expectedState = {
      userStatus: "AUTHENTICATED",
      resources: {},
      error: "",
    };

    store.dispatch(actions.loginSuccess());

    const actualState = store.getState();
    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle LOGIN_FAIL", () => {
    const errorText = ["Invalid login or password."];
    store.dispatch(actions.loginFail(errorText));

    const actualState = store.getState();
    const expectedState = {
      userStatus: "ANONYMOUS",
      resources: {},
      error: "Invalid login or password.",
    };

    expect(actualState).toEqual(expectedState);
  });
});
