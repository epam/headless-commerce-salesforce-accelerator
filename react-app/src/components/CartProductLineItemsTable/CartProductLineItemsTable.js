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

/** Selectors */
import { selectItems, selectTotals } from "store/selectors/cart/selectors";

/** UI Components */
import Grid from "@material-ui/core/Grid";

/** Components */
import ProductItem from "components/ProductItem";
import ProductLineTableHeader from "./ProductLineTableHeader";
import ProductLineTableFooter from "./ProductLineTableFooter";
import { ProductLineItems } from "./CartProductLineItemsTableStyled";

const CartProductLineItemsTable = () => {
  const productLineItems = useSelector(selectItems);
  const totals = useSelector(selectTotals);

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
      }) => {
        return (
          <ProductItem
            key={id}
            id={id}
            uuid={UUID}
            productName={productName}
            price={price}
            banner={images.small[0].absURL}
            images={images}
            quantity={quantity}
            type={productType}
            availabilityMsg={availability?.messages}
            available={available}
            maxQuantityAvailable={quantityOptions.maxOrderQuantity}
            totalPrice={priceTotal?.price}
            variation={variationAttributes}
            productType={productType}
          />
        );
      }
    );
  };

  return (
    <Grid container>
      <ProductLineTableHeader />
      <Grid item container xs={12}>
        <ProductLineItems>{renderProductLineItems()}</ProductLineItems>
      </Grid>
      <ProductLineTableFooter subTotalPrice={totals?.subTotal} />
    </Grid>
  );
};

export default CartProductLineItemsTable;
