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

export const selectCartData = (state) => state.cart;

export const selectTotals = createSelector(
  [selectCartData],
  (cart) => cart?.totals
);

export const selectShipments = createSelector(
  [selectCartData],
  (cart) => cart.shipments
);

export const selectItems = createSelector(
  [selectCartData],
  (cart) => cart.items
);

export const selectNumOfShipments = createSelector(
  [selectCartData],
  (cart) => cart.numOfShipments
);

export const selectNumItems = createSelector(
  [selectCartData],
  (cart) => cart.numItems
);

export const selectHasBonusProduct = createSelector(
  [selectCartData],
  (cart) => cart.hasBonusProduct
);

export const selectApproachingDiscounts = createSelector(
  [selectCartData],
  (cart) => cart.approachingDiscounts
);

export const selectShipmentUUID = createSelector(
  selectCartData,
  (cart) => cart.shipmentUUID
);

export const selectCartResources = createSelector(
  [selectCartData],
  (cart) => cart?.resources
);

export const selectCartValidation = createSelector(
  [selectCartData],
  (cart) => cart.invalid
);

export const selectCartValidationMsg = createSelector(
  [selectCartData],
  (cart) => cart.invalidMsg
);

export const selectCartItemMsg = createSelector(
  [selectCartData],
  (cart) => cart.invalidMsg
);
