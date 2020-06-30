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

import types from "store/actionsTypes/userActionsTypes";

const actions = {
  getLoginForm: () => ({
    type: types.GET_LOGIN_FORM,
  }),
  getLoginFormSuccess: (data) => ({
    type: types.GET_LOGIN_FORM_SUCCESS,
    data,
  }),
  getLoginFormFail: () => ({
    type: types.GET_LOGIN_FORM_FAIL,
  }),
  getUserStatus: () => ({
    type: types.GET_USER_STATUS,
  }),
  getUserStatusSuccess: (identification) => ({
    type: types.GET_USER_STATUS_SUCCESS,
    identification,
  }),
  getUserStatusFail: () => ({
    type: types.GET_USER_STATUS_FAIL,
  }),
  login: (userData) => ({
    type: types.LOGIN,
    userData,
  }),
  loginSuccess: () => ({
    type: types.LOGIN_SUCCESS,
  }),
  loginFail: (error) => ({
    type: types.LOGIN_FAIL,
    error,
  }),
};

export default actions;
