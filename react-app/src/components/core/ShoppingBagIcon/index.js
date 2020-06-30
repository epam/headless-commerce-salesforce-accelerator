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

function ShoppingBagIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4 2.6h3.2a.8.8 0 01.8.8v1.8H9.6V3.4a.8.8 0 01.8-.8zM8 6.8v1.4a.8.8 0 101.6 0V6.8h4.8v1.4a.8.8 0 001.6 0V6.8h2.4v13.6H5.6V6.8H8zm0-1.6V3.4A2.4 2.4 0 0110.4 1h3.2A2.4 2.4 0 0116 3.4v1.8h2.4A1.6 1.6 0 0120 6.8v13.6a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 20.4V6.8a1.6 1.6 0 011.6-1.6H8z"
        fill="#000"
      />
    </svg>
  );
}

export default ShoppingBagIcon;
