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

import React from "react";
import { useSelector } from "react-redux";

/** Selectors */
import {
  selectShipments,
  selectGiftMessage,
  selectShippingData,
} from "store/selectors/checkout/selectors";

/** Components */
import {
  StyledShippingSummary,
  StyledSummarySection,
  StyledFormSummaryHeading,
  StyledSummaryColumn,
  StyledPhone,
  StyledShippingCost,
} from "../FormContainer/formContainerStyled";

const ShippingSummary = () => {
  const shipments = useSelector(selectShipments);
  const giftMessage = useSelector(selectGiftMessage);
  const shippingData = useSelector(selectShippingData);

  return (
    <StyledShippingSummary>
      <StyledSummaryColumn>
        <StyledSummarySection>
          <StyledFormSummaryHeading>Shipping Address:</StyledFormSummaryHeading>
          <div>{`${shippingData?.firstName} ${shippingData?.lastName}`}</div>
          <div>{`${shippingData?.address1}`}</div>
          <div>
            {`${shippingData?.city}, ${shippingData?.stateCode}, ${shippingData?.postalCode}`}
          </div>
          <StyledPhone>{`${shippingData?.phone}`}</StyledPhone>
        </StyledSummarySection>
        <StyledSummarySection>
          <StyledFormSummaryHeading>Shipping Method:</StyledFormSummaryHeading>
          <div>
            {shipments?.selectedShippingMethod?.displayName}
            <StyledShippingCost>{` ${shipments?.selectedShippingMethod?.shippingCost}`}</StyledShippingCost>
          </div>
        </StyledSummarySection>
      </StyledSummaryColumn>
      <StyledSummaryColumn>
        <StyledFormSummaryHeading>Gift Message:</StyledFormSummaryHeading>
        <div>{giftMessage?.htmlValue}</div>
      </StyledSummaryColumn>
    </StyledShippingSummary>
  );
};

export default ShippingSummary;
