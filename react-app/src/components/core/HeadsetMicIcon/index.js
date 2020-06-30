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

const HeadsetMicIcon = (props) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8v5c0 3.643.83 4.798 4 4.975A1 1 0 019 17h2a1 1 0 011 1v1a1 1 0 01-1 1H8v-.03c-3.95-.243-5.727-2.02-5.97-5.97H1a1 1 0 01-1-1V9a1 1 0 011-1h1c0-4.97 3.03-8 8-8 4.97 0 8 3.03 8 8h1a1 1 0 011 1v4a1 1 0 01-1 1h-3V8c0-3.866-2.134-6-6-6S4 4.134 4 8z"
        fill="#222"
      />
    </svg>
  );
};

export default HeadsetMicIcon;
