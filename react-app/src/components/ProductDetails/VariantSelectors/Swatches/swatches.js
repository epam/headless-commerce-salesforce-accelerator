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
import StyledTypography from "components/core/Typography";
import {
  selectProductSwatches,
  selectProductResources,
} from "store/selectors/product/selectors";
import Swatch from "../Swatch";
import StyledSwatches from "./swatchesStyled";

const Swatches = () => {
  const swatches = useSelector(selectProductSwatches);
  const resources = useSelector(selectProductResources);
  const selectedColor = swatches?.find((value) => value.selected)?.displayValue;
  return (
    swatches && (
      <StyledSwatches>
        <StyledTypography as="span" colortheme="mineShaft" margin="0 4px 0 0">
          {resources.color}:
        </StyledTypography>
        <StyledTypography as="span" fontWeight="regular">
          {selectedColor || resources.selectColor}
        </StyledTypography>
        <div className="swatches">
          {swatches.map((value) => (
            <Swatch
              key={value.id}
              bgImage={value.images.swatch[0].absURL}
              disabled={!value.selectable}
              url={value.url}
              selected={value.selected}
            />
          ))}
        </div>
      </StyledSwatches>
    )
  );
};

export default Swatches;
