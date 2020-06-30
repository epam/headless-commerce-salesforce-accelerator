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

function DeleteIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.667 5L10 6H7.4a.4.4 0 00-.4.4V8h10V6.4a.4.4 0 00-.4-.4H10h4l-.667-1h-2.666zM9 18a1 1 0 01-1-1V9h8v8a1 1 0 01-1 1H9z"
        fill="#CBCDCE"
      />
    </svg>
  );
}

export default DeleteIcon;
