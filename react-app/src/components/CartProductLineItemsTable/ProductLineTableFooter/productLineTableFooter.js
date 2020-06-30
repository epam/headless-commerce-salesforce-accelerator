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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

/** UI Components */
import StyledTypography from "components/core/Typography";
import ContinueShoppingWrapper from "./productLineTableFooterStyled";
import { ProductLineTableLayout } from "../CartProductLineItemsTableStyled";

const ProductLineTableFooter = ({ subTotalPrice }) => (
  <ProductLineTableLayout height={64} item container xs={12}>
    <Grid item xs={8}>
      <ContinueShoppingWrapper href="/">
        <ArrowBackIosIcon />
        <StyledTypography colortheme="blue" fontWeight="regular">
          Continue Shopping
        </StyledTypography>
      </ContinueShoppingWrapper>
    </Grid>
    <Grid item xs={2}>
      <StyledTypography
        fontWeight="regular"
        colortheme="mineShaft"
        margin="0px 0px 0px 10px"
      >
        Subtotal:
      </StyledTypography>
    </Grid>
    <Grid item xs={2}>
      <StyledTypography margin="0px 0px 0px 15px">
        {subTotalPrice}
      </StyledTypography>
    </Grid>
  </ProductLineTableLayout>
);

ProductLineTableFooter.propTypes = {
  subTotalPrice: PropTypes.string,
};

export default ProductLineTableFooter;
