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

const CheckboxCheckedIcon = ({ disabled, checked = false }) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <rect
        x={2.5}
        y={2.5}
        width={19}
        height={19}
        rx={1.5}
        fill="#fff"
        stroke="#D9DCDD"
      />
      {checked && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.913 11.783a.82.82 0 000 1.159l2.899 2.899L9.972 17l1.159-1.16 6.956-6.956a.82.82 0 00-1.16-1.16l-6.956 6.957-2.898-2.898a.82.82 0 00-1.16 0z"
          fill={disabled ? "#D9DCDD" : "#222"}
        />
      )}
    </svg>
  );
};

CheckboxCheckedIcon.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CheckboxCheckedIcon;
