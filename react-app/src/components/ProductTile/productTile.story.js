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

import { storiesOf } from "@storybook/react";
import React from "react";

import ProductTileSkeleton from "./productTileSkeleton";

storiesOf("Product Tile", module)
  .addDecorator((story) => (
    <div style={{ margin: "20px", width: "270px" }}>{story()}</div>
  ))
  .add("Skeleton", () => <ProductTileSkeleton />);
