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

import types from "store/actionsTypes/productsActionsTypes";
import service from "../../services/productsAPI";
import actions from "../actions/products/actions";
import breadcrumbsActions from "../actions/breadCrumbsActions";

function* getProductsSaga(action) {
  try {
    const response = yield call(service.getProducts, action.id);

    yield put(actions.getProductsSuccess(response.data));
    yield put(breadcrumbsActions.getBreadCrumbs(response.data.breadcrumbs));
  } catch (err) {
    yield put(actions.getProductsFail(err));
  }
}

export default function* watchProductsSaga() {
  yield takeLatest(types.GET_PRODUCTS, getProductsSaga);
}
