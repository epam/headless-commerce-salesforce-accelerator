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

import { call, put, takeLatest } from "redux-saga/effects";

import types from "store/actionsTypes/userActionsTypes";
import service from "../../services/userAPI";
import userActions from "../actions/user/actions";

function* getUserStatusSaga() {
  try {
    const response = yield call(service.getUserStatus);
    yield put(userActions.getUserStatusSuccess(response.data.identification));
  } catch (err) {
    yield put(userActions.getUserStatusFail(err));
  }
}

function* getLoginFormSaga() {
  try {
    const response = yield call(service.getLoginForm);
    yield put(userActions.getLoginFormSuccess(response.data));
  } catch (err) {
    yield put(userActions.getLoginFormFail(err));
  }
}

function* loginSaga({ userData }) {
  try {
    const response = yield call(service.login, userData);
    if (response.data.error) {
      yield put(userActions.loginFail(response.data.error));
    } else {
      yield put(userActions.loginSuccess(response.data));
      yield put(userActions.getUserStatus());
    }
  } catch (error) {
    yield put(userActions.loginFail(error));
  }
}

export default function* watchUserSaga() {
  yield takeLatest(types.GET_USER_STATUS, getUserStatusSaga);
  yield takeLatest(types.GET_LOGIN_FORM, getLoginFormSaga);
  yield takeLatest(types.LOGIN, loginSaga);
}
