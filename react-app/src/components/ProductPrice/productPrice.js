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

const ProductPrice = ({
  price,
  productType,
  startingFromLabel = "Starting from",
}) => {
  const renderCommonPrice = () => {
    const salesPrice = price?.sales?.formatted;
    const listPrice = price?.list?.formatted;

    return salesPrice ? (
      <div className="price">
        <span>{salesPrice}</span>
        {listPrice && <span className="list">{listPrice}</span>}
      </div>
    ) : null;
  };

  const renderRangePrice = () => {
    const minPrice = price?.min?.sales?.formatted;
    const maxPrice = price?.max?.sales?.formatted;

    return (
      minPrice &&
      maxPrice && (
        <div className="price">
          <span>{minPrice}</span> - <span>{maxPrice}</span>
        </div>
      )
    );
  };

  const renderProductSetPrice = () => {
    const salesPrice = price?.sales?.formatted;
    const minPrice = price?.min?.sales?.formatted;

    return (
      (salesPrice || minPrice) && (
        <div className="price">
          {startingFromLabel} <span>{salesPrice || minPrice}</span>
        </div>
      )
    );
  };

  if (productType === "set") {
    return renderProductSetPrice();
  }

  if (price?.type === "range") {
    return renderRangePrice();
  }

  return renderCommonPrice();
};

ProductPrice.propTypes = {
  price: PropTypes.shape({
    type: PropTypes.string,
    min: PropTypes.shape({
      sales: PropTypes.shape({
        formatted: PropTypes.string,
      }),
    }),
    max: PropTypes.shape({
      sales: PropTypes.shape({
        formatted: PropTypes.string,
      }),
    }),
    list: PropTypes.shape({
      formatted: PropTypes.string,
    }),
    sales: PropTypes.shape({
      formatted: PropTypes.string,
    }),
  }),
  productType: PropTypes.string,
};

export default ProductPrice;
