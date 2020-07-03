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
  selectIsCheckoutLoading,
  selectCurrentStage,
  selectCsrfToken,
  selectShippingForm,
  selectBillingForm,
  selectCheckoutResources,
  selectOrderHeader,
  selectTotals,
  selectShippingData,
  selectShippingAddressFields,
  selectBillingAddressFields,
  selectBillingContactInfoFields,
  selectShipments,
  selectShipmentUUID,
  selectShippingMethodHeader,
  selectShipmentMethodFieldData,
  selectGiftMessageFieldData,
  selectGiftMessage,
  selectGiftMessageHeader,
  selectGiftMessageLabel,
  selectBillingData,
  selectBillingAddress,
  selectIsGift,
  selectErrors,
  selectCreditCardFields,
  selectExpirationYears,
  selectPaymentMethods,
  selectPaymentData,
  selectOrderId,
  selectOrderCreationDate,
  selectAddressSelector,
  selectOrderResources,
  selectBillingPhone,
  selectOrderEmail,
} from "./selectors";

describe("checkout selectors", () => {
  const store = {
    checkout: {
      currentStage: "SHIPPING",
      orderID: "",
      token: "C1s07a3qM_53RpTjf0v4slyd1cDFRu",
      order: {
        billing: {
          billingAddress: {
            address: {
              phone: "650-589-5223",
            },
          },
          payment: {
            applicablePaymentMethods: [],
            selectedPaymentInstruments: [],
          },
          matchingAddressId: "9a6a607c2b6b7e8f5eb716e7be",
        },
        creationDate: "2020-07-02T09:07:35.125Z",
        resources: {},
        orderEmail: "user@mail.uu",
      },
      customer: null,
      forms: null,
      totals: {
        subTotal: "$49.99",
        totalShippingCost: "$5.99",
        grandTotal: "$58.78",
      },
      isLoading: false,
      expirationYears: [
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
      ],
      shippingData: {
        giftMessage: {},
      },
      shippingForm: {
        valid: true,
        shippingAddress: {
          addressFields: {},
          shippingMethodID: {},
          giftMessage: {},
          isGift: {},
        },
      },
      billingForm: {
        valid: true,
        addressFields: {},
        contactInfoFields: {},
        creditCardFields: {},
      },
      billingData: {},
      shipments: {
        UUID: "9a6a607c2b6b7e8f5eb716e7be",
      },
      error: [],
      resources: {
        summary: "Order Summary",
        shippingMethod: "Shipping Method",
        checkGift: "This is a Gift",
        giftMessage: "Message",
      },
    },
  };

  describe("selectIsCheckoutLoading", () => {
    it("should return true if it is loading from store", () => {
      expect(selectIsCheckoutLoading(store)).toEqual(store.checkout.isLoading);
    });
  });
  describe("selectCurrentStage", () => {
    it("should return current stage from store", () => {
      expect(selectCurrentStage(store)).toEqual(store.checkout.currentStage);
    });
  });
  describe("selectCsrfToken", () => {
    it("should return token from store", () => {
      expect(selectCsrfToken(store)).toEqual(store.checkout.token);
    });
  });
  describe("selectShippingForm", () => {
    it("should return shippingForm from store", () => {
      expect(selectShippingForm(store)).toEqual(store.checkout.shippingForm);
    });
  });
  describe("selectBillingForm", () => {
    it("should return billingForm from store", () => {
      expect(selectBillingForm(store)).toEqual(store.checkout.billingForm);
    });
  });
  describe("selectCheckoutResources", () => {
    it("should return resources from store", () => {
      expect(selectCheckoutResources(store)).toEqual(store.checkout.resources);
    });
  });
  describe("selectOrderHeader", () => {
    it("should return summary from store", () => {
      expect(selectOrderHeader(store)).toEqual(
        store.checkout.resources.summary
      );
    });
  });
  describe("selectTotals", () => {
    it("should return totals from store", () => {
      expect(selectTotals(store)).toEqual(store.checkout.totals);
    });
  });
  describe("selectShippingData", () => {
    it("should return shippingData from store", () => {
      expect(selectShippingData(store)).toEqual(store.checkout.shippingData);
    });
  });
  describe("selectShippingAddressFields", () => {
    it("should return addressFields from store", () => {
      expect(selectShippingAddressFields(store)).toEqual(
        store.checkout.shippingForm.shippingAddress.addressFields
      );
    });
  });
  describe("selectBillingAddressFields", () => {
    it("should return addressFields from store", () => {
      expect(selectBillingAddressFields(store)).toEqual(
        store.checkout.billingForm.addressFields
      );
    });
  });
  describe("selectBillingContactInfoFields", () => {
    it("should return contactInfoFields from store", () => {
      expect(selectBillingContactInfoFields(store)).toEqual(
        store.checkout.billingForm.contactInfoFields
      );
    });
  });
  describe("selectShipments", () => {
    it("should return shipments from store", () => {
      expect(selectShipments(store)).toEqual(store.checkout.shipments);
    });
  });
  describe("selectShipmentUUID", () => {
    it("should return shipment ID from store", () => {
      expect(selectShipmentUUID(store)).toEqual(store.checkout.shipments.UUID);
    });
  });
  describe("selectShippingMethodHeader", () => {
    it("should return shippingMethod from store", () => {
      expect(selectShippingMethodHeader(store)).toEqual(
        store.checkout.resources.shippingMethod
      );
    });
  });
  describe("selectShipmentMethodFieldData", () => {
    it("should return shippingMethodID from store", () => {
      expect(selectShipmentMethodFieldData(store)).toEqual(
        store.checkout.shippingForm.shippingAddress.shippingMethodID
      );
    });
  });
  describe("selectGiftMessage", () => {
    it("should return giftMessage from store", () => {
      expect(selectGiftMessage(store)).toEqual(
        store.checkout.shippingData.giftMessage
      );
    });
  });
  describe("selectGiftMessageFieldData", () => {
    it("should return giftMessage data from store", () => {
      expect(selectGiftMessageFieldData(store)).toEqual(
        store.checkout.shippingForm.shippingAddress.giftMessage
      );
    });
  });
  describe("selectGiftMessageHeader", () => {
    it("should return true if it is a gift ", () => {
      expect(selectGiftMessageHeader(store)).toEqual(
        store.checkout.resources.checkGift
      );
    });
  });
  describe("selectGiftMessageLabel", () => {
    it("should return giftMessageLabel from store", () => {
      expect(selectGiftMessageLabel(store)).toEqual(
        store.checkout.resources.giftMessage
      );
    });
  });
  describe("selectBillingData", () => {
    it("should return billingData from store", () => {
      expect(selectBillingData(store)).toEqual(store.checkout.billingData);
    });
  });
  describe("selectBillingAddress", () => {
    it("should return billingAddress from store", () => {
      expect(selectBillingAddress(store)).toEqual(
        store.checkout.order.billing.billingAddress.address
      );
    });
  });
  describe("selectIsGift", () => {
    it("should return isGift data from store", () => {
      expect(selectIsGift(store)).toEqual(
        store.checkout.shippingForm.shippingAddress.isGift
      );
    });
  });
  describe("selectErrors", () => {
    it("should return error from store", () => {
      expect(selectErrors(store)).toEqual(store.checkout.error);
    });
  });
  describe("selectCreditCardFields", () => {
    it("should return creditCardFields from store", () => {
      expect(selectCreditCardFields(store)).toEqual(
        store.checkout.billingForm.creditCardFields
      );
    });
  });
  describe("selectExpirationYears", () => {
    it("should return expirationYears from store", () => {
      expect(selectExpirationYears(store)).toEqual(
        store.checkout.expirationYears
      );
    });
  });
  describe("selectPaymentMethods", () => {
    it("should return applicablePaymentMethods from store", () => {
      expect(selectPaymentMethods(store)).toEqual(
        store.checkout.order.billing.payment.applicablePaymentMethods
      );
    });
  });
  describe("selectPaymentData", () => {
    it("should return selectedPaymentInstruments from store", () => {
      expect(selectPaymentData(store)).toEqual(
        store.checkout.order.billing.payment.selectedPaymentInstruments
      );
    });
  });
  describe("selectOrderId", () => {
    it("should return orderID from store", () => {
      expect(selectOrderId(store)).toEqual(store.checkout.orderID);
    });
  });
  describe("selectOrderCreationDate", () => {
    it("should return creationDate from store", () => {
      expect(selectOrderCreationDate(store)).toEqual(
        store.checkout.order.creationDate
      );
    });
  });
  describe("selectAddressSelector", () => {
    it("should return matchingAddressId from store", () => {
      expect(selectAddressSelector(store)).toEqual(
        store.checkout.order.billing.matchingAddressId
      );
    });
  });
  describe("selectOrderResources", () => {
    it("should return resources from store", () => {
      expect(selectOrderResources(store)).toEqual(
        store.checkout.order.resources
      );
    });
  });
  describe("selectBillingPhone", () => {
    it("should return phone from store", () => {
      expect(selectBillingPhone(store)).toEqual(
        store.checkout.order.billing.billingAddress.address.phone
      );
    });
  });
  describe("selectOrderEmail", () => {
    it("should return orderEmail from store", () => {
      expect(selectOrderEmail(store)).toEqual(store.checkout.order.orderEmail);
    });
  });
});
