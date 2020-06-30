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
import ErrorIcon from "components/core/ErrorIcon";
import ErrorContainer from "./errorMessagesContainerStyled";

const ErrorMessagesContainer = ({ errorMessage = "" }) => (
  <Grid container>
    <ErrorContainer item xs={12}>
      <ErrorIcon />
      <StyledTypography
        fontSize={12}
        lineheight={16}
        fontWeight="regular"
        colortheme="mineshaft"
        width="83%"
      >
        {errorMessage}
      </StyledTypography>
    </ErrorContainer>
  </Grid>
);

ErrorMessagesContainer.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorMessagesContainer;
