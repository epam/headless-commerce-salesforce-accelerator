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

const checkoutActionsTypes = {
  CHECKOUT_BEGIN: "CHECKOUT_BEGIN",
  CHECKOUT_BEGIN__SUCCESS: "CHECKOUT_BEGIN__SUCCESS",
  CHECKOUT_BEGIN__FAIL: "CHECKOUT_BEGIN__FAIL",
  GO_TO_STAGE: "GO_TO_STAGE",
  UPDATE_SHIPPING_METHODS_LIST: "UPDATE_SHIPPING_METHODS_LIST",
  UPDATE_SHIPPING_METHODS_LIST__SUCCESS:
    "UPDATE_SHIPPING_METHODS_LIST__SUCCESS",
  UPDATE_SHIPPING_METHODS_LIST__FAIL: "UPDATE_SHIPPING_METHODS_LIST__FAIL",
  CHECKOUT_SELECT_SHIPPING_METHOD: "CHECKOUT_SELECT_SHIPPING_METHOD",
  CHECKOUT_SELECT_SHIPPING_METHOD_SUCCESS:
    "CHECKOUT_SELECT_SHIPPING_METHOD_SUCCESS",
  CHECKOUT_SELECT_SHIPPING_METHOD_FAIL: "CHECKOUT_SELECT_SHIPPING_METHOD_FAIL",
  SUBMIT_SHIPPING: "SUBMIT_SHIPPING",
  SUBMIT_SHIPPING__SUCCESS: "SUBMIT_SHIPPING__SUCCESS",
  SUBMIT_SHIPPING__FAIL: "SUBMIT_SHIPPING__FAIL",
  SUBMIT_PAYMENT: "SUBMIT_PAYMENT",
  SUBMIT_PAYMENT__SUCCESS: "SUBMIT_PAYMENT__SUCCESS",
  SUBMIT_PAYMENT__FAIL: "SUBMIT_PAYMENT__FAIL",
  PLACE_ORDER: "PLACE_ORDER",
  PLACE_ORDER__SUCCESS: "PLACE_ORDER__SUCCESS",
  PLACE_ORDER__FAIL: "PLACE_ORDER__FAIL",
};

export default checkoutActionsTypes;
