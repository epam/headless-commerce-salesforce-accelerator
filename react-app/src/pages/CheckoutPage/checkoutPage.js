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
import { useLocation } from "react-router";
import queryString from "query-string";

import { selectItems } from "store/selectors/cart/selectors";

/** UI Components */
import Grid from "@material-ui/core/Grid";

/** Components */
import StyledTypography from "components/core/Typography";
import FormsContainer from "components/Checkout/FormsContainer";
import ProductItem from "components/ProductItem";
import CheckoutTotal from "components/Checkout/CheckoutTotal";

/** Actions */
import checkoutActions from "store/actions/checkout/actions";
import CheckoutPageContainer from "./checkoutPageContainer";

import {
  StyledOrderedProductItems,
  StyledOrderItemsHeading,
  StyledCheckoutSidePanel,
} from "./checkoutPageStyled";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const productLineItems = useSelector(selectItems);
  const params = queryString.parse(search);

  useEffect(() => {
    dispatch(checkoutActions.checkoutBegin(params.stage || "SHIPPING"));
  }, [dispatch, params.stage]);

  const renderProductLineItems = () => {
    return productLineItems?.map(
      ({
        productName,
        id,
        UUID,
        quantity,
        images,
        price,
        productType,
        availability,
        available,
        priceTotal,
        quantityOptions,
        variationAttributes,
      }) => (
        <ProductItem
          key={id}
          id={id}
          uuid={UUID}
          productName={productName}
          price={price}
          banner={images.small[0].absURL}
          quantity={quantity}
          type={productType}
          availabilityMsg={availability?.messages}
          available={available}
          maxQuantityAvailable={quantityOptions.maxOrderQuantity}
          totalPrice={priceTotal?.price}
          variation={variationAttributes}
          isPreview
          isInOrder
        />
      )
    );
  };

  return (
    <CheckoutPageContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledTypography
            variant="h1"
            fontSize={32}
            lineheight={48}
            colortheme="mineShaft"
            margin="0 0 24px"
          >
            Checkout
          </StyledTypography>
        </Grid>
        <Grid item xs={8}>
          <FormsContainer />
        </Grid>
        <Grid item xs={4}>
          <StyledCheckoutSidePanel>
            <CheckoutTotal />
            <StyledOrderItemsHeading>Order Items</StyledOrderItemsHeading>
            <StyledOrderedProductItems>
              {renderProductLineItems()}
            </StyledOrderedProductItems>
          </StyledCheckoutSidePanel>
        </Grid>
      </Grid>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
