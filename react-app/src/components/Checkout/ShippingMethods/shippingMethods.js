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

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButtonIcon from "components/core/RadioButtonIcon";
import checkoutActions from "store/actions/checkout/actions";
import StyledTypography from "components/core/Typography";
import PropTypes from "prop-types";

/** UI Components */
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";

import {
  selectShipments,
  selectShipmentUUID,
  selectShippingMethodHeader,
  selectShipmentMethodFieldData,
} from "store/selectors/checkout/selectors";
import {
  StyledShippingMethods,
  StyledShippingItem,
} from "./shippingMethodsStyled";

const ShippingMethods = ({ register }) => {
  const dispatch = useDispatch();
  const shipments = useSelector(selectShipments);
  const shipmentUUID = useSelector(selectShipmentUUID);
  const shipmentMethodFieldData = useSelector(selectShipmentMethodFieldData);
  const shippingMethodHeader = useSelector(selectShippingMethodHeader);
  const { applicableShippingMethods } = shipments;
  const selectedShippingMethod = shipments.selectedShippingMethod.ID;
  const [value, setValue] = useState(selectedShippingMethod);

  useEffect(() => {
    setValue(selectedShippingMethod);
  }, [selectedShippingMethod]);

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(
      checkoutActions.selectCheckoutShippingMethod(
        e.currentTarget.value,
        shipmentUUID
      )
    );
  };

  const renderRadioButton = (shippingMethod) => {
    const { displayName, estimatedArrivalTime, shippingCost } = shippingMethod;
    return (
      <StyledShippingItem key={shippingMethod.ID}>
        <FormControlLabel
          key={shippingMethod.ID}
          label={
            <Grid container>
              <Grid item xs={8}>
                <StyledShippingItem>
                  <StyledTypography display="inline">
                    {displayName}
                  </StyledTypography>
                  <StyledTypography
                    fontWeight="normal"
                    margin="0 0 0 5px"
                    display="inline"
                  >
                    ({estimatedArrivalTime})
                  </StyledTypography>
                </StyledShippingItem>
              </Grid>
              <Grid item xs={4}>
                <StyledTypography margin="0 0 0 20px" align="right">
                  {shippingCost}
                </StyledTypography>
              </Grid>
            </Grid>
          }
          value={shippingMethod.ID}
          id="shippingMethods"
          control={
            <Radio
              onChange={handleChange}
              icon={<RadioButtonIcon />}
              checkedIcon={<RadioButtonIcon checked />}
              name={shipmentMethodFieldData?.htmlName}
              inputRef={register()}
            />
          }
        />
      </StyledShippingItem>
    );
  };

  return shipments && shipmentUUID ? (
    <StyledShippingMethods>
      <StyledTypography
        variant="h3"
        fontSize={16}
        colortheme="mineShaft"
        margin="0 0 8px"
      >
        {shippingMethodHeader}
      </StyledTypography>
      <RadioGroup
        aria-label="shippingMethods"
        value={value}
        onChange={handleChange}
      >
        {applicableShippingMethods.map(renderRadioButton)}
      </RadioGroup>
    </StyledShippingMethods>
  ) : null;
};

ShippingMethods.propTypes = {
  register: PropTypes.func,
};

export default ShippingMethods;
