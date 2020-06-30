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

import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { StylesProvider } from "@material-ui/core/styles";

/** Components */
import ShowMoreAndLess from "components/core/ShowMoreAndLess";
import Accordion from "components/core/Accordion";
import {
  ColorsFilter,
  PriceFilter,
  BrandFilter,
  SizeFilter,
} from "components/Filters";
import SelectedFilters from "./SelectedFilters";

const filtersType = {
  Price: PriceFilter,
  Brand: BrandFilter,
  Color: ColorsFilter,
  Size: SizeFilter,
};

const FiltersPanel = ({
  refinements = [],
  selectedRefinements = [],
  searchUrl = "",
}) => {
  const VISIBLE_ITEMS_COUNT = 15;

  const history = useHistory();
  const [itemToShow, setItemToShow] = useState(VISIBLE_ITEMS_COUNT);
  const {
    query: { cgid },
  } = queryString.parseUrl(searchUrl);

  const parsePriceQuery = (query) => {
    let { pmin, pmax } = query;
    pmin = pmin.replace(",", "");
    pmax = pmax.replace(",", "");
    return { ...query, pmin: parseInt(pmin, 10), pmax: parseInt(pmax, 10) };
  };

  const handleChange = useCallback(
    (selectedUrl, selectable = true, selected) => () => {
      if (!selectable && !selected) return;
      let { query } = queryString.parseUrl(selectedUrl);
      const { hasOwnProperty } = Object.prototype;
      if (
        hasOwnProperty.call(query, "pmin") &&
        hasOwnProperty.call(query, "pmax")
      ) {
        query = parsePriceQuery(query);
      }
      history.push(`?${queryString.stringify(query)}`);
    },
    [history]
  );

  const getFilterComponent = useCallback(
    ({ displayName, displayValue, selected, url, id, selectable = true }) => {
      const RendererComponent = filtersType[displayName] || filtersType.Price;

      return (
        (selectable || selected) && (
          <RendererComponent
            handleChange={handleChange(url, selectable, selected)}
            displayValue={displayValue}
            selected={selected}
            id={id}
            key={displayValue}
            disabled={!selectable}
          />
        )
      );
    },
    [handleChange]
  );

  const renderFilter = useCallback(
    ({ displayName, values }) => {
      const direction =
        displayName === "Color" || displayName === "Size" ? "row" : "column";

      return (
        values.length && (
          <Accordion name={displayName} key={displayName} direction={direction}>
            {values
              .slice(0, itemToShow)
              .map((filter) => getFilterComponent({ ...filter, displayName }))}
            {direction === "column" && values.length > VISIBLE_ITEMS_COUNT && (
              <ShowMoreAndLess
                itemToShow={itemToShow}
                setItemToShow={setItemToShow}
                items={values}
                moreItemsText
              />
            )}
          </Accordion>
        )
      );
    },
    [getFilterComponent, itemToShow]
  );

  return (
    <StylesProvider injectFirst>
      {selectedRefinements.length > 0 && (
        <SelectedFilters
          selectedFilters={selectedRefinements}
          handleChange={handleChange}
          resetAll={() => history.push(`?cgid=${cgid}`)}
        />
      )}
      {refinements.map(renderFilter)}
    </StylesProvider>
  );
};

FiltersPanel.propTypes = {
  refinements: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(PropTypes.shape),
    })
  ),
  selectedRefinements: PropTypes.arrayOf(
    PropTypes.shape({
      displayValue: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  searchUrl: PropTypes.string,
};

export default FiltersPanel;
