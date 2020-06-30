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
import ProductPrice from "components/ProductPrice";
import {
  selectProducPrice,
  selectProducType,
  selectProductVariation,
  selectProductResources,
} from "store/selectors/product/selectors";
import RatingAndNumber from "./RatingAndNumber";
import Title from "./Title";
import AvailabilityLabel from "./AvailabilityLabel";
import Swatches from "./Swatches";
import QuantitySelector from "./QuantitySelector";
import StyledVariantSelectors from "./variantSelectorsStyled";
import Selector from "./Selector";

const VariantSelectors = () => {
  const price = useSelector(selectProducPrice);
  const type = useSelector(selectProducType);
  const variations = useSelector(selectProductVariation);
  const resources = useSelector(selectProductResources);

  return (
    <StyledVariantSelectors>
      <RatingAndNumber />
      <Title />
      <AvailabilityLabel />
      <ProductPrice
        price={price}
        productType={type}
        startingFromLabel={resources?.startingFrom}
      />
      <Swatches />
      {variations?.map((variation) => {
        return (
          variation.id !== "color" && (
            <Selector key={variation.id} variation={variation} />
          )
        );
      })}
      <QuantitySelector />
    </StyledVariantSelectors>
  );
};

export default VariantSelectors;
