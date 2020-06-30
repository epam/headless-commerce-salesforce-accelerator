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

import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

/** UI Components */
import Grid from "@material-ui/core/Grid";

/** Components */
import RemoveProductBtn from "./removeProductBtn";
import EditProductBtn from "./editProductBtn";
import ProductPrice from "../ProductPrice";
import SelectMinMax from "../core/SelectMinMax";
import NumericArrowIcon from "../core/NumericArrowIcon";
import {
  StyledProductItem,
  StyledProductBanner,
  StyledProductItemVariation,
  StyledProductName,
  StyledProductQuantity,
  StyledTotal,
  StyledProductControls,
  StyledProductPrice,
  StyledQuantity,
  StyledProductProperty,
  StyledValue,
  StyledProductItemDetails,
  StyledNotAvailableLabel,
} from "./productItemStyled";

/** Helpers */
import debounce from "../../helpers";

const ProductItem = ({
  productName,
  id,
  uuid,
  type,
  availabilityMsg = "",
  available,
  price,
  quantity,
  totalPrice,
  banner,
  maxQuantityAvailable,
  isPreview = false,
  isInOrder = false,
  deleteProductFromCart,
  updateProductQuantity,
  variation = [],
  updateProductInCart,
}) => {
  const [hasError, setHasError] = useState("");
  const [quantityValue, setQuantityValue] = useState(quantity);
  const MAX_QUANTITY_INPUT_LENGTH = 3;
  useEffect(() => setQuantityValue(quantity), [quantity]);

  useEffect(() => {
    if (!available) {
      setHasError(availabilityMsg[0]);
    }
  }, [availabilityMsg, available]);

  const debouncedUpdateQuantity = useCallback(
    debounce((value) => updateProductQuantity(id, uuid, value || 1), 1000),
    []
  );

  const handleProductQuantityChange = ({ target }) => {
    const { value } = target;
    const formattedValue = `${value}`;

    setQuantityValue(value || 1);
    if (
      value &&
      (value > maxQuantityAvailable ||
        formattedValue.length > MAX_QUANTITY_INPUT_LENGTH)
    ) {
      setHasError("Adjust the quantity");
      setQuantityValue(
        parseInt(formattedValue.substring(0, MAX_QUANTITY_INPUT_LENGTH), 10)
      );
      debouncedUpdateQuantity(value || 1);

      return;
    }

    debouncedUpdateQuantity(value || 1);
    setHasError("");
  };

  const renderSelectedVariation = () => {
    return [
      ...variation,
      {
        displayName: "Availability",
        displayValue: available ? (
          availabilityMsg.join()
        ) : (
          <StyledNotAvailableLabel>Out of Stock</StyledNotAvailableLabel>
        ),
      },
    ]?.map(({ displayName, displayValue }, key) => (
      <StyledProductProperty key={key}>
        <Grid container>
          <Grid item xs={6}>
            <span>{displayName}:</span>
          </Grid>
          <Grid item xs={6}>
            <StyledValue>{displayValue}</StyledValue>
          </Grid>
        </Grid>
      </StyledProductProperty>
    ));
  };

  return (
    <StyledProductItem
      isPreview={isPreview}
      isInOrder={isInOrder}
      available={!available}
    >
      <StyledProductBanner
        isPreview={isPreview}
        src={banner}
        alt="product banner"
      />

      <StyledProductItemDetails>
        <StyledProductItemVariation>
          <StyledProductName
            to={`/product/${id}`}
            available={available.toString()}
          >
            {productName}
          </StyledProductName>
          {!isPreview && variation && renderSelectedVariation()}
          {isPreview && (
            <StyledProductPrice isPreview available={available}>
              <StyledQuantity>{quantity} x</StyledQuantity>
              <ProductPrice price={price} type={type} />
            </StyledProductPrice>
          )}
        </StyledProductItemVariation>
        {!isPreview && (
          <>
            <StyledProductPrice available={available}>
              <ProductPrice price={price} type={type} />
            </StyledProductPrice>
            <StyledProductQuantity>
              <SelectMinMax
                value={parseFloat(quantityValue)}
                min={1}
                max={maxQuantityAvailable}
                width={88}
                height={40}
                IconComponent={NumericArrowIcon}
                handleChange={handleProductQuantityChange}
                error={Boolean(hasError)}
              />
            </StyledProductQuantity>
            <StyledTotal available={available}>{totalPrice}</StyledTotal>
          </>
        )}
      </StyledProductItemDetails>

      <StyledProductControls>
        {!isInOrder && (
          <RemoveProductBtn
            deleteProductFromCart={deleteProductFromCart}
            id={id}
            uuid={uuid}
          />
        )}
        {!isPreview && (
          <EditProductBtn
            updateProductInCart={updateProductInCart}
            id={id}
            uuid={uuid}
          />
        )}
      </StyledProductControls>
    </StyledProductItem>
  );
};

ProductItem.propTypes = {
  productName: PropTypes.string,
  totalPrice: PropTypes.string,
  id: PropTypes.string,
  uuid: PropTypes.string,
  banner: PropTypes.string,
  type: PropTypes.string,
  availabilityMsg: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.shape({}),
  variation: PropTypes.arrayOf(PropTypes.shape({})),
  maxQuantityAvailable: PropTypes.number,
  quantity: PropTypes.number,
  isPreview: PropTypes.bool,
  isInOrder: PropTypes.bool,
  available: PropTypes.bool,
  deleteProductFromCart: PropTypes.func,
  updateProductQuantity: PropTypes.func,
  updateProductInCart: PropTypes.func,
};

export default ProductItem;
