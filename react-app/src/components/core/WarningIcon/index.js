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

function WarningIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.597 19.054L12 5.92l7.404 13.135H4.597zm6.58-15.568a.939.939 0 011.646 0l9.048 16.055c.366.648-.091 1.459-.822 1.459H2.95c-.73 0-1.188-.81-.822-1.46l9.048-16.054zM13 17a1 1 0 11-2 0 1 1 0 012 0zm0-3a1 1 0 11-2 0v-3a1 1 0 112 0v3z"
        fill="#FFC000"
      />
    </svg>
  );
}

export default WarningIcon;
