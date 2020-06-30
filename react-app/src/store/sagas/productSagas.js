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

import types from "store/actionsTypes/productActionsTypes";
import service from "../../services/productAPI";
import actions from "../actions/product/actions";
import breadcrumbsActions from "../actions/breadCrumbsActions";

function* getProductByIdSaga(action) {
  try {
    const response = yield call(service.getProduct, action.id);
    yield put(actions.getProductByIdSuccess(response.data));
    yield put(breadcrumbsActions.getBreadCrumbs(response.data.breadcrumbs));
  } catch (err) {
    yield put(actions.getProductByIdFail(err));
  }
}

function* getProductVariationSaga(action) {
  try {
    const response = yield call(service.getProductVariation, action.url);
    yield put(actions.getProductByIdSuccess(response.data));
  } catch (err) {
    yield put(actions.getProductByIdFail(err));
  }
}

function* updateProductQuantitySaga(action) {
  try {
    const response = yield call(service.getProductVariation, action.url);
    const { product } = response.data;
    yield put(actions.updateProductQuantitySuccess(product));
  } catch (err) {
    yield put(actions.updateProductQuantityFail(err));
  }
}

export default function* watchProductSaga() {
  yield takeLatest(types.GET_PRODUCT_BY_ID, getProductByIdSaga);
  yield takeLatest(types.GET_PRODUCT_VARIATION, getProductVariationSaga);
  yield takeLatest(types.UPDATE_PRODUCT_QUANTITY, updateProductQuantitySaga);
}
