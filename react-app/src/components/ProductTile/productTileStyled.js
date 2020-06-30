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
import Grid from "@material-ui/core/Grid";

export const ProductTileWrapper = styled(Grid)`
  padding: 16px !important;
`;

export const ProductTileStyled = styled.div`
  position: relative;
  height: 100%;
  box-shadow: none;
  transition: box-shadow 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 1px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.iron};
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  &:hover {
    box-shadow: 0px 4px 16px rgba(15, 31, 48, 0.1);

    &:after {
      opacity: 0;
    }

    .product-id {
      display: block;
    }
  }

  .product-tile {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    min-height: 340px;
    box-sizing: border-box;

    .image {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }

    .rating {
      display: flex;
      margin: 8px 0;
    }

    .product-link {
      text-decoration: none;
    }

    .title {
      margin-bottom: 8px;
      font-size: 14px;
    }

    .price {
      margin-top: auto;
      font-size: 16px;

      .list {
        margin-left: 8px;
        color: ${(props) => props.theme.colors.rollingStone};
        text-decoration: line-through;
      }
    }

    .title {
      font: ${(props) => props.theme.font("semiBold", 14, 24)};
    }

    .price {
      font: ${(props) => props.theme.font("semiBold", 16, 24)};
    }

    .title,
    .price {
      color: ${(props) => props.theme.colors.black};
    }
  }

  .image-container {
    position: relative;
  }

  .product-id {
    position: absolute;
    display: none;
    padding: 4px;
    font: ${({ theme }) => theme.font("regular", 12)};
    color: ${({ theme }) => theme.colors.mineShaft};
  }

  .no-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 238px;
    background-color: ${(props) => props.theme.colors.whisper};

    .text {
      line-heigth: 16px;
      font-size: 12px;
      color: ${(props) => props.theme.colors.gullGrey};
    }
  }
`;
