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

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/** UI Components */
import { StylesProvider } from "@material-ui/core/styles";
import checkoutPaths from "./constants";

import TopBar from "./TopBar/topBar";
import SearchBar from "./SearchBar/searchBar";
import NavigationBar from "./NavigationBar/navigationBar";
import BreadCrumbs from "./Breadcrumbs/breadcrumbs";
import CheckoutHeader from "../CheckoutHeader";

import StyledHeader from "./styledHeader";

const Header = () => {
  const { pathname } = useLocation();
  const [shouldRenderComponent, setShouldRenderComponent] = useState(true);
  useEffect(() => {
    if (checkoutPaths.includes(pathname)) {
      setShouldRenderComponent(false);
    } else {
      setShouldRenderComponent(true);
    }
  }, [pathname]);
  return (
    <StylesProvider injectFirst>
      {shouldRenderComponent ? (
        <>
          <StyledHeader>
            <TopBar />
            <SearchBar />
            <NavigationBar />
          </StyledHeader>
          <BreadCrumbs />
        </>
      ) : (
        <CheckoutHeader />
      )}
    </StylesProvider>
  );
};

export default Header;
