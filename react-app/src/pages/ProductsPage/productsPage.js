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

import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import productsActions from "store/actions/products/actions";

import filterRefinementsActions from "store/actions/filters/actions";
import {
  selectProductsIds,
  selectProductsCategory,
  selectProductsResultCount,
  selectIsProductsLoading,
} from "store/selectors/products/selectors";
import {
  selectRefinements,
  selectSelectedRefinements,
} from "store/selectors/filters/selectors";

import FiltersPanel from "components/FiltersPanel";
import ProductGrid from "components/ProductsGrid";
import Pagination from "components/Pagination";
import ScrollToTopController from "components/core/ScrollToTopController";
import StyledProductsPage from "./productsPageStyled";
import SearchResultsLabel from "./searchResultsLabel";
import StyledSearchResults from "./searchResultsStyled";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const productsIds = useSelector(selectProductsIds);
  const category = useSelector(selectProductsCategory);
  const resultsCount = useSelector(selectProductsResultCount);
  const refinements = useSelector(selectRefinements);
  const selectedRefinements = useSelector(selectSelectedRefinements);
  const isProductsLoading = useSelector(selectIsProductsLoading);

  useEffect(() => {
    dispatch(productsActions.getProducts(search));
    dispatch(filterRefinementsActions.getFilterRefinementsStart(search));
  }, [dispatch, search]);

  const productsGrid = useMemo(
    () => (
      <Grid item xs={9}>
        <Grid container justify="center">
          <ProductGrid
            productsIds={productsIds}
            isProductsLoading={isProductsLoading}
          />
        </Grid>
      </Grid>
    ),
    [isProductsLoading, productsIds]
  );

  const filtersPanel = useMemo(
    () => (
      <Grid item xs={3}>
        <FiltersPanel
          refinements={refinements}
          selectedRefinements={selectedRefinements}
          searchUrl={search}
        />
      </Grid>
    ),
    [refinements, search, selectedRefinements]
  );

  return (
    <StyledProductsPage>
      <ScrollToTopController />
      <div>
        <SearchResultsLabel query={category} amount={resultsCount} />
      </div>

      <StyledSearchResults>
        <Grid container>
          {filtersPanel}
          {productsGrid}
        </Grid>
      </StyledSearchResults>
      <Pagination />
    </StyledProductsPage>
  );
};

export default ProductsPage;
