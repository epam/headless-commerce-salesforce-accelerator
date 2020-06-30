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
import { useDispatch, useSelector } from "react-redux";
import Select from "components/core/Select";
import cartActions from "store/actions/cart/actions";

import {
  selectShipments,
  selectShipmentUUID,
} from "store/selectors/cart/selectors";

const ShippingMethods = () => {
  const dispatch = useDispatch();
  const shipments = useSelector(selectShipments);
  const shipmentUUID = useSelector(selectShipmentUUID);

  const handleChange = (e) => {
    dispatch(
      cartActions.selectShippingMethod(e.currentTarget.value, shipmentUUID)
    );
  };

  const setShippingMethodDisplayValue = (methods) => {
    return methods.map((method) => {
      const updatedMethod = method;
      const { displayName, estimatedArrivalTime } = updatedMethod;
      if (displayName && estimatedArrivalTime) {
        updatedMethod.displayValue = `${displayName} (${estimatedArrivalTime})`;
      } else if (displayName) {
        updatedMethod.displayValue = displayName;
      }

      return updatedMethod;
    });
  };

  const { shippingMethods, selectedShippingMethod } = shipments;

  return shipments && shipmentUUID ? (
    <Select
      values={setShippingMethodDisplayValue(shippingMethods)}
      defaultValue={selectedShippingMethod}
      label="Shipping"
      width={320}
      handleChange={handleChange}
      iconisrotated
      fullWidth
      margin="0 0 16px"
    />
  ) : null;
};

export default ShippingMethods;
