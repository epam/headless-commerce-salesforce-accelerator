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
import Notification from "./notification";

storiesOf("Notification", module)
  .addDecorator((story) => (
    <ThemeProvider>
      <div style={{ margin: "20px", width: "900px" }}>{story()}</div>
    </ThemeProvider>
  ))
  .add("info notification", () => (
    <Notification type="info" heading="Info">
      Some info here
    </Notification>
  ))
  .add("error notification", () => (
    <Notification type="error" heading="Error">
      Oops! It`s an error
    </Notification>
  ))
  .add("warning notification", () => (
    <Notification type="warning" heading="Warning">
      Pay attention to this warning
    </Notification>
  ))
  .add("success notification", () => (
    <Notification type="success" heading="Success">
      Cool! It`s successful!
    </Notification>
  ));
