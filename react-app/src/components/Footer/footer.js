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

/** UI Components */
import { StylesProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

/** Components */
import StyledTypography from "components/core/Typography";
import Logo from "components/core/Logo";
import BottomBar from "./BottomBar/bottomBar";
import {
  StyledFooter,
  StyledFooterContent,
  StyledSubCategories,
  StyledLink,
} from "./styledFooter";

/** Constants */
import footerData from "./constants";

const Footer = () => {
  return (
    <StylesProvider injectFirst>
      <StyledFooter>
        <StyledFooterContent>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Logo />
              <StyledTypography
                fontSize={14}
                fontFamily="OpenSans"
                fontWeight="normal"
                width="77%"
                paragraph
              >
                {`Reseller and market leader No.1 
                in Europe. We provide best
                services and communication for our clients.`}
              </StyledTypography>
            </Grid>
            {footerData.map(({ title, subCategories }) => {
              return (
                <Grid item xs={3} key={title}>
                  <StyledTypography
                    letterSpacing={0.02}
                    texttransform="uppercase"
                    fontSize={12}
                    fontFamily="OpenSans"
                    fontWeight="bold"
                  >
                    {title}
                  </StyledTypography>
                  <StyledSubCategories>
                    {subCategories.map(({ name, url }) => (
                      <StyledLink key={name} href={url}>
                        {name}
                      </StyledLink>
                    ))}
                  </StyledSubCategories>
                </Grid>
              );
            })}
          </Grid>
        </StyledFooterContent>
        <BottomBar />
      </StyledFooter>
    </StylesProvider>
  );
};

export default Footer;
