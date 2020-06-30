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
import Rating from "@material-ui/lab/Rating";
import StyledTypography from "components/core/Typography";

import {
  selectProductRating,
  selectProductId,
} from "store/selectors/product/selectors";
import StyledRatingAndNumber from "./ratingAndNumberStyled";

const RatingAndNumber = () => {
  const productId = useSelector(selectProductId);
  const rating = useSelector(selectProductRating);

  return (
    <StyledRatingAndNumber>
      <div className="rating">
        <Rating
          name="read-only"
          value={rating}
          size="small"
          precision={0.5}
          readOnly
        />
      </div>
      <StyledTypography
        as="span"
        fontSize={12}
        fontWeight="regular"
        lineheight={16}
        colortheme="rollingStone"
      >
        {productId}
      </StyledTypography>
    </StyledRatingAndNumber>
  );
};

export default RatingAndNumber;
