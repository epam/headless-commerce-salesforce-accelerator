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

import React from "react";
import ContentLoader from "react-content-loader";

const DescriptionSkeleton = () => (
  <ContentLoader viewBox="0 0 1200 100" width="100%" height={100} speed={2}>
    <rect x="0" y="0" rx="0" ry="0" width="20%" height={20} />
    <rect x="0" y="30" rx="0" ry="0" width="100%" />
  </ContentLoader>
);

export default DescriptionSkeleton;
