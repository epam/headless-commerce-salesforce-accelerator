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

function Logo(props) {
  return (
    <svg width={170} height={40} viewBox="0 0 170 40" fill="none" {...props}>
      <path
        d="M11.953 27H8.86l-3.366-5.414-1.151.826V27H1.617V14.15h2.725v5.88l1.072-1.511 3.48-4.369h3.024l-4.482 5.687L11.953 27zm17.78-6.442c0 2.127-.527 3.761-1.582 4.904-1.054 1.143-2.566 1.714-4.535 1.714-1.968 0-3.48-.571-4.535-1.714-1.055-1.143-1.582-2.783-1.582-4.922s.527-3.77 1.582-4.895c1.06-1.131 2.578-1.697 4.553-1.697 1.974 0 3.483.569 4.526 1.705 1.049 1.137 1.573 2.772 1.573 4.905zm-9.378 0c0 1.435.273 2.516.818 3.243.545.726 1.36 1.09 2.443 1.09 2.174 0 3.261-1.445 3.261-4.333 0-2.895-1.081-4.342-3.243-4.342-1.084 0-1.902.366-2.452 1.098-.551.727-.826 1.808-.826 3.244zM42.337 27l-3.094-10.081h-.079c.111 2.05.167 3.419.167 4.104V27h-2.434V14.15h3.709l3.04 9.827h.053l3.226-9.827h3.709V27h-2.54v-6.082c0-.287.003-.618.008-.993.012-.375.053-1.371.124-2.989h-.08L44.834 27h-2.496zm21.48 0l-3.093-10.081h-.08c.112 2.05.168 3.419.168 4.104V27h-2.435V14.15h3.709l3.041 9.827h.053l3.225-9.827h3.71V27h-2.54v-6.082c0-.287.002-.618.008-.993.012-.375.053-1.371.123-2.989h-.079L66.314 27h-2.497zM86.952 23.918L87.927 27H91l-4.766-13h-3.487L78 27h3.073l.975-3.082.718-2.302c.957-2.982 1.536-4.85 1.739-5.606.049.213.128.502.239.868.116.366.625 1.945 1.527 4.738l.68 2.302z"
        fill="#000"
      />
    </svg>
  );
}

export default Logo;
