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
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";
import productActions from "store/actions/product/actions";
import Select from "components/core/Select";
import NumericArrowIcon from "components/core/NumericArrowIcon";
import Loader from "components/core/Loader";

import api from "services/config/api";

import {
  selectProductQuantities,
  selectProductResources,
  selectProductQuantitiesAreLoading,
  selectProductAvailable,
} from "store/selectors/product/selectors";

const QuantitySelector = () => {
  const dispatch = useDispatch();
  const quantities = useSelector(selectProductQuantities);
  const resources = useSelector(selectProductResources);
  const areLoading = useSelector(selectProductQuantitiesAreLoading);
  const available = useSelector(selectProductAvailable);

  const handleChange = (e) => {
    dispatch(
      productActions.updateProductQuantity(
        api.host +
          quantities.find((value) => value.value === e.target.value).url
      )
    );
  };

  return (
    quantities && (
      <StylesProvider injectFirst>
        <Select
          values={quantities}
          defaultValue={quantities.find((quantity) => quantity.selected)?.value}
          width={88}
          height={40}
          label={resources?.quantity}
          IconComponent={NumericArrowIcon}
          handleChange={handleChange}
          error={!available}
          errorMsg={resources?.errorMsg}
        />
        {areLoading && <Loader />}
      </StylesProvider>
    )
  );
};

export default QuantitySelector;
