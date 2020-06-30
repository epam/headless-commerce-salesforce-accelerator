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

function EditIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.055 5.707a1 1 0 011.414 0l.826.827a1 1 0 010 1.414l-.786.787-2.241-2.241.787-.787zM14.52 7.241l2.241 2.24-7.469 7.47-2.24-2.241 7.468-7.47zM6.007 17.543a.4.4 0 00.453.452l2.086-.298-2.24-2.24-.299 2.086z"
        fill="#CBCDCE"
      />
    </svg>
  );
}

export default EditIcon;
