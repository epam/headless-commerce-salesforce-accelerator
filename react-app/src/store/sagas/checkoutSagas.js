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
import checkoutAPI from "services/checkoutAPI";
import types from "../actionsTypes/checkoutActionsTypes";
import checkoutActions from "../actions/checkout/actions";

function* checkoutBeginSaga(stage) {
  try {
    const response = yield call(checkoutAPI.checkoutBegin, stage);
    yield put(checkoutActions.checkoutBeginSuccess(response.data));
  } catch (error) {
    yield put(checkoutActions.checkoutBeginFail());
  }
}

function* updateShippingMethodsListSaga({ data }) {
  try {
    const response = yield call(checkoutAPI.updateShippingMethodsList, data);
    yield put(checkoutActions.updateShippingMethodsListSuccess(response.data));
  } catch (error) {
    yield put(checkoutActions.updateShippingMethodsListFail());
  }
}

function* selectCheckoutShippingMethodSaga({ methodId, shipmentUUID }) {
  try {
    const response = yield call(
      checkoutAPI.selectCheckoutShippingMethod,
      methodId,
      shipmentUUID
    );
    yield put(
      checkoutActions.selectCheckoutShippingMethodSuccess(response.data)
    );
  } catch (error) {
    yield put(checkoutActions.selectCheckoutShippingMethodFail(error));
  }
}

function* submitShippingSaga({ requestData, history }) {
  try {
    const response = yield call(checkoutAPI.submitShipping, requestData);
    if (response.data?.error) {
      yield put(checkoutActions.submitShippingFail(response.data));
    } else {
      yield put(checkoutActions.submitShippingSuccess(response.data));
      history.replace("checkout?stage=payment");
    }
  } catch (error) {
    yield put(checkoutActions.submitShippingFail(error));
  }
}

function* submitPaymentSaga({ requestData, history }) {
  try {
    const response = yield call(checkoutAPI.submitPayment, requestData);
    if (response.data?.error) {
      yield put(checkoutActions.submitBillingFail(response.data));
    } else {
      history.replace("checkout?stage=placeOrder");
      yield put(checkoutActions.submitBillingSuccess(response.data));
    }
  } catch (error) {
    yield put(checkoutActions.submitBillingFail(error));
  }
}

function* placeOrderSaga() {
  try {
    const response = yield call(checkoutAPI.placeOrder);
    if (response?.data?.error) {
      yield put(checkoutActions.placeOrderFail(response.data));
    } else {
      yield put(checkoutActions.placeOrderSuccess(response.data));
    }
  } catch (error) {
    yield put(checkoutActions.placeOrderFail(error));
  }
}

export default function* watchCheckoutSagas() {
  yield takeLatest(types.CHECKOUT_BEGIN, checkoutBeginSaga);
  yield takeLatest(
    types.UPDATE_SHIPPING_METHODS_LIST,
    updateShippingMethodsListSaga
  );
  yield takeLatest(
    types.CHECKOUT_SELECT_SHIPPING_METHOD,
    selectCheckoutShippingMethodSaga
  );
  yield takeLatest(types.SUBMIT_SHIPPING, submitShippingSaga);
  yield takeLatest(types.SUBMIT_PAYMENT, submitPaymentSaga);
  yield takeLatest(types.PLACE_ORDER, placeOrderSaga);
}
