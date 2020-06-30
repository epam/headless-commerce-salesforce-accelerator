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

export const formatCheckoutData = ({
  csrf,
  customer,
  currentStage,
  expirationYears,
  forms,
  order,
}) => ({
  token: csrf.token,
  customer,
  expirationYears,
  shippingForm: {
    ...forms.shippingForm,
    shippingAddress: {
      ...forms.shippingForm.shippingAddress,
      isGift: { selected: order.shipping[0].isGift },
    },
  },
  billingForm: { ...forms.billingForm },
  order,
  currentStage: currentStage.toUpperCase(),
  totals: order.totals,
  resources: order.resources,
  shipments: order.shipping[0],
  shipmentUUID: order.shipping[0]?.shipmentUUID,
});

export const formatShippingData = ({ order }, giftMessage) => ({
  totals: order.totals,
  shippingData: {
    ...order.shipping[0].shippingAddress,
    giftMessage: { ...giftMessage },
  },
});

export const createShippingData = (data) => {
  return {
    ...data.address,
    shippingMethod: data.shippingMethod,
    giftMessage: data?.form?.shippingAddress?.giftMessage,
  };
};

export const createBillingData = (data, email) => {
  return {
    ...data.address,
    email,
  };
};

export default { formatCheckoutData, formatShippingData };
