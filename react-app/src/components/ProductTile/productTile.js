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
import productTileAPI from "services/productTileAPI";
import PropTypes from "prop-types";
import ProductTileContent from "./productTileContent";
import ProductTileSkeleton from "./productTileSkeleton";

const ProductTile = ({ pid }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      productTileAPI.getProduct(pid).then((res) => {
        setProduct({ ...res.data.product, resources: res.data.resources });
        setLoading(false);
      });
    } catch (error) {
      setProduct(null);
      setLoading(false);
    }
  }, [pid]);

  return loading ? (
    <ProductTileSkeleton />
  ) : (
    <ProductTileContent product={product} />
  );
};

ProductTile.propTypes = {
  pid: PropTypes.string.isRequired,
};

export default ProductTile;
