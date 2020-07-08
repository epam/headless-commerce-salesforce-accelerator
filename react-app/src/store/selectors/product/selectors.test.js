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
  selectProductId,
  selectIsProductLoading,
  selectIndividualSetProducts,
  selectBundledProducts,
  selectProductImages,
  selectProductRating,
  selectProductName,
  selectProductResources,
  selectProductAvailabilityMsg,
  selectProducPrice,
  selectProducType,
  selectProductVariation,
  selectProductSizes,
  selectProductReadyToOrder,
  selectProductAvailable,
  selectIsAvailableToOrder,
  selectProductQuantities,
  selectProductQuantitiesAreLoading,
  selectProductLongDescription,
  selectProductShortDescription,
  selectProductAttributes,
  selectProductOption,
  selectProductSwatches,
} from "./selectors";

describe("cart selectors", () => {
  const store = {
    productDetails: {
      id: "708141677203M",
      isLoading: false,
      individualProducts: [],
      bundledProducts: [],
      slider: [],
      rating: 4,
      name: "No-Iron Textured Dress Shirt",
      resources: {},
      availabilityMsg: "In Stock",
      price: {},
      type: "master",
      variation: [
        {
          id: "color",
          values: [],
        },
        {
          id: "size",
          values: [],
        },
      ],
      readyToOrder: true,
      available: true,
      quantities: [],
      details:
        "This cotton dress shirt is available in white or blue. Both colors are a wardrobe necessity.",
      description:
        "This cotton dress shirt is available in white or blue. Both colors are a wardrobe necessity.",
      attributes: null,
    },
  };

  describe("selectProductId", () => {
    it("should return productDetails pricing from store", () => {
      expect(selectProductId(store)).toEqual(store.productDetails.id);
    });
  });
  describe("selectIsProductLoading", () => {
    it("should return true if it is loading", () => {
      expect(selectIsProductLoading(store)).toEqual(
        store.productDetails.isLoading
      );
    });
  });
  describe("selectIndividualSetProducts", () => {
    it("should return true if it is individualProducts", () => {
      expect(selectIndividualSetProducts(store)).toEqual(
        store.productDetails.individualProducts
      );
    });
  });
  describe("selectBundledProducts", () => {
    it("should return true if it is bundledProducts", () => {
      expect(selectBundledProducts(store)).toEqual(
        store.productDetails.bundledProducts
      );
    });
  });
  describe("selectProductImages", () => {
    it("should return images from store", () => {
      expect(selectProductImages(store)).toEqual(store.productDetails.slider);
    });
  });
  describe("selectProductRating", () => {
    it("should return rating from store", () => {
      expect(selectProductRating(store)).toEqual(store.productDetails.rating);
    });
  });
  describe("selectProductName", () => {
    it("should return product name from store", () => {
      expect(selectProductName(store)).toEqual(store.productDetails.name);
    });
  });
  describe("selectProductResources", () => {
    it("should return resources from store", () => {
      expect(selectProductResources(store)).toEqual(
        store.productDetails.resources
      );
    });
  });
  describe("selectProductAvailabilityMsg", () => {
    it("should return availabilityMsg from store", () => {
      expect(selectProductAvailabilityMsg(store)).toEqual(
        store.productDetails.availabilityMsg
      );
    });
  });
  describe("selectProducPrice", () => {
    it("should return product price from store", () => {
      expect(selectProducPrice(store)).toEqual(store.productDetails.price);
    });
  });
  describe("selectProducType", () => {
    it("should return product type from store", () => {
      expect(selectProducType(store)).toEqual(store.productDetails.type);
    });
  });
  describe("selectProductVariation", () => {
    it("should return product variation from store", () => {
      expect(selectProductVariation(store)).toEqual(
        store.productDetails.variation
      );
    });
  });
  describe("selectProductSizes", () => {
    it("should return product sizes from store", () => {
      expect(selectProductSizes(store)).toEqual({ id: "size", values: [] });
    });
  });
  describe("selectProductReadyToOrder", () => {
    it("should return true is it is readyToOrder", () => {
      expect(selectProductReadyToOrder(store)).toEqual(
        store.productDetails.readyToOrder
      );
    });
  });
  describe("selectProductAvailable", () => {
    it("should return true if it is available", () => {
      expect(selectProductAvailable(store)).toEqual(
        store.productDetails.available
      );
    });
  });
  describe("selectIsAvailableToOrder", () => {
    it("should return true if it is available & readyToOrder", () => {
      expect(selectIsAvailableToOrder(store)).toEqual(
        store.productDetails.available && store.productDetails.readyToOrder
      );
    });
  });
  describe("selectProductQuantities", () => {
    it("should return quantities from store", () => {
      expect(selectProductQuantities(store)).toEqual(
        store.productDetails.quantities
      );
    });
  });
  describe("selectProductQuantitiesAreLoading", () => {
    it("should return quantitiesAreLoading from store", () => {
      expect(selectProductQuantitiesAreLoading(store)).toEqual(
        store.productDetails.quantitiesAreLoading
      );
    });
  });
  describe("selectProductLongDescription", () => {
    it("should return details from store", () => {
      expect(selectProductLongDescription(store)).toEqual(
        store.productDetails.details
      );
    });
  });
  describe("selectProductShortDescription", () => {
    it("should return description from store", () => {
      expect(selectProductShortDescription(store)).toEqual(
        store.productDetails.description
      );
    });
  });
  describe("selectProductAttributes", () => {
    it("should return attributes from store", () => {
      expect(selectProductAttributes(store)).toEqual(
        store.productDetails.attributes
      );
    });
  });
  describe("selectProductOption", () => {
    it("should return selectedOptions from store", () => {
      expect(selectProductOption(store)).toEqual(
        store.productDetails?.selectedOptions || null
      );
    });
  });
  describe("selectProductSwatches", () => {
    it("should return product sizes from store", () => {
      expect(selectProductSwatches(store)).toEqual([]);
    });
  });
});
