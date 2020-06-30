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
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

/** UI Components */
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

/** Component */
import StyledTypography from "components/core/Typography";
import {
  StyledBreadcrumbs,
  StyledBreadcrumbsContent,
} from "./breadcrumbsStyled";

/** Constants */
import pagePaths from "./constants";

const BreadCrumbs = () => {
  const { pathname, search } = useLocation();
  const [shouldRenderComponent, setShouldRenderComponent] = useState(true);
  const history = useHistory();
  const breadcrumbsData = useSelector((state) => state.breadcrumbs);

  const handleClick = (queryId, isPdp) => () => {
    let query = queryId ? `/products?cgid=${queryId}` : `/products`;
    if (isPdp) {
      query = `/product/${queryId}`;
    }

    history.push(query);
  };

  useEffect(() => {
    if (pagePaths.includes(pathname) || (pathname === "/products" && !search)) {
      setShouldRenderComponent(false);
    } else {
      setShouldRenderComponent(true);
    }
  }, [pathname, search]);

  return (
    <StyledBreadcrumbs>
      <StyledBreadcrumbsContent>
        {shouldRenderComponent && (
          <Breadcrumbs
            separator={
              <ArrowRightIcon
                fontSize="small"
                style={{ fill: "black", width: "16px", height: "16px" }}
              />
            }
            aria-label="breadcrumb"
          >
            <StyledTypography
              onClick={handleClick("")}
              fontWeight="normal"
              fontFamily="OpenSans"
              cursor="pointer"
            >
              Home
            </StyledTypography>

            {pathname !== "/login" &&
              breadcrumbsData.length > 0 &&
              breadcrumbsData.map(({ htmlValue, cgid, pid }, i) => (
                <StyledTypography
                  fontWeight="normal"
                  fontFamily="OpenSans"
                  key={cgid || pid}
                  onClick={handleClick(cgid || pid, !!pid)}
                  colortheme={
                    breadcrumbsData.length === i + 1 ? "rollingStone" : "black"
                  }
                  cursor="pointer"
                >
                  {htmlValue}
                </StyledTypography>
              ))}
            {pathname === "/login" && (
              <StyledTypography
                fontWeight="normal"
                fontFamily="OpenSans"
                colortheme="rollingStone"
                cursor="pointer"
              >
                Login
              </StyledTypography>
            )}
          </Breadcrumbs>
        )}
      </StyledBreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};

export default BreadCrumbs;
