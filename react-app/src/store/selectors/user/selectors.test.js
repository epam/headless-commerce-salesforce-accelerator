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

import {
  selectUserStatus,
  selectUserData,
  selectLoginFormFields,
  selectLoginFormResources,
  selectUserCsrfToken,
  selectErrors,
} from "./selectors";

describe("user selectors", () => {
  const store = {
    user: {
      userStatus: "ANONYMOUS",
      profile: {},
      loginForm: {
        valid: true,
        htmlName: "login_login",
        dynamicHtmlName: "login_login_d0siqevxumqb",
        error: null,
        attributes: "name = login_login, id = login_login",
        formType: "formGroup",
      },
      resources: {
        checkout: "Checkout",
        login: "Login",
        guestCheckoutTitle: "Guest Checkout",
        guestCheckoutCTA: "Checkout as Guest",
        guestCheckoutNotice: "You can check out without creating an account.",
        returningCustomers: "Returning Customers",
      },
      csrf_token:
        "nmlUC4YhLYGktJuwzD3xjGG4YQpQETv4oSt_6LZvuClBi6a665l2-NVctDN1hH3FswkM3cI57N-8UxvPwXRqiTi6ru4BruarGWGOHco4muP0gwcWR9qi1_BJkA018psH_seuVv2liaycyDD4rIuRza5VaNKzh2Pvf9_LmLDu1_Zlw3LADMM=",
      error:
        "Invalid login or password. Remember that password is case-sensitive.",
    },
  };

  describe("selectUserStatus", () => {
    it("should return user status from store", () => {
      expect(selectUserStatus(store)).toEqual(store.user.userStatus);
    });
  });
  describe("selectUserData", () => {
    it("should return user profile from store", () => {
      expect(selectUserData(store)).toEqual(store.user.profile);
    });
  });
  describe("selectLoginFormFields", () => {
    it("should return user loginForm from store", () => {
      expect(selectLoginFormFields(store)).toEqual(store.user.loginForm);
    });
  });
  describe("selectLoginFormResources", () => {
    it("should return user resources from store", () => {
      expect(selectLoginFormResources(store)).toEqual(store.user.resources);
    });
  });
  describe("selectUserCsrfToken", () => {
    it("should return user token from store", () => {
      expect(selectUserCsrfToken(store)).toEqual(store.user.csrf_token);
    });
  });
  describe("selectErrors", () => {
    it("should return user status error from store", () => {
      expect(selectErrors(store)).toEqual(store.user.error);
    });
  });
});
