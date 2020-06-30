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

/** Components */
import StyledTypography from "components/core/Typography";
import {
  ProductLineTableLayout,
  StyledHeadingItem,
} from "../CartProductLineItemsTableStyled";

/** Constants */
import tableCells from "./constants";

const productLineTableHeader = () => (
  <ProductLineTableLayout height={40} item container xs={12} header="true">
    <StyledHeadingItem product>
      <StyledTypography
        textalign="center"
        fontSize={12}
        lineheight={16}
        colortheme="mineShaft"
      >
        Product
      </StyledTypography>
    </StyledHeadingItem>
    <StyledHeadingItem price key={tableCells[0].cellName}>
      <StyledTypography
        {...tableCells[0].textParams}
        fontSize={12}
        lineheight={16}
        colortheme="mineShaft"
      >
        {tableCells[0].cellName}
      </StyledTypography>
    </StyledHeadingItem>
    <StyledHeadingItem quantity key={tableCells[1].cellName}>
      <StyledTypography
        {...tableCells[1].textParams}
        fontSize={12}
        lineheight={16}
        colortheme="mineShaft"
      >
        {tableCells[1].cellName}
      </StyledTypography>
    </StyledHeadingItem>
    <StyledHeadingItem total key={tableCells[2].cellName}>
      <StyledTypography
        {...tableCells[2].textParams}
        fontSize={12}
        lineheight={16}
        colortheme="mineShaft"
      >
        {tableCells[2].cellName}
      </StyledTypography>
    </StyledHeadingItem>
  </ProductLineTableLayout>
);
export default productLineTableHeader;
