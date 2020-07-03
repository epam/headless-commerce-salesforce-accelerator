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
  selectTotals,
  selectShipments,
  selectItems,
  selectNumOfShipments,
  selectNumItems,
  selectHasBonusProduct,
  selectApproachingDiscounts,
  selectShipmentUUID,
  selectCartResources,
  selectCartValidation,
  selectCartValidationMsg,
} from "./selectors";

describe("cart selectors", () => {
  const store = {
    cart: {
      totals: {
        subTotal: "50$",
        totalTax: "5$",
        grandTotal: "68$",
        totalShippingCost: "13$",
      },
      shipments: {
        selectedShippingMethod: {
          ID: "032",
        },
      },
      items: [{ productId: "345krfdr56" }, { productId: "gkhf67ghf" }],
      numOfShipments: 5,
      numItems: 4,
      hasBonusProduct: false,
      approachingDiscounts: [],
      shipmentUUID: "gh5y5rdf",
      resources: { cancel: "Cancel" },
      invalid: false,
      invalidMsg: "Adjust quantity",
    },
  };

  describe("selectTotals", () => {
    it("should return total pricing from store", () => {
      expect(selectTotals(store)).toEqual(store.cart.totals);
    });
  });
  describe("selectShipments", () => {
    it("should return shipment methods from store", () => {
      expect(selectShipments(store)).toEqual(store.cart.shipments);
    });
  });
  describe("selectItems", () => {
    it("should return selected products to cart from store", () => {
      expect(selectItems(store)).toEqual(store.cart.items);
    });
  });
  describe("selectNumOfShipments", () => {
    it("should return number of shipments from store", () => {
      expect(selectNumOfShipments(store)).toEqual(5);
    });
  });
  describe("selectNumItems", () => {
    it("should return number of items in cart from store", () => {
      expect(selectNumItems(store)).toEqual(4);
    });
  });
  describe("selectHasBonusProduct", () => {
    it("should return if there is bonus product from store", () => {
      expect(selectHasBonusProduct(store)).toEqual(false);
    });
  });
  describe("selectApproachingDiscounts", () => {
    it("should return if there is discounts from store", () => {
      expect(selectApproachingDiscounts(store)).toEqual([]);
    });
  });
  describe("selectShipmentUUID", () => {
    it("should return shipmentUUID from store", () => {
      expect(selectShipmentUUID(store)).toEqual("gh5y5rdf");
    });
  });
  describe("selectCartResources", () => {
    it("should return cart resources from store", () => {
      expect(selectCartResources(store)).toEqual({ cancel: "Cancel" });
    });
  });
  describe("selectCartValidation", () => {
    it("should return false if cart is valid from store", () => {
      expect(selectCartValidation(store)).toEqual(false);
    });
  });
  describe("selectCartValidationMsg", () => {
    it("should return cart validation message from store", () => {
      expect(selectCartValidationMsg(store)).toEqual("Adjust quantity");
    });
  });
});
