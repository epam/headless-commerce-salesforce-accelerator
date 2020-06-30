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

import {
  selectProductsInfo,
  selectProductsIds,
  selectProductsCategory,
  selectIsProductsLoading,
  selectProductsResultCount,
} from "./selectors";

describe("productsSelectors", () => {
  describe("selectProductsInfo:", () => {
    it("should return products info from store", () => {
      const store = {
        productsInfo: {},
      };
      expect(selectProductsInfo(store)).toEqual(store.productsInfo);
    });
  });

  describe("selectProductsIds:", () => {
    it("should return products ids from store", () => {
      const store = {
        productsInfo: {
          ids: [45, 68, 79],
        },
      };
      expect(selectProductsIds(store)).toEqual(store.productsInfo.ids);
    });
  });

  describe("selectProductsCategory:", () => {
    it("should return products category from store", () => {
      const store = {
        productsInfo: {
          category: "jewelery",
        },
      };
      expect(selectProductsCategory(store)).toEqual(
        store.productsInfo.category
      );
    });
  });

  describe("selectIsProductsLoading:", () => {
    it("should return products isLoading property from store", () => {
      const store = {
        productsInfo: {
          isLoading: true,
        },
      };
      expect(selectIsProductsLoading(store)).toEqual(
        store.productsInfo.isLoading
      );
    });
  });

  describe("selectProductsResultCount:", () => {
    it("should return products count of results from store", () => {
      const store = {
        productsInfo: {
          resultsCount: 150,
        },
      };
      expect(selectProductsResultCount(store)).toEqual(
        store.productsInfo.resultsCount
      );
    });
  });
});
