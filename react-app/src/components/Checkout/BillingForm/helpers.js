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

export const formatBillingAddressFields = (addressFields = {}) => {
  return {
    dwfrm_billing_addressFields_firstName: addressFields.firstName || "",
    dwfrm_billing_addressFields_lastName: addressFields.lastName || "",
    dwfrm_billing_addressFields_address1: addressFields.address1 || "",
    dwfrm_billing_addressFields_address2: addressFields.address2 || "",
    dwfrm_billing_addressFields_country: addressFields.countryCode?.value || "",
    dwfrm_billing_addressFields_states_stateCode: addressFields.stateCode || "",
    dwfrm_billing_addressFields_city: addressFields.city || "",
    dwfrm_billing_addressFields_postalCode: addressFields.postalCode || "",
  };
};

export const defineCardType = (cardNumber) => {
  let cardType = "";

  if (/^4/.test(cardNumber)) {
    cardType = "Visa";
  } else if (/^5[1-5]/.test(cardNumber)) {
    cardType = "Master Card";
  } else if (/^(?:6011)|(?:65)/.test(cardNumber)) {
    cardType = "Discover";
  } else if (/^3[47]/.test(cardNumber)) {
    cardType = "Amex";
  }

  return cardType;
};
