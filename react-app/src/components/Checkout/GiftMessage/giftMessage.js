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
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/** UI Components */
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

/** Components */
import CheckboxIcon from "components/core/CheckboxIcon";
import TextArea from "components/core/TextArea";
import StyledTypography from "components/core/Typography";
import {
  selectGiftMessageHeader,
  selectGiftMessageFieldData,
  selectIsGift,
} from "store/selectors/checkout/selectors";
import { StyledGiftMessage, StyledGiftTextArea } from "./giftMessageStyled";

const GiftMessage = ({ register, setValue }) => {
  const giftMessageHeader = useSelector(selectGiftMessageHeader);
  const giftMessageFieldData = useSelector(selectGiftMessageFieldData);
  const isGift = useSelector(selectIsGift);
  const [checked, setChecked] = useState(isGift.selected);

  const handleChange = useCallback(
    ({ target }) => {
      const { checked: isGiftMessage } = target;
      setChecked(isGiftMessage);
      if (!isGiftMessage) {
        setValue(giftMessageFieldData?.htmlName, "");
      }
    },
    [giftMessageFieldData, setValue]
  );

  return (
    <StyledGiftMessage>
      <div>
        <FormControlLabel
          label={
            <StyledTypography fontWeight="normal">
              {giftMessageHeader}
            </StyledTypography>
          }
          control={
            <Checkbox
              icon={<CheckboxIcon />}
              checked={checked}
              checkedIcon={<CheckboxIcon checked />}
              onChange={handleChange}
              inputRef={register && register()}
              name={isGift?.htmlName}
            />
          }
        />
      </div>
      <StyledGiftTextArea display={checked.toString()}>
        <TextArea
          name={giftMessageFieldData?.htmlName}
          id="noter-text-area"
          minLength={giftMessageFieldData?.minLength}
          maxLength={giftMessageFieldData?.maxLength}
          placeholder=""
          label={giftMessageFieldData?.label}
          register={register}
          defaultValue={giftMessageFieldData?.htmlValue}
        />
      </StyledGiftTextArea>
    </StyledGiftMessage>
  );
};

GiftMessage.propTypes = {
  register: PropTypes.func,
  setValue: PropTypes.func,
};

export default GiftMessage;
