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
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

import getMainTheme from "./theme";

const muiTheme = createMuiTheme({
  overrides: {
    MuiGrid: {
      container: {
        "&$spacing-xs-3": {
          margin: 0 - 12,
        },
      },

      item: {
        "&$grid-xs-9": {
          marginTop: -12,
        },
      },
    },
  },
});

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: "Open Sans";
  }

  #root {
    height: 100%;
  }
  .storefront-app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;

export default function GlobalThemeProvider({ children }) {
  const getTheme = React.useCallback(() => getMainTheme(), []);

  return (
    <ThemeProvider theme={getTheme()}>
      <MuiThemeProvider theme={muiTheme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

GlobalThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
