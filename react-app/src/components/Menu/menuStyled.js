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

const MenuStyled = styled.div`
  .nav-item {
    list-style: none;
    padding: 8px 16px;
    letter-spacing: 0;
    text-transform: capitalize;

    &:hover {
      background-color: ${(props) => props.theme.colors.athensGray};
    }
  }

  .dropdown {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      & > .dropdown-menu {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .dropdown-menu {
    font: ${(props) => props.theme.font("regular", 14, 24)};
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 1;
    display: none;
    width: 160px;
    padding-left: 0;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 2px 8px rgba(15, 31, 48, 0.15);
    border-radius: 2px;

    .dropdown {
      & > .arrow-icon {
        width: 24px;
        height: 24px;
        path {
          fill: ${(props) => props.theme.colors.dimGray};
        }
      }

      &:hover {
        & > .arrow-icon {
          path {
            fill: ${(props) => props.theme.colors.black};
          }
        }
      }
    }
  }

  .nav-link {
    padding-right: 4px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .nav > .nav-item {
    font: ${(props) => props.theme.font("bold", 12)};
    letter-spacing: ${(props) => props.theme.pxToRem(1)};
    text-transform: uppercase;
  }

  .nav {
    display: flex;
    padding-left: 0;
    margin-left: -16px;

    & > .nav-item:hover {
      background-color: transparent;
    }

    & > .nav-item + .nav-item {
      margin-left: 32px;
    }

    & > .dropdown {
      & > .arrow-icon {
        transform: rotate(90deg);
        width: 24px;
        height: 24px;
      }

      &:hover > .arrow-icon {
        transform: rotate(-90deg);
      }

      & > .dropdown-menu {
        top: 100%;
        left: 0;
      }
    }
  }
`;
export default MenuStyled;
