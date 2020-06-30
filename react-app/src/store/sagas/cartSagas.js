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

import types from "store/actionsTypes/cartActionsTypes";
import service from "../../services/cartAPI";
import actions from "../actions/cart/actions";

function* getCartDataSaga(action) {
  try {
    const response = yield call(service.getCartData);
    yield put(actions.getCartDataSuccess(response.data, action.type));
  } catch (err) {
    yield put(actions.getCartDataFail(err));
  }
}

function* addProductToCartSaga(action) {
  try {
    const response = yield call(
      service.addProductToCart,
      action.id,
      action.quantity,
      action.options
    );
    if (response.data.error) {
      yield put(actions.addProductToCartFail(response.data));
    } else {
      yield put(
        actions.addProductToCartSuccess(response.data.cart, action.name)
      );
    }
  } catch (err) {
    yield put(actions.addProductToCartFail(err));
  }
}

function* updateProductQuantitySaga(action) {
  try {
    const response = yield call(
      service.updateProductQuantity,
      action.id,
      action.uuid,
      action.quantity
    );

    yield put(actions.updateProductQuantitySuccess(response.data));
  } catch (err) {
    const response = yield call(service.getCartData);

    yield put(actions.getCartDataSuccess(response.data, action.type));
  }
}

function* deleteProductFromCart(action) {
  try {
    const response = yield call(
      service.deleteProductFromCart,
      action.pid,
      action.uuid
    );

    yield put(
      actions.deleteProductFromCartSuccess(response.data.basket, action.type)
    );
  } catch (err) {
    yield put(actions.deleteProductFromCartFail(err));
  }
}

function* selectShippingMethodSaga({ methodId, shipmentUUID }) {
  try {
    const response = yield call(
      service.selectShippingMethod,
      methodId,
      shipmentUUID
    );
    yield put(actions.getCartDataSuccess(response.data));
  } catch (error) {
    yield put(actions.getCartDataFail(error));
  }
}

function* updateProductInCartSaga({ pid, uuid, quantity, type }) {
  try {
    const response = yield call(
      service.updateProductInCart,
      pid,
      uuid,
      quantity
    );
    yield put(
      actions.getCartDataSuccess(
        { ...response.data.cartModel, resources: response.data.resources },
        type
      )
    );
  } catch (error) {
    yield put(actions.getCartDataFail(error));
  }
}

export default function* watchMiniCartSaga() {
  yield takeLatest(types.GET_CART_DATA, getCartDataSaga);
  yield takeLatest(types.ADD_PRODUCT_TO_CART, addProductToCartSaga);
  yield takeLatest(types.DELETE_PRODUCT_FROM_CART, deleteProductFromCart);
  yield takeLatest(types.SELECT_SHIPPING_METHOD, selectShippingMethodSaga);
  yield takeLatest(types.UPDATE_PRODUCT_QUANTITY, updateProductQuantitySaga);
  yield takeLatest(types.UPDATE_PRODUCT, updateProductInCartSaga);
}
