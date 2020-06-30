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

import React, { useMemo } from "react";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductPrice from "../ProductPrice";
import { ProductTileStyled } from "./productTileStyled";
import ProductTileNoImage from "./productTileNoImage";

const ProductTileContent = ({ product }) => {
  const productImage = product?.images?.medium[0];

  const rating = useMemo(
    () =>
      product?.rating && (
        <div className="rating">
          <Rating
            name="read-only"
            value={product.rating}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
      ),
    [product]
  );

  return (
    product && (
      <ProductTileStyled className="product-wrapper">
        <div className="product-tile">
          {productImage?.absURL ? (
            <Link to={`/product/${product.id}`}>
              <div className="image-container">
                <div className="product-id">{product.id}</div>
                <img
                  src={productImage.absURL}
                  alt={productImage.alt}
                  className="image"
                />
              </div>
            </Link>
          ) : (
            <ProductTileNoImage />
          )}
          {rating}
          {product.productName && (
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="title">{product.productName}</div>
            </Link>
          )}
          {product.price && (
            <ProductPrice
              price={product.price}
              productType={product.productType}
              startingFromLabel={product?.resources?.startingFrom}
            />
          )}
        </div>
      </ProductTileStyled>
    )
  );
};

ProductTileContent.defaultProps = {
  product: null,
};

ProductTileContent.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.shape({
      medium: PropTypes.array,
    }),
    rating: PropTypes.number,
    productName: PropTypes.string,
    price: PropTypes.object,
    productType: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default ProductTileContent;
