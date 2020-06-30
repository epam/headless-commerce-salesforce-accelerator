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
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

/** Actions */
import checkoutActions from "store/actions/checkout/actions";

/** Selectors */
import {
  selectShippingAddressFields,
  selectCsrfToken,
  selectShipmentUUID,
  selectShippingData,
  selectShipments,
  selectGiftMessage,
  selectErrors,
} from "store/selectors/checkout/selectors";

/** Constants */
import constants from "store/reducers/checkout/constants";

/** Components */
import Form from "components/core/Form";
import {
  StyledShippingSummary,
  StyledSummarySection,
  StyledFormSummaryHeading,
  StyledSummaryColumn,
  StyledPhone,
  StyledShippingCost,
} from "../FormContainer/formContainerStyled";

/** Components */
import FormContainer from "../FormContainer";
import ShippingMethods from "../ShippingMethods";
import GiftMessage from "../GiftMessage";
import AddressForm from "../AddressForm";

/** Helpers */
import { modifyRequestData } from "../AddressForm/helpers";

const ShippingForm = forwardRef(({ isActive }, ref) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const form = useSelector(selectShippingAddressFields) || {};
  const shipmentUUID = useSelector(selectShipmentUUID);
  const csrfToken = useSelector(selectCsrfToken);
  const shippingData = useSelector(selectShippingData);
  const shipments = useSelector(selectShipments);
  const giftMessage = useSelector(selectGiftMessage);
  const fieldsError = useSelector(selectErrors);

  const onSubmit = (data) => {
    const submitData = {
      csrf_token: csrfToken,
      shipmentUUID,
      originalShipmentUUID: shipmentUUID,
      shipmentSelector: "new",
      ...data,
    };

    dispatch(checkoutActions.submitShipping(submitData, history));
  };

  const onEditShippingForm = () => {
    dispatch(checkoutActions.goToStage(constants.SHIPPING));
    history.replace("checkout?stage=shipping");
  };

  const getShippingSummary = () => {
    return (
      <StyledShippingSummary>
        <StyledSummaryColumn>
          <StyledSummarySection>
            <StyledFormSummaryHeading>
              Shipping Address:
            </StyledFormSummaryHeading>
            <div>{`${shippingData?.firstName} ${shippingData?.lastName}`}</div>
            <div>{`${shippingData?.address1}`}</div>
            <div>
              {`${shippingData?.city}, ${shippingData?.stateCode}, ${shippingData?.postalCode}`}
            </div>
            <StyledPhone>{`${shippingData?.phone}`}</StyledPhone>
          </StyledSummarySection>
          <StyledSummarySection>
            <StyledFormSummaryHeading>
              Shipping Method:
            </StyledFormSummaryHeading>
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

  const updateShippingMethodsList = (target, getValues) => {
    const { name } = target;
    if (name.endsWith("stateCode")) {
      dispatch(
        checkoutActions.updateShippingMethodsList({
          ...modifyRequestData(getValues()),
          shipmentUUID,
        })
      );
    }
  };

  return (
    form && (
      <FormContainer
        title="Shipping"
        isActive={isActive}
        number="1"
        submitted={!!shippingData?.firstName}
        summary={getShippingSummary()}
        onEditForm={onEditShippingForm}
      >
        <Form refProp={ref} onSubmit={onSubmit}>
          <AddressForm
            updateShippingMethodsList={updateShippingMethodsList}
            formData={form}
            inputData={shippingData}
            fieldsError={fieldsError}
          />
          <ShippingMethods />
          <GiftMessage />
        </Form>
      </FormContainer>
    )
  );
});

ShippingForm.propTypes = {
  isActive: PropTypes.bool,
};

export default ShippingForm;
