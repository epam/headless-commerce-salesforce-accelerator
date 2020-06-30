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
import { useLocation, useHistory } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import queryString from "query-string";

import {
  selectPagesAmount,
  selectPageSize,
  selectPageNumber,
} from "store/selectors/products/selectors";
import StyledPagination from "./paginationStyled";

const Pagination = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const pagesAmount = useSelector(selectPagesAmount);
  const pageSize = useSelector(selectPageSize);
  const pageNumber = useSelector(selectPageNumber);

  const handleChange = (e, value) => {
    const params = queryString.parse(search);
    params.start = (value - 1) * pageSize;
    const updatedSearch = `?${Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&")}`;
    history.push({
      pathname,
      search: updatedSearch,
    });
  };

  return (
    pageNumber >= 0 && (
      <StylesProvider injectFirst>
        <StyledPagination
          count={pagesAmount}
          page={pageNumber + 1}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </StylesProvider>
    )
  );
};

export default Pagination;
