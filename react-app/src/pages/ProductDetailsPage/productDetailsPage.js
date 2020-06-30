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
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import productActions from "store/actions/product/actions";
import miniCartActions from "store/actions/cart/actions";
import {
  selectIsProductLoading,
  selectProductId,
  selectIsAvailableToOrder,
  selectProductQuantities,
  selectProductName,
  selectProductOption,
} from "store/selectors/product/selectors";

import Carousel from "components/ProductDetails/Carousel";
import SliderSkeleton from "components/core/SliderSkeleton";
import VariantSelectors from "components/ProductDetails/VariantSelectors";
import ScrollToTopController from "components/core/ScrollToTopController";
import Description from "components/ProductDetails/Description";
import Details from "components/ProductDetails/Details";
import Attributes from "components/ProductDetails/Attributes";
import ProductDetailsContainer from "./productDetailsContainer";
import VariantSelectorSkeleton from "./ProductVariantSelectorSkeleton";
import DescriptionSkeleton from "./productDescriptionSkeleton";
import Button from "../../components/core/Button";
import BagIcon from "../../components/core/ShoppingBagIcon";

const ProductDetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsProductLoading);
  const productId = useSelector(selectProductId);
  const isAvailableToOrder = useSelector(selectIsAvailableToOrder);
  const quantities = useSelector(selectProductQuantities);
  const productName = useSelector(selectProductName);
  const productOption = useSelector(selectProductOption);

  useEffect(() => {
    dispatch(productActions.getProductById(match.params.pid));
  }, [dispatch, match.params.pid]);

  const onAddToCart = () => {
    dispatch(
      miniCartActions.addProductToCart(
        productId,
        quantities.find((value) => value.selected).value,
        productName,
        productOption
      )
    );
  };

  return (
    <>
      <ScrollToTopController />
      {productId && (
        <ProductDetailsContainer>
          <Grid container spacing={3}>
            {isLoading ? (
              <>
                <Grid item xs={6}>
                  <SliderSkeleton />
                </Grid>
                <Grid item xs={6}>
                  <VariantSelectorSkeleton isBundle />
                </Grid>
                <Grid item xs={12}>
                  <DescriptionSkeleton />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6}>
                  <Carousel />
                </Grid>
                <Grid item xs={6}>
                  <VariantSelectors />
                  <Button
                    disabled={!isAvailableToOrder}
                    onClick={onAddToCart}
                    icon={<BagIcon />}
                    margin="24px 0 0 0"
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Description />
                  <Details />
                  <Attributes />
                </Grid>
              </>
            )}
          </Grid>
        </ProductDetailsContainer>
      )}
    </>
  );
};

ProductDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pid: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetailsPage;
