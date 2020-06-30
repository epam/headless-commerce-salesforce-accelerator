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

export const selectProductDetails = (state) => state.productDetails;

export const selectProductId = createSelector(
  [selectProductDetails],
  (product) => product.id
);

export const selectIsProductLoading = createSelector(
  [selectProductDetails],
  (product) => product.isLoading
);

export const selectIndividualSetProducts = createSelector(
  [selectProductDetails],
  (product) => product.individualProducts
);

export const selectBundledProducts = createSelector(
  [selectProductDetails],
  (product) => product.bundledProducts
);

export const selectProductImages = createSelector(
  selectProductDetails,
  (product) => product.slider
);

export const selectProductRating = createSelector(
  selectProductDetails,
  (product) => product.rating
);

export const selectProductName = createSelector(
  selectProductDetails,
  (product) => product.name
);

export const selectProductResources = createSelector(
  selectProductDetails,
  (product) => product.resources
);

export const selectProductAvailabilityMsg = createSelector(
  selectProductDetails,
  (product) => product.availabilityMsg
);

export const selectProducPrice = createSelector(
  selectProductDetails,
  (product) => product.price
);

export const selectProducType = createSelector(
  selectProductDetails,
  (product) => product.type
);

export const selectProductVariation = createSelector(
  selectProductDetails,
  (product) => product.variation
);

export const selectProductSwatches = createSelector(
  selectProductDetails,
  (product) =>
    product?.variation?.find((attribute) => attribute.id === "color")?.values ||
    null
);

export const selectProductSizes = createSelector(
  selectProductDetails,
  (product) =>
    product?.variation?.find((attribute) => attribute.id === "size") || null
);

export const selectProductReadyToOrder = createSelector(
  selectProductDetails,
  (product) => product.readyToOrder
);

export const selectProductAvailable = createSelector(
  selectProductDetails,
  (product) => product.available
);

export const selectIsAvailableToOrder = createSelector(
  selectProductDetails,
  (product) => product.available && product.readyToOrder
);

export const selectProductQuantities = createSelector(
  selectProductDetails,
  (product) => product.quantities
);

export const selectProductQuantitiesAreLoading = createSelector(
  selectProductDetails,
  (product) => product.quantitiesAreLoading
);

export const selectProductLongDescription = createSelector(
  selectProductDetails,
  (product) => product.details
);

export const selectProductShortDescription = createSelector(
  selectProductDetails,
  (product) => product.description
);

export const selectProductAttributes = createSelector(
  selectProductDetails,
  (product) => product.attributes
);

export const selectProductOption = createSelector(
  selectProductDetails,
  (product) => product.selectedOptions || null
);
