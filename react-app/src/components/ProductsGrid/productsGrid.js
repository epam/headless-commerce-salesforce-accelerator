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

import Grid from "@material-ui/core/Grid";

import { ProductTile, ProductTileSkeleton } from "../ProductTile";
import { ProductTileWrapper } from "../ProductTile/productTileStyled";

const ProductGrid = ({ productsIds, isProductsLoading }) => {
  const productTileSkeletons = Array.from({ length: 12 }, (tile, index) => (
    <Grid key={index} item xs={4}>
      <ProductTileSkeleton />
    </Grid>
  ));

  return (
    <Grid item container xs={12} spacing={3}>
      {productsIds.length === 0 ? (
        <>{productTileSkeletons}</>
      ) : (
        <>
          {productsIds.map((id) => (
            <ProductTileWrapper key={id} item xs={4}>
              <ProductTile pid={id} />
            </ProductTileWrapper>
          ))}
          {isProductsLoading && productTileSkeletons}
        </>
      )}
    </Grid>
  );
};

ProductGrid.propTypes = {
  productsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isProductsLoading: PropTypes.bool.isRequired,
};

export default ProductGrid;
