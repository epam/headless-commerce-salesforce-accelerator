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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";

import actions from "store/actions/user/actions";
import {
  selectLoginFormFields,
  selectLoginFormResources,
  selectUserCsrfToken,
} from "store/selectors/user/selectors";

import Login from "components/Login";
import GuestCheckout from "components/Checkout/GuestCheckout";
import Form from "components/core/Form";
import StyledTypography from "components/core/Typography";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(selectLoginFormFields);
  const resources = useSelector(selectLoginFormResources);
  const csrfToken = useSelector(selectUserCsrfToken);

  useEffect(() => {
    dispatch(actions.getLoginForm());
  }, [dispatch]);

  return loginData ? (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledTypography
            variant="h1"
            fontSize={32}
            lineheight={48}
            colortheme="mineShaft"
            margin="0 0 24px"
          >
            {resources.checkout}
          </StyledTypography>
        </Grid>
        <Grid item xs={6}>
          <GuestCheckout resources={resources} />
        </Grid>
        <Grid item xs={6}>
          <StyledTypography
            variant="h3"
            fontSize={24}
            lineheight={32}
            colortheme="mineShaft"
            margin="0 0 24px"
          >
            {resources?.returningCustomers}
          </StyledTypography>
          <Form>
            <Login
              loginData={loginData}
              resources={resources}
              token={csrfToken}
              isCheckoutLogin
            />
          </Form>
        </Grid>
      </Grid>
    </>
  ) : null;
};

export default LoginPage;
