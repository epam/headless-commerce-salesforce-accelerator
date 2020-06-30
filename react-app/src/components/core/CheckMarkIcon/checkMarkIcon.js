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

import * as React from "react";

const CheckMarkIcon = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.696 11.739a.984.984 0 000 1.391l3.478 3.478L9.565 18l1.392-1.391 8.347-8.348a.984.984 0 10-1.391-1.392l-8.348 8.348-3.478-3.478a.984.984 0 00-1.391 0z"
      fill="#000"
    />
  </svg>
);

export default CheckMarkIcon;
