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

const getCartData = (data) => {
  return {
    totals: data.totals,
    shipments: data.shipments ? data?.shipments[0] : null,
    items: data.items,
    numOfShipments: data.numOfShipments,
    numItems: data.numItems,
    hasBonusProduct: data.hasBonusProduct,
    approachingDiscounts: data.approachingDiscounts,
    variation: data.variationAttributes,
    shipmentUUID: data?.items[0]?.shipmentUUID,
    resources: data.resources,
    invalid: data.valid?.error,
    invalidMsg: data.valid?.message,
  };
};

export default getCartData;
