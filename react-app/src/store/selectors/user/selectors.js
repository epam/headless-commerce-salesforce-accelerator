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

import { createSelector } from "reselect";

export const selectUserInfo = (state) => state.user;

export const selectUserStatus = createSelector(
  [selectUserInfo],
  (userInfo) => userInfo.userStatus
);

export const selectUserData = createSelector(
  [selectUserInfo],
  (userInfo) => userInfo.profile
);

export const selectLoginFormFields = createSelector(
  [selectUserInfo],
  (userInfo) => userInfo.loginForm
);

export const selectLoginFormResources = createSelector(
  [selectUserInfo],
  (userInfo) => userInfo.resources
);

export const selectUserCsrfToken = createSelector(
  [selectUserInfo],
  (userInfo) => userInfo.csrf_token
);

export const selectErrors = createSelector(
  [selectUserInfo],
  (userInfo) => userInfo.error
);
