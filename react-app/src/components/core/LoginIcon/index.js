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

function LoginIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2a1 1 0 100 2h5a1 1 0 011 1v14a1 1 0 01-1 1h-5a1 1 0 100 2h5a3 3 0 003-3V5a3 3 0 00-3-3h-5zm-9 9a1 1 0 100 2h7.02l-1.777 1.778a1 1 0 101.414 1.414l3.536-3.535a1 1 0 000-1.414l-.011-.01-3.525-3.526a1 1 0 10-1.414 1.414L11.12 11H4z"
        fill="#000"
      />
    </svg>
  );
}

export default LoginIcon;
