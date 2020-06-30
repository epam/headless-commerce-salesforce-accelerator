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
import StyledTypography from "components/core/Typography";
import {
  selectProductResources,
  selectProductAvailabilityMsg,
  selectProductAvailable,
  selectProductReadyToOrder,
} from "store/selectors/product/selectors";

const AvailabilityLabel = () => {
  const resources = useSelector(selectProductResources);
  const availabilityMsg = useSelector(selectProductAvailabilityMsg);
  const readyToOrder = useSelector(selectProductReadyToOrder);
  const available = useSelector(selectProductAvailable);

  const renderAvailabilityMsg = () => {
    if (available) {
      if (readyToOrder) {
        return availabilityMsg;
      }
      return resources.info_selectforstock;
    }
    return availabilityMsg;
  };

  return (
    <>
      <StyledTypography
        as="span"
        colortheme="rollingStone"
        fontWeight="regular"
        margin="0 8px 0 0"
      >
        {resources?.availability}:
      </StyledTypography>
      <StyledTypography as="span" colortheme="mineShaft" fontWeight="regular">
        {renderAvailabilityMsg()}
      </StyledTypography>
    </>
  );
};

export default AvailabilityLabel;
