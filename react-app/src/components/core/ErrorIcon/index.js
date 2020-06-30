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

function ErrorIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5a7 7 0 100 14 7 7 0 000-14zm0-2a9 9 0 100 18 9 9 0 000-18zm1 9a1 1 0 11-2 0V9a1 1 0 112 0v3zm-1 4a1 1 0 100-2 1 1 0 000 2z"
        fill="#DA3232"
      />
    </svg>
  );
}

export default ErrorIcon;
