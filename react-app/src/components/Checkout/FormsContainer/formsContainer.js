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

import React, { useRef } from "react";
import { useSelector } from "react-redux";

/** Components */
import {
  selectCurrentStage,
  selectIsCheckoutLoading,
} from "store/selectors/checkout/selectors";
import constants from "store/reducers/checkout/constants";
import ShippingForm from "../ShippingForm";
import BillingForm from "../BillingForm";
import StageController from "../StageController";

/** Selectors */

/** Constants */

const FormsContainer = () => {
  const currentStage = useSelector(selectCurrentStage);
  const isLoading = useSelector(selectIsCheckoutLoading);

  const shippingFormRef = useRef();
  const billingFormRef = useRef();

  return !isLoading ? (
    <>
      <ShippingForm
        ref={shippingFormRef}
        isActive={currentStage === constants.SHIPPING}
      />
      <BillingForm
        ref={billingFormRef}
        isActive={currentStage === constants.PAYMENT}
      />
      <StageController
        shippingForm={shippingFormRef}
        billingForm={billingFormRef}
      />
    </>
  ) : null;
};

export default FormsContainer;
