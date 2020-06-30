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

const NoImage = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6h14v7.586l-4.222-4.222a1.1 1.1 0 00-1.556 0L10 12.586l-1.222-1.222a1.1 1.1 0 00-1.556 0L5 13.586V6zm0 10.414V18h14v-1.586l-5-5-3.222 3.222a1.1 1.1 0 01-1.556 0L8 13.414l-3 3zM3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
      fill="#CACDCE"
    />
  </svg>
);

export default NoImage;
