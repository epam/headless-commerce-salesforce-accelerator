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
import PropTypes from "prop-types";

/** UI Components */
import Grid from "@material-ui/core/Grid";

/** Components */
import StyledTypography from "components/core/Typography";

const CartTotals = ({ totals, resources }) => {
  const totalResources = () => {
    const resourcesArr = [
      { subTotal: resources.subTotal },
      { shippingCost: resources.shippingCost },
      { tax: resources.tax },
      { estimatedTotal: resources.estimatedTotal },
    ];
    return resourcesArr.map((resource, i) => {
      const keyValue = Object.keys(resource)[0];
      return (
        <StyledTypography
          key={keyValue}
          fontSize={14}
          lineheight={24}
          margin="8px 0 0 0"
          colortheme="mineShaft"
          fontWeight={resourcesArr.length !== i + 1 ? "regular" : "semiBold"}
        >
          {resource[keyValue]}
        </StyledTypography>
      );
    });
  };

  const totalCosts = () => {
    const costArr = [
      { subTotal: totals.subTotal },
      { totalShippingCost: totals.totalShippingCost },
      { totalTax: totals.totalTax },
      { grandTotal: totals.grandTotal },
    ];
    return costArr.map((total, i) => {
      const keyValue = Object.keys(total)[0];
      return (
        <StyledTypography
          key={keyValue}
          fontSize={14}
          lineheight={24}
          margin="8px 0 0 0"
          colortheme="mineShaft"
          fontWeight={costArr.length !== i + 1 ? "regular" : "semiBold"}
          align="right"
        >
          {total[keyValue]}
        </StyledTypography>
      );
    });
  };

  return resources && totals ? (
    <Grid container>
      <Grid item xs={8}>
        {totalResources(resources)}
      </Grid>
      <Grid item xs={4}>
        {totalCosts(totals)}
      </Grid>
    </Grid>
  ) : null;
};

CartTotals.propTypes = {
  totals: PropTypes.shape({
    subTotal: PropTypes.string,
    totalShippingCost: PropTypes.string,
    totalTax: PropTypes.string,
    grandTotal: PropTypes.string,
  }),
  resources: PropTypes.shape({
    subTotal: PropTypes.string,
    shippingCost: PropTypes.string,
    tax: PropTypes.string,
    estimatedTotal: PropTypes.string,
  }),
};

export default CartTotals;
