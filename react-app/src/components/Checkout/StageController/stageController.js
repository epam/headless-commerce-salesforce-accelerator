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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

/** Components */
import Button from "components/core/Button";
import ArrowIconLeft from "components/core/ArrowIconLeft";

/** Selectors */
import { selectCurrentStage } from "store/selectors/checkout/selectors";

/** Constants */
import constants from "store/reducers/checkout/constants";

/** Actions */
import checkoutActions from "store/actions/checkout/actions";
import StyledStageController from "./stageControllerStyled";

const StageController = ({ shippingForm, billingForm }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentStage = useSelector(selectCurrentStage);

  const submitForm = (form) => {
    form.current.dispatchEvent(new Event("submit", { cancelable: true }));
  };

  const goToPreviousStage = () => {
    switch (currentStage) {
      case constants.SHIPPING:
        history.push("/");
        break;
      case constants.PAYMENT:
        dispatch(checkoutActions.goToStage(constants.SHIPPING));
        break;
      case constants.PLACE_ORDER:
        dispatch(checkoutActions.goToStage(constants.PAYMENT));
        break;
      default:
        return null;
    }

    return null;
  };

  const goToNextStage = () => {
    switch (currentStage) {
      case constants.SHIPPING:
        submitForm(shippingForm);
        break;
      case constants.PAYMENT:
        submitForm(billingForm);
        break;
      case constants.PLACE_ORDER:
        dispatch(checkoutActions.placeOrder());
        history.push("/order-confirm");
        break;
      default:
        return null;
    }

    return null;
  };

  const renderNextButtonText = () => {
    let text = "Next: ";
    switch (currentStage) {
      case constants.SHIPPING:
        text += "Payment";
        break;
      case constants.PAYMENT:
        text += "Place Order";
        break;
      case constants.PLACE_ORDER:
        text = "Place Order";
        break;
      default:
        return null;
    }

    return text;
  };

  return (
    <StyledStageController>
      <Button
        variant="link"
        onClick={goToPreviousStage}
        icon={<ArrowIconLeft />}
      >
        Back
      </Button>
      <Button onClick={goToNextStage}>{renderNextButtonText()}</Button>
    </StyledStageController>
  );
};

StageController.propTypes = {
  shippingForm: PropTypes.shape({}),
  billingForm: PropTypes.shape({}),
};

export default StageController;
