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
import Grid from "@material-ui/core/Grid";
import StyledTypography from "components/core/Typography";

import {
  selectProductAttributes,
  selectProductResources,
  selectProductName,
} from "store/selectors/product/selectors";
import { StyledTitle, StyledSections } from "./attributesStyled";

const Attributes = () => {
  const attributes = useSelector(selectProductAttributes);
  const resources = useSelector(selectProductResources);
  const productName = useSelector(selectProductName);

  return (
    attributes && (
      <>
        <StyledTitle>
          <span className="title">{resources.attributes}</span>{" "}
          <span className="product-name">{productName}</span>
        </StyledTitle>
        <StyledSections>
          {attributes.length > 0 &&
            attributes.map((section) => (
              <div className="section" key={section.ID}>
                <StyledTypography margin="0 0 8px">
                  {section.name}
                </StyledTypography>
                {section.attributes.map((item) => (
                  <Grid container item xs={12} key={item.label}>
                    <Grid item xs={4}>
                      <StyledTypography
                        fontWeight="regular"
                        fontSize={12}
                        lineheight={16}
                      >
                        {item.label}
                      </StyledTypography>
                    </Grid>
                    <Grid item xs={8}>
                      <StyledTypography
                        fontWeight="regular"
                        fontSize={12}
                        lineheight={16}
                      >
                        {item.value}
                      </StyledTypography>
                    </Grid>
                  </Grid>
                ))}
              </div>
            ))}
        </StyledSections>
      </>
    )
  );
};

export default Attributes;
