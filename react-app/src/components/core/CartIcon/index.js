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

const CartIcon = (props) => {
  return (
    <svg width={120} height={120} viewBox="0 0 120 120" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 12.867c0-1.031.895-1.867 2-1.867h28c1.105 0 2 .836 2 1.867V28h14a2 2 0 012 2v16h-2V30H76v8.067c0 .515-.448.933-1 .933s-1-.418-1-.933V30H46v8.067c0 .515-.448.933-1 .933s-1-.418-1-.933V30H30v76h60V86h2v20a2 2 0 01-2 2H30a2 2 0 01-2-2V30a2 2 0 012-2h14V12.867zm30 0V28H46V12.867h28zM91.011 80.02c7.737 0 14.01-6.273 14.01-14.01s-6.273-14.01-14.01-14.01-14.01 6.273-14.01 14.01 6.273 14.01 14.01 14.01zm0 2.001a15.95 15.95 0 0010.597-4.008.907.907 0 00.074.083l6.64 6.64c.367.367.981.347 1.372-.043.39-.391.41-1.005.043-1.372l-6.64-6.64a.826.826 0 00-.083-.074 15.953 15.953 0 004.008-10.597c0-8.843-7.168-16.011-16.01-16.011C82.167 50 75 57.168 75 66.011s7.168 16.011 16.011 16.011z"
        fill="#CBCDCE"
      />
    </svg>
  );
};

export default CartIcon;
