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

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import SliderNavBtn from "./sliderNavBtn";

import commonSliderSettings from "./constants";

const MainSlider = ({ images, secondarySlider, setMainSlider }) => {
  const secondarySliderElement = useRef(null);

  useEffect(() => {
    secondarySliderElement.current = document.querySelector(
      ".secondary-slider"
    );
  }, []);

  const beforeChange = (current, next) => {
    const activeSlides = secondarySliderElement.current.querySelectorAll(
      ".slick-active"
    );

    secondarySliderElement.current.querySelector(
      ".slick-slide[data-selected=true]"
    ).dataset.selected = false;

    secondarySliderElement.current.querySelector(
      `.slick-slide[data-index="${next}"]`
    ).dataset.selected = true;

    if (next > activeSlides[activeSlides.length - 1].dataset.index) {
      secondarySlider.slickNext();
    }

    if (next < activeSlides[0].dataset.index) {
      secondarySlider.slickPrev();
    }
  };

  const settings = {
    ...commonSliderSettings,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <SliderNavBtn />,
    prevArrow: <SliderNavBtn />,
    beforeChange,
  };

  return (
    <div className="main-slider">
      <Slider
        {...settings}
        ref={(slider) => {
          setMainSlider(slider);
        }}
      >
        {images.map((image) => (
          <div key={image.index} className="image-wrapper">
            <img className="image" src={image.absURL} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

MainSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string,
      index: PropTypes.string,
      title: PropTypes.string,
      absURL: PropTypes.string,
    })
  ),
  secondarySlider: PropTypes.shape({
    slickNext: PropTypes.func,
    slickPrev: PropTypes.func,
  }),
  setMainSlider: PropTypes.func,
};

export default MainSlider;
