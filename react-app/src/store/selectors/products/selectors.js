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

export const selectProductsInfo = (state) => state.productsInfo;

export const selectProductsIds = createSelector(
  [selectProductsInfo],
  (productsInfo) => productsInfo.ids
);

export const selectProductsCategory = createSelector(
  [selectProductsInfo],
  (productsInfo) => productsInfo.category
);

export const selectProductsResultCount = createSelector(
  [selectProductsInfo],
  (productsInfo) => productsInfo.resultsCount
);

export const selectIsProductsLoading = createSelector(
  [selectProductsInfo],
  (productsInfo) => productsInfo.isLoading
);

export const selectPageSize = createSelector(
  selectProductsInfo,
  (productsInfo) => productsInfo.pageSize
);

export const selectPagesAmount = createSelector(
  selectProductsResultCount,
  selectPageSize,
  (resultsCount, pageSize) => Math.ceil(resultsCount / pageSize)
);

export const selectPageNumber = createSelector(
  selectProductsInfo,
  (productsInfo) => productsInfo.pageNumber
);
