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
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

/** Selectors */
import {
  selectUserStatus,
  selectUserData,
} from "store/selectors/user/selectors";

import Logo from "components/core/Logo";
import LoginIcon from "components/core/LoginIcon";
import MiniCart from "../../MiniCart";

import {
  StyledSearchBarMenu,
  StyledLoginMenu,
  StyledUserMenu,
  StyledDivider,
} from "./searchBarStyled";

const SearchBar = () => {
  const userStatus = useSelector(selectUserStatus);
  const userData = useSelector(selectUserData);
  const history = useHistory();
  const redirectToLogin = () => {
    history.push("/login");
  };

  return (
    <StyledSearchBarMenu>
      <Logo />

      <StyledUserMenu>
        <MiniCart />

        <StyledDivider />
        {userStatus === "AUTHENTICATED" || userStatus === "IDENTIFIED" ? (
          <div>{userData?.firstName}</div>
        ) : (
          <StyledLoginMenu onClick={redirectToLogin}>
            <div>Login</div>
            <LoginIcon />
          </StyledLoginMenu>
        )}
      </StyledUserMenu>
    </StyledSearchBarMenu>
  );
};

export default SearchBar;
