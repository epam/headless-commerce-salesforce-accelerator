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

import colors from "./colors";

const getMainTheme = () => {
  return {
    headerH: 160,
    topBarH: 32,
    searchBarH: 72,
    navBarH: 56,
    breadcrumbsH: 40,
    footerH: 331,
    fontSize: 14,
    gutter: 24,
    colLg: 74,
    colMd: 69,
    colSm: 60,
    contentWidth: 1200,
    breakpoints: {
      mobile: 992,
    },
    colors,
    font: (weight, size = 14, lineheight = 16) => {
      const styles = {
        bold: 700,
        semiBold: 600,
        regular: 400,
      };

      return `${weight in styles ? styles[weight] : weight} ${size / 16}rem/${
        lineheight / 16
      }rem "Open Sans", sans-serif`;
    },
    pxToRem: (value) => `${value / 16}rem`,
  };
};

export default getMainTheme;
