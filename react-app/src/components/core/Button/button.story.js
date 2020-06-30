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

import React, { useEffect, useRef } from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "../../../globalThemeProvider";
import Button from "./button";
import BagIcon from "../ShoppingBagIcon";

storiesOf("Button", module)
  .addDecorator((story) => (
    <ThemeProvider>
      <div style={{ margin: "20px", width: "900px" }}>{story()}</div>
    </ThemeProvider>
  ))
  .add("button regular large", () => <Button>Submit</Button>)
  .add("button regular small", () => <Button size="sm">Submit</Button>)
  .add("button icon only", () => <Button icon={<BagIcon />} />)
  .add("button plain icon only", () => <Button icon={<BagIcon />} plain />)
  .add("button iconed", () => <Button icon={<BagIcon />}>Add to Cart</Button>)
  .add("button iconed in focus", () =>
    React.createElement(() => {
      const ref = useRef(null);
      useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <Button ref={ref} icon={<BagIcon />}>
          Add to Cart
        </Button>
      );
    })
  )
  .add("button iconed disabled", () => (
    <Button disabled icon={<BagIcon />}>
      Add to Cart
    </Button>
  ))
  .add("button link", () => (
    <Router>
      <Button link="/home" variant="link">
        View Cart
      </Button>
    </Router>
  ))
  .add("button link in focus", () =>
    React.createElement(() => {
      const ref = useRef(null);
      useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <Router>
          <Button ref={ref} link="/home" variant="link">
            View Cart
          </Button>
        </Router>
      );
    })
  )

  .add("secondary button", () => (
    <Router>
      <Button variant="secondary">Cancel</Button>
    </Router>
  ))

  .add("button link disabled", () => (
    <Router>
      <Button link="/home" variant="link" disabled>
        View Cart
      </Button>
    </Router>
  ));
