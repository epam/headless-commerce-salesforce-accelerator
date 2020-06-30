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

function SuccessIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 5a7 7 0 107 7l1.813-1.832a9 9 0 11-3.205-5.207L16.2 6.4A6.965 6.965 0 0012 5z"
        fill="#CEDB56"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.71 10.19a1.003 1.003 0 00-.001 1.418l3.53 3.53 1.418 1.418 1.42-1.42 7.77-7.77a1.003 1.003 0 10-1.418-1.417l-7.77 7.77-3.53-3.53a1.003 1.003 0 00-1.419 0z"
        fill="#CEDB56"
      />
    </svg>
  );
}

export default SuccessIcon;
