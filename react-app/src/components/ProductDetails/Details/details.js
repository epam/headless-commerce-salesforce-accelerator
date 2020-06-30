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
import StyledTypography from "components/core/Typography";
import sanitizeHtml from "sanitize-html";

import {
  selectProductLongDescription,
  selectProductResources,
} from "store/selectors/product/selectors";

const Details = () => {
  const details = useSelector(selectProductLongDescription);
  const resources = useSelector(selectProductResources);

  return (
    details && (
      <>
        <StyledTypography
          fontSize={24}
          lineheight={32}
          colortheme="mineShaft"
          margin="0 0 24px"
        >
          {resources.details}
        </StyledTypography>
        <StyledTypography
          colortheme="black"
          fontWeight="regular"
          margin="0 0 32px"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(details) }}
        />
      </>
    )
  );
};

export default Details;
