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

const CarouselArrowIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.293 6.293a1 1 0 000 1.414L13.586 12l-4.293 4.293a1 1 0 101.415 1.414l4.858-4.859a1.2 1.2 0 000-1.697l-4.858-4.858a1 1 0 00-1.415 0z"
      fill="#222"
    />
  </svg>
);

export default CarouselArrowIcon;
