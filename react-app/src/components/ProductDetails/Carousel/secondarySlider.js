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

import React, { useEffect } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import SliderNavBtn from "./sliderNavBtn";

import commonSliderSettings from "./constants";

const SecondarySlider = ({
  images,
  mainSlider,
  setSecondarySlider,
  withArrows,
  slidesAmount,
}) => {
  const settings = {
    ...commonSliderSettings,
    slidesToShow: withArrows ? slidesAmount : images.length,
    arrows: withArrows,
    nextArrow: <SliderNavBtn />,
    prevArrow: <SliderNavBtn />,
    focusOnSelect: false,
  };

  const clickHandler = (e) => {
    const slide = e.currentTarget.closest(".slick-slide");
    mainSlider.slickGoTo(slide.dataset.index);
  };

  useEffect(() => {
    document.querySelector(
      ".secondary-slider .slick-current"
    ).dataset.selected = "true";
  }, []);

  return (
    <div className="secondary-slider">
      <Slider
        {...settings}
        ref={(slider) => {
          setSecondarySlider(slider);
        }}
      >
        {images.map((image) => (
          <div
            key={image.index}
            className="image-wrapper"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            role="button"
            tabIndex="0"
          >
            <img className="image" src={image.absURL} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

SecondarySlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string,
      index: PropTypes.string,
      title: PropTypes.string,
      absURL: PropTypes.string,
    })
  ),
  mainSlider: PropTypes.shape({
    slickGoTo: PropTypes.func,
  }),
  setSecondarySlider: PropTypes.func,
  withArrows: PropTypes.bool,
  slidesAmount: PropTypes.number,
};

export default SecondarySlider;
