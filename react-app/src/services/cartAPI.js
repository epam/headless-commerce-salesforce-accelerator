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

import http from "./http";

const cartAPI = {
  getCartData: () => http.get("Cart-Show"),
  addProductToCart: (pid, quantity, options, pidsObj = []) => {
    return http.post(`Cart-AddProduct`, {
      pid,
      quantity,
      options,
      pidsObj,
    });
  },
  updateProductQuantity: (pid, uuid, quantity) => {
    return http.get(
      `Cart-UpdateQuantity?pid=${pid}&uuid=${uuid}&quantity=${quantity}`
    );
  },
  deleteProductFromCart: (pid, uuid) =>
    http.get(`Cart-RemoveProductLineItem?pid=${pid}&uuid=${uuid}`),
  selectShippingMethod: (methodID, shipmentUUID) =>
    http.post(`Cart-SelectShippingMethod`, { methodID, shipmentUUID }),
  updateProductInCart: (id, uuid, quantity) =>
    http.post(`Cart-EditProductLineItem`, { pid: id, uuid, quantity }),
};

export default cartAPI;
