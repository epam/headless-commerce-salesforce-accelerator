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

import React, { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

/** Actions */
import checkoutActions from "store/actions/checkout/actions";

/** Selectors */
import {
  selectBillingData,
  selectBillingAddressFields,
  selectBillingContactInfoFields,
  selectBillingAddress,
  selectCsrfToken,
  selectAddressSelector,
  selectOrderResources,
  selectBillingPhone,
  selectOrderEmail,
  selectErrors,
  selectPaymentData,
} from "store/selectors/checkout/selectors";

import constants from "store/reducers/checkout/constants";

import Form from "components/core/Form";
import Payment from "../Payment";
import {
  StyledShippingSummary,
  StyledSummarySection,
  StyledFormSummaryHeading,
  StyledSummaryColumn,
  StyledPhone,
} from "../FormContainer/formContainerStyled";

/** Components */
import FormContainer from "../FormContainer";
import AddressForm from "../AddressForm";

/** Helpers */
import { formatBillingAddressFields, defineCardType } from "./helpers";

const BillingForm = forwardRef(({ isActive }, ref) => {
  const history = useHistory();
  const addressForm = useSelector(selectBillingAddressFields) || {};
  const contactForm = useSelector(selectBillingContactInfoFields) || {};
  const billingData = useSelector(selectBillingData) || {};
  const billingPhone = useSelector(selectBillingPhone) || {};
  const billingAddress = useSelector(selectBillingAddress);
  const orderEmail = useSelector(selectOrderEmail);
  const csrfToken = useSelector(selectCsrfToken);
  const addressSelector = useSelector(selectAddressSelector);
  const orderResources = useSelector(selectOrderResources);
  const fieldsError = useSelector(selectErrors);
  const paymentData = useSelector(selectPaymentData);

  const form = { ...addressForm, ...contactForm };
  const dispatch = useDispatch();
  const stage = { billingStage: constants.PAYMENT };

  const onEditBillingForm = () => {
    dispatch(checkoutActions.goToStage(constants.PAYMENT));
    history.replace("checkout?stage=payment");
  };

  const handleSubmit = (data) => {
    const creditCardNumber = data.dwfrm_billing_creditCardFields_cardNumber.replace(
      / /g,
      ""
    );

    const submitData = {
      addressSelector,
      csrf_token: csrfToken,
      localizedNewAddressTitle: orderResources.newAddress,
      ...formatBillingAddressFields(billingAddress),
      dwfrm_billing_creditCardFields_cardType: defineCardType(creditCardNumber),
      dwfrm_billing_paymentMethod: "CREDIT_CARD",
      ...data,
      dwfrm_billing_creditCardFields_cardNumber: creditCardNumber,
    };

    dispatch(checkoutActions.submitBilling(submitData, history));
  };
  const paymentSummary = paymentData?.map((payment) => {
    return (
      <div key={payment.lastFour}>
        <div>{`Credit ${payment?.type}`}</div>
        <div>{`${payment?.maskedCreditCardNumber}`}</div>
        <div>
          {`Ending: ${payment?.expirationMonth}/${payment?.expirationYear}`}
        </div>
      </div>
    );
  });

  const getBillingSummary = () => {
    return (
      <StyledShippingSummary>
        <StyledSummaryColumn>
          <StyledSummarySection>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <StyledFormSummaryHeading>
                  Billing Address:
                </StyledFormSummaryHeading>
                <div>{`${billingData?.firstName} ${billingData?.lastName}`}</div>
                <div>{`${billingData?.address1}`}</div>
                <div>
                  {`${billingData?.city}, ${billingData?.stateCode}, ${billingData?.postalCode}`}
                </div>
                <div>{`${orderEmail}`}</div>
              </Grid>
              <Grid item xs={6}>
                <StyledFormSummaryHeading>Payment:</StyledFormSummaryHeading>
                {paymentSummary}
              </Grid>
            </Grid>
            <StyledPhone>{`${billingPhone}`}</StyledPhone>
          </StyledSummarySection>
        </StyledSummaryColumn>
      </StyledShippingSummary>
    );
  };

  return (
    form && (
      <FormContainer
        title="Payment"
        isActive={isActive}
        number="2"
        margin="16px 0 24px"
        submitted={!!billingData?.firstName}
        summary={getBillingSummary()}
        onEditForm={onEditBillingForm}
      >
        <Form refProp={ref} onSubmit={handleSubmit}>
          <AddressForm
            formData={{ ...form, ...stage }}
            inputData={billingAddress}
            fieldsError={fieldsError}
          />
          <Payment fieldsError={fieldsError} />
        </Form>
      </FormContainer>
    )
  );
});

BillingForm.propTypes = {
  isActive: PropTypes.bool,
};

export default BillingForm;
