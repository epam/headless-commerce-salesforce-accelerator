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
import { storiesOf } from "@storybook/react";

import ThemeProvider from "../../../globalThemeProvider";
import { NumericInput, TextInput } from "./input";

storiesOf("Input", module)
  .addDecorator((story) => (
    <ThemeProvider>
      <div style={{ margin: "20px", width: "760px" }}>{story()}</div>
    </ThemeProvider>
  ))
  .add("numeric input", () => <NumericInput value={3} min={1} max={5} />)
  .add("numeric input disabled", () => (
    <NumericInput value={3} min={1} max={5} disabled />
  ))
  .add("numeric input with error", () => (
    <NumericInput value={3} min={1} max={5} error="Adjust the quantity" />
  ))
  .add("input standart", () => <TextInput label="Label" />)
  .add("input disabled", () => <TextInput label="Label" disabled />)
  .add("input invalid", () => (
    <TextInput label="Label" error="error text" required />
  ))
  .add("input valid", () => (
    <TextInput label="Label" valid title="Please enter a valid email address" />
  ));
