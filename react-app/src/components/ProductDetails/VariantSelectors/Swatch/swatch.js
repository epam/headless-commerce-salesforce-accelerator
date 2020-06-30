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
import { useDispatch } from "react-redux";
import productActions from "store/actions/product/actions";
import StyledSwatch from "./swatchStyled";

const Swatch = ({ bgImage, disabled, url, selected }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!disabled) {
      dispatch(productActions.getProductVariation(url));
    }
  };

  return (
    <StyledSwatch
      bgImage={bgImage}
      disabled={disabled}
      selected={selected}
      onClick={clickHandler}
    >
      <div className="swatch" />
    </StyledSwatch>
  );
};

Swatch.propTypes = {
  bgImage: PropTypes.string,
  disabled: PropTypes.bool,
  url: PropTypes.string,
  selected: PropTypes.bool,
};

export default Swatch;
