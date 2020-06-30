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

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/** UI Components */
import Grid from "@material-ui/core/Grid";

/** Components */
import StyledTypography from "components/core/Typography";
import SuccessIcon from "components/core/SuccessIcon";
import ProductItem from "components/ProductItem";
import CheckoutTotal from "components/Checkout/CheckoutTotal";

/** Selectors */
import {
  selectBillingData,
  selectShippingData,
  selectShipments,
  selectGiftMessage,
  selectPaymentData,
  selectOrderId,
  selectOrderCreationDate,
} from "store/selectors/checkout/selectors";

import { selectItems } from "store/selectors/cart/selectors";

import {
  StyledWrapper,
  StyledSummaryHeading,
  StyledSummaryBlock,
  StyledSummarySectionHeading,
  StyledSummarySection,
  StyledOrderedProductItems,
  StyledSidePanel,
  StyledIconWrapper,
  StyledSpan,
} from "./orderConfirmationStyled";

const OrderConfirmation = () => {
  const billingData = useSelector(selectBillingData) || {};
  const shippingData = useSelector(selectShippingData);
  const shipments = useSelector(selectShipments);
  const productLineItems = useSelector(selectItems);
  const giftMessage = useSelector(selectGiftMessage);
  const paymentData = useSelector(selectPaymentData);
  const orderID = useSelector(selectOrderId);
  const orderCreationDate = useSelector(selectOrderCreationDate);

  const history = useHistory();
  useEffect(() => {
    if (
      Object.keys(shippingData).length === 0 &&
      Object.keys(billingData).length === 0
    ) {
      history.push("/");
    }
  }, [billingData, history, shippingData]);

  const creationDate = orderCreationDate
    ? orderCreationDate.split("T")[0].split("-").reverse().join("/")
    : null;

  const renderProductLineItems = () => {
    return productLineItems?.map(
      ({
        productName,
        id,
        UUID,
        quantity,
        images,
        price,
        productType,
        availability,
        available,
        priceTotal,
        quantityOptions,
        variationAttributes,
      }) => (
        <ProductItem
          key={id}
          id={id}
          uuid={UUID}
          productName={productName}
          price={price}
          banner={images.small[0].absURL}
          quantity={quantity}
          type={productType}
          availabilityMsg={availability?.messages}
          available={available}
          maxQuantityAvailable={quantityOptions.maxOrderQuantity}
          totalPrice={priceTotal?.price}
          variation={variationAttributes}
          isPreview
          isInOrder
        />
      )
    );
  };

  const renderSelectedPaymentInstruments = () => {
    return paymentData?.map(
      ({
        maskedCreditCardNumber,
        expirationYear,
        expirationMonth,
        type,
        lastFour,
      }) => (
        <StyledSummarySection key={lastFour}>
          <StyledSummarySectionHeading>Payment:</StyledSummarySectionHeading>
          <div> Credit {type}</div>
          <div>{maskedCreditCardNumber}</div>
          <div>
            Ending: {expirationMonth}/{expirationYear}
          </div>
        </StyledSummarySection>
      )
    );
  };

  return (
    <StyledWrapper>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12}>
          <StyledTypography
            variant="h1"
            fontSize={32}
            lineheight={48}
            colortheme="mineShaft"
            margin="0 0 24px"
          >
            Thank You for Your Order
          </StyledTypography>
        </Grid>
        <Grid container direction="row">
          <StyledIconWrapper>
            <SuccessIcon />
          </StyledIconWrapper>
          <StyledTypography
            fontSize={14}
            lineheight={24}
            fontWeight="regular"
            colortheme="mineShaft"
            margin="0 0 24px"
          >
            Your order has been successfully created
          </StyledTypography>
        </Grid>
        <Grid item xs={5}>
          <StyledSummaryBlock>
            <StyledSummarySection>
              <StyledSummarySectionHeading>Receipt</StyledSummarySectionHeading>
              <Grid container>
                <Grid item xs={6}>
                  <div>Order Number</div>
                  <div>Order Date</div>
                </Grid>
                <Grid item xs={6}>
                  <div>{orderID}</div>
                  <div>{creationDate}</div>
                </Grid>
              </Grid>
            </StyledSummarySection>
          </StyledSummaryBlock>
          <StyledSummaryBlock>
            <StyledSummarySection>
              <StyledSummarySectionHeading>
                Shipping address:
              </StyledSummarySectionHeading>
              <div>
                {shippingData?.firstName} {shippingData?.lastName}
              </div>
              <div>{shippingData?.address1}</div>
              <div>
                {shippingData?.city}, {shippingData?.stateCode},{" "}
                {shippingData?.postalCode}
              </div>
              <br />
              <div>{shippingData?.phone}</div>
            </StyledSummarySection>
            <StyledSummarySection>
              <StyledSummarySectionHeading>
                Shipping Method:
              </StyledSummarySectionHeading>
              <div>
                {shipments?.selectedShippingMethod?.displayName} (
                {shipments?.selectedShippingMethod?.estimatedArrivalTime}){" "}
                <StyledSpan>
                  {shipments?.selectedShippingMethod?.shippingCost}
                </StyledSpan>
              </div>
            </StyledSummarySection>
            {giftMessage && (
              <StyledSummarySection>
                <StyledSummarySectionHeading>
                  Gift message:
                </StyledSummarySectionHeading>
                <div>{giftMessage?.htmlValue}</div>
              </StyledSummarySection>
            )}
          </StyledSummaryBlock>
          <StyledSummarySection>
            <StyledSummarySectionHeading>
              Billing Address:
            </StyledSummarySectionHeading>
            <div>
              {billingData?.firstName} {billingData?.lastName}
            </div>
            <div>{billingData?.address1}</div>
            <div>
              {billingData?.city}, {billingData?.stateCode},{" "}
              {billingData?.postalCode}
            </div>
            <br />
            <div>{billingData?.email}</div>
            <div>{billingData?.phone}</div>
          </StyledSummarySection>
          {renderSelectedPaymentInstruments()}
        </Grid>
        <Grid item xs={5}>
          <StyledSidePanel>
            <CheckoutTotal />
            <StyledSummaryHeading>Order Items</StyledSummaryHeading>
            <StyledOrderedProductItems>
              {renderProductLineItems()}
            </StyledOrderedProductItems>
          </StyledSidePanel>
        </Grid>
      </Grid>
    </StyledWrapper>
  );
};

OrderConfirmation.propTypes = {};

export default OrderConfirmation;
