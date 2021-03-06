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
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/** UI Components */
import StyledTypography from "components/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

/** Components */
import { selectResources } from "store/selectors/filters/selectors";
import {
  SelectedFiltersHeader,
  SelectedFiltersWrapper,
  SelectedFiltersDetails,
  ChipStyled,
} from "./selectedFiltersStyled";

const SelectedFilters = ({ selectedFilters = [], handleChange, resetAll }) => {
  const resources = useSelector(selectResources);

  return (
    <SelectedFiltersWrapper>
      {resources && (
        <SelectedFiltersHeader>
          <StyledTypography>{resources.selectedFilters}</StyledTypography>
          <StyledTypography
            colortheme="punch"
            onClick={resetAll}
            cursor="pointer"
          >
            {resources.resetAll}
          </StyledTypography>
        </SelectedFiltersHeader>
      )}
      <SelectedFiltersDetails>
        {selectedFilters.map(({ displayValue, url }) => (
          <ChipStyled
            onDelete={handleChange(url)}
            deleteIcon={<CloseIcon />}
            variant="outlined"
            label={displayValue}
            key={displayValue}
          />
        ))}
      </SelectedFiltersDetails>
    </SelectedFiltersWrapper>
  );
};

SelectedFilters.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.shape),
  handleChange: PropTypes.func.isRequired,
  resetAll: PropTypes.func.isRequired,
};

export default SelectedFilters;
