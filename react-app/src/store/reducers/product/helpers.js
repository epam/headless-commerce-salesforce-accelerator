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

import productTypes from "./constants";

export const getSelectedProductOptions = (options) => {
  const selectedOptions = [];
  options.forEach(({ selectedValueId, id }) => {
    if (!selectedValueId || !id) return selectedOptions;
    return selectedOptions.push({
      selectedValueId,
      optionId: id,
    });
  });
  return JSON.stringify(selectedOptions);
};

export const formatStandardProduct = ({
  id,
  productName,
  rating,
  images,
  longDescription,
  variationAttributes,
  availability,
  readyToOrder,
  price,
  available,
  quantities,
  shortDescription,
  attributes,
}) => {
  return {
    id,
    rating,
    readyToOrder,
    available,
    name: productName,
    type: productTypes.STANDARD,
    slider: images.large,
    variation: variationAttributes,
    description: shortDescription,
    availabilityMsg: availability.messages.join(". "),
    price,
    quantities,
    details: longDescription,
    attributes,
  };
};

export const formatSetProduct = ({
  id,
  productName,
  images,
  individualProducts,
  price,
}) => {
  return {
    id,
    name: productName,
    type: productTypes.SET,
    slider: images.large,
    individualProducts: individualProducts.map(formatStandardProduct),
    price,
  };
};

export const formatBundleProduct = ({
  id,
  productName,
  bundledProducts,
  price,
}) => {
  return {
    id,
    name: productName,
    type: productTypes.BUNDLE,
    individualProducts: bundledProducts.map(formatStandardProduct),
    price,
  };
};

export const formatOptionProduct = ({
  id,
  productName,
  rating,
  images,
  longDescription,
  variationAttributes,
  availability,
  readyToOrder,
  price,
  available,
  quantities,
  shortDescription,
  attributes,
  options,
}) => {
  return {
    id,
    rating,
    readyToOrder,
    available,
    name: productName,
    type: productTypes.OPTION,
    slider: images.large,
    variation: variationAttributes,
    description: shortDescription,
    availabilityMsg: availability.messages.join(". "),
    price,
    quantities,
    details: longDescription,
    attributes,
    selectedOptions: getSelectedProductOptions(options),
  };
};

export const formatProductDetails = ({ productType, ...restDetails }) => {
  switch (productType) {
    case productTypes.STANDARD:
      return formatStandardProduct(restDetails);
    case productTypes.SET:
      return formatSetProduct(restDetails);
    case productTypes.BUNDLE:
      return formatBundleProduct(restDetails);
    case productTypes.OPTION:
      return formatOptionProduct(restDetails);
    default:
      return formatStandardProduct(restDetails);
  }
};
