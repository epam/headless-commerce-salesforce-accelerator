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

function CloseIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.72 7.28a.954.954 0 00-1.348 0L12 10.65 8.628 7.28A.954.954 0 107.28 8.63L10.651 12 7.28 15.372a.954.954 0 001.35 1.349L12 13.349l3.372 3.372a.954.954 0 001.349-1.35l-3.372-3.37 3.372-3.373a.954.954 0 000-1.349z"
        fill="#CBCDCE"
      />
    </svg>
  );
}

export default CloseIcon;
