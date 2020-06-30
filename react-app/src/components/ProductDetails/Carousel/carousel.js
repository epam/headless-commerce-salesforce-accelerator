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

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectProductImages } from "store/selectors/product/selectors";
import CarouselContent from "./carouselContent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [mainNavigation, setMainNavigation] = useState(null);
  const [secondaryNavigation, setSecondaryNavigation] = useState(null);
  const [withArrows, setWithArrows] = useState(false);
  const productImages = useSelector(selectProductImages);
  const mainSlider = useRef();
  const secondarySlider = useRef();

  const SLIDES_AMOUNT = 6; // Represents how many slides are shown in the second slider

  const setMainSlider = (slider) => {
    mainSlider.current = slider;
  };
  const setSecondarySlider = (slider) => {
    secondarySlider.current = slider;
  };

  useEffect(() => {
    setMainNavigation(mainSlider.current);
    setSecondaryNavigation(secondarySlider.current);
    setWithArrows(productImages.length > SLIDES_AMOUNT);
  }, [productImages.length]);

  return (
    productImages.length > 0 && (
      <CarouselContent
        withArrows={withArrows}
        slidesAmount={SLIDES_AMOUNT}
        productImages={productImages}
        mainNavigation={mainNavigation}
        secondaryNavigation={secondaryNavigation}
        setMainSlider={setMainSlider}
        setSecondarySlider={setSecondarySlider}
      />
    )
  );
};

export default Carousel;
