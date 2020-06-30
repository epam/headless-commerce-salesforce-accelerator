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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { StylesProvider } from "@material-ui/core/styles";
import productActions from "store/actions/product/actions";
import Select from "components/core/Select";

import { selectProductResources } from "store/selectors/product/selectors";

const Selector = ({ variation = {} }) => {
  const dispatch = useDispatch();
  const { displayName, resetUrl, values, id } = variation;
  const resources = useSelector(selectProductResources);

  const handleChange = (e) => {
    dispatch(
      productActions.getProductVariation(
        values.find((value) => value.value === e.target.value)?.url || resetUrl
      )
    );
  };

  return (
    values && (
      <StylesProvider injectFirst>
        <Select
          values={values}
          firstOptionContent={`${resources.select} ${displayName}`}
          handleChange={handleChange}
          defaultValue={values.find((value) => value.selected)?.value}
          width={184}
          height={40}
          label={displayName}
          iconisrotated
        />
        {id === "size" && (
          <Link to="/#" className="size-chart-link">
            {resources.sizeChart}
          </Link>
        )}
      </StylesProvider>
    )
  );
};

Selector.propTypes = {
  variation: PropTypes.shape({
    id: PropTypes.string,
    displayName: PropTypes.string,
    resetUrl: PropTypes.string,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        selected: PropTypes.bool,
        displayValue: PropTypes.string,
        url: PropTypes.string,
        id: PropTypes.string,
        description: PropTypes.oneOfType([
          PropTypes.oneOf([null]),
          PropTypes.string,
        ]),
        selectable: PropTypes.bool,
        value: PropTypes.string,
      })
    ),
  }),
};

export default Selector;
