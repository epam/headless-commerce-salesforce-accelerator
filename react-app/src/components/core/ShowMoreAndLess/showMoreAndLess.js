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

/** UI Components */
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

/** Components */
import ShowMoreLessWrapperStyled from "./showMoreAndLessStyled";
import StyledTypography from "../Typography";

const ShowMoreAndLess = ({ itemToShow, setItemToShow, items }) => {
  const isAllItems = itemToShow === items.length;
  const title = `show ${isAllItems ? "less" : "more"}`;
  const newItemToShow = isAllItems ? 15 : items.length;
  return (
    <ShowMoreLessWrapperStyled onClick={() => setItemToShow(newItemToShow)}>
      {isAllItems ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      <StyledTypography margin="0px 8px">{title}</StyledTypography>
    </ShowMoreLessWrapperStyled>
  );
};

ShowMoreAndLess.propTypes = {
  itemToShow: PropTypes.number.isRequired,
  setItemToShow: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      selected: PropTypes.bool,
      displayValue: PropTypes.string,
      handleChange: PropTypes.func,
      id: PropTypes.string,
    })
  ),
};

export default ShowMoreAndLess;
