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
import StyledCarousel from "./carouselStyled";
import MainSlider from "./mainSlider";
import SecondarySlider from "./secondarySlider";

const CarouselContent = ({
  withArrows,
  slidesAmount,
  productImages,
  mainNavigation,
  secondaryNavigation,
  setMainSlider,
  setSecondarySlider,
}) => (
  <StyledCarousel className="carousel-wrapper" withArrows={withArrows}>
    <MainSlider
      images={productImages}
      secondarySlider={secondaryNavigation}
      setMainSlider={setMainSlider}
    />
    <SecondarySlider
      images={productImages}
      mainSlider={mainNavigation}
      setSecondarySlider={setSecondarySlider}
      withArrows={withArrows}
      slidesAmount={slidesAmount}
    />
  </StyledCarousel>
);

CarouselContent.propTypes = {
  productImages: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string,
      index: PropTypes.string,
      title: PropTypes.string,
      absURL: PropTypes.string,
    })
  ),
  mainNavigation: PropTypes.shape({
    slickGoTo: PropTypes.func,
  }),
  secondaryNavigation: PropTypes.shape({
    slickNext: PropTypes.func,
    slickPrev: PropTypes.func,
  }),
  setMainSlider: PropTypes.func,
  setSecondarySlider: PropTypes.func,
  withArrows: PropTypes.bool,
  slidesAmount: PropTypes.number,
};

export default CarouselContent;
