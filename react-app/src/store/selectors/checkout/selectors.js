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

export const selectCheckoutData = (state) => state.checkout;

export const selectIsCheckoutLoading = createSelector(
  selectCheckoutData,
  (checkout) => checkout.isLoading
);

export const selectCurrentStage = createSelector(
  selectCheckoutData,
  (checkout) => checkout.currentStage
);

export const selectCsrfToken = createSelector(
  selectCheckoutData,
  (checkout) => checkout.token
);

export const selectShippingForm = createSelector(
  selectCheckoutData,
  (checkout) => checkout.shippingForm
);

export const selectBillingForm = createSelector(
  selectCheckoutData,
  (checkout) => checkout.billingForm
);

export const selectCheckoutResources = createSelector(
  selectCheckoutData,
  (checkout) => checkout.resources
);

export const selectOrderHeader = createSelector(
  selectCheckoutData,
  (checkout) => checkout.resources?.summary
);

export const selectTotals = createSelector(
  selectCheckoutData,
  (checkout) => checkout.totals
);

export const selectShippingData = createSelector(
  selectCheckoutData,
  (checkout) => checkout.shippingData
);

export const selectShippingAddressFields = createSelector(
  selectShippingForm,
  (shippingData) => shippingData?.shippingAddress?.addressFields
);

export const selectBillingAddressFields = createSelector(
  selectBillingForm,
  (billingData) => billingData?.addressFields
);

export const selectBillingContactInfoFields = createSelector(
  selectBillingForm,
  (billingData) => billingData?.contactInfoFields
);

export const selectShipments = createSelector(
  selectCheckoutData,
  (checkout) => checkout.shipments
);

export const selectShipmentUUID = createSelector(
  selectCheckoutData,
  (checkout) => checkout.shipments?.UUID
);

export const selectShippingMethodHeader = createSelector(
  selectCheckoutData,
  (checkout) => checkout.resources?.shippingMethod
);

export const selectShipmentMethodFieldData = createSelector(
  selectShippingForm,
  (shippingForm) => shippingForm?.shippingAddress?.shippingMethodID
);

export const selectGiftMessageFieldData = createSelector(
  selectShippingForm,
  (shippingForm) => shippingForm?.shippingAddress?.giftMessage
);

export const selectGiftMessage = createSelector(
  selectCheckoutData,
  (checkout) => checkout?.shippingData?.giftMessage
);

export const selectGiftMessageHeader = createSelector(
  selectCheckoutData,
  (checkout) => checkout.resources?.checkGift
);

export const selectGiftMessageLabel = createSelector(
  selectCheckoutData,
  (checkout) => checkout.resources?.giftMessage
);

export const selectBillingData = createSelector(
  selectCheckoutData,
  (checkout) => checkout.billingData
);

export const selectBillingAddress = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.billing?.billingAddress?.address
);

export const selectIsGift = createSelector(
  selectShippingForm,
  (shippingData) => shippingData?.shippingAddress?.isGift
);

export const selectErrors = createSelector(
  selectCheckoutData,
  (checkout) => checkout?.error
);

export const selectCreditCardFields = createSelector(
  selectBillingForm,
  (billingForm) => billingForm.creditCardFields
);

export const selectExpirationYears = createSelector(
  selectCheckoutData,
  (checkout) => checkout.expirationYears
);

export const selectPaymentMethods = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.billing?.payment?.applicablePaymentMethods
);

export const selectPaymentData = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.billing?.payment?.selectedPaymentInstruments
);

export const selectOrderId = createSelector(
  selectCheckoutData,
  (checkout) => checkout.orderID
);

export const selectOrderCreationDate = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.creationDate
);

export const selectAddressSelector = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.billing?.matchingAddressId
);

export const selectOrderResources = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.resources
);

export const selectBillingPhone = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.billing?.billingAddress?.address?.phone
);

export const selectOrderEmail = createSelector(
  selectCheckoutData,
  (checkout) => checkout.order?.orderEmail
);
