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

import styled from "styled-components";

const StyledCarousel = styled.div`
  .image-wrapper {
    .image {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }

  .slick-prev,
  .slick-next {
    &::before {
      display: none;
    }
  }

  .slick-arrow {
    z-index: 1;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.4);
  }

  .slick-prev {
    left: 0;
    transform: rotate(180deg) translateY(50%);
  }

  .slick-next {
    right: 0;
  }

  .slick-slide > div {
    display: flex;
  }

  .slick-slide {
    &:focus {
      outline: none;
    }

    & > div {
      display: flex;

      &:focus {
        outline: none;
      }
    }

    .image-wrapper {
      &:focus {
        outline: none;
      }
    }
  }

  .secondary-slider {
    margin-top: 16px;

    ${({ withArrows }) => {
      return withArrows
        ? `
        .slick-slider {
          overflow: hidden;
        }
    
        .slick-list {
          margin: 0 32px;
        }
    
        .slick-slide {
          padding: 0 8px;
          box-sizing: border-box;
        }
      `
        : `
        .slick-slide {
          max-width: 64px;
          margin-right: 16px;
        }
      `;
    }}

    .slick-arrow {
      width: auto;
      height: auto;
      background: none;
    }

    .slick-slide[data-selected="true"] {
      .image-wrapper {
        border-bottom: 2px solid ${({ theme }) => theme.colors.mineShaft};
      }
    }
  }

  .slick-disabled {
    path {
      fill: ${({ theme }) => theme.colors.dimGray};
    }
  }

  &.carousel-wrapper {
    max-width: 544px;
  }
`;

export default StyledCarousel;
