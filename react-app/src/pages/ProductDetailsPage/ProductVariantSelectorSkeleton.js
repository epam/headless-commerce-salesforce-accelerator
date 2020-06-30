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
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";

const VariantSelectorSkeleton = ({ isBundle = false }) => (
  <ContentLoader viewBox="0 0 900 900" width="100%" speed={2}>
    <circle cx="15" cy="15" r="15" />
    <circle cx="55" cy="15" r="15" />
    <circle cx="95" cy="15" r="15" />
    <circle cx="135" cy="15" r="15" />

    <rect x="0" y="50" rx="0" ry="0" width="70%" height="32" />
    <rect x="0" y="95" rx="0" ry="0" width="20%" height="20" />

    <rect x="0" y="155" rx="0" ry="0" width="10%" height="50" />

    {isBundle ? (
      <>
        <rect x="0" y="235" rx="0" ry="0" width="10%" height="20" />
        <rect x="0" y="265" rx="0" ry="0" width="100%" height="10" />
        <rect x="0" y="300" rx="0" ry="0" width="20%" height="150" />

        <rect x="200" y="300" rx="0" ry="0" width="25%" height="20" />
        <rect x="200" y="340" rx="0" ry="0" width="15%" height="20" />
        <rect x="200" y="380" rx="0" ry="0" width="30%" height="20" />
        <rect x="200" y="420" rx="0" ry="0" width="25%" height="20" />

        <rect x="0" y="475" rx="0" ry="0" width="100%" height="10" />

        <rect x="0" y="510" rx="0" ry="0" width="20%" height="150" />

        <rect x="200" y="510" rx="0" ry="0" width="25%" height="20" />
        <rect x="200" y="550" rx="0" ry="0" width="15%" height="20" />
        <rect x="200" y="590" rx="0" ry="0" width="30%" height="20" />
        <rect x="200" y="630" rx="0" ry="0" width="25%" height="20" />

        <rect x="0" y="680" rx="0" ry="0" width="100%" height="10" />

        <rect x="0" y="730" rx="0" ry="0" width="10%" height="20" />
        <rect x="0" y="760" rx="0" ry="0" width="20%" height="50" />

        <rect x="0" y="840" rx="0" ry="0" width="30%" height="80" />
        <rect x="300" y="840" rx="0" ry="0" width="10%" height="80" />
      </>
    ) : (
      <>
        <rect x="0" y="235" rx="0" ry="0" width="15%" height="20" />
        <rect x="0" y="275" rx="0" ry="0" width="70" height="50" />

        <rect x="80" y="275" rx="0" ry="0" width="70" height="50" />
        <rect x="0" y="360" rx="0" ry="0" width="5%" height="20" />

        <rect x="0" y="390" rx="0" ry="0" width="30%" height="60" />
        <rect x="0" y="490" rx="0" ry="0" width="10%" height="20" />

        <rect x="0" y="560" rx="0" ry="0" width="10%" height="20" />
        <rect x="0" y="600" rx="0" ry="0" width="20%" height="60" />

        <rect x="0" y="690" rx="0" ry="0" width="30%" height="80" />
        <rect x="300" y="690" rx="0" ry="0" width="10%" height="80" />
      </>
    )}
  </ContentLoader>
);

VariantSelectorSkeleton.propTypes = {
  isBundle: PropTypes.bool,
};

export default VariantSelectorSkeleton;
