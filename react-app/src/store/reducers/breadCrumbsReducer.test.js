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

import { createStore } from "redux";

import reducer from "./breadCrumbsReducer";
import actions from "../actions/breadCrumbsActions";

describe("breadCrumbsReducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("is expected to have initial state", () => {
    expect(store.getState()).toEqual([]);
  });

  it("is expected handle GET_BREADCRUMBS__START", () => {
    const expectedState = [
      { htmlValue: "Mens" },
      { htmlValue: "Clothing" },
      { htmlValue: "Dress Shirts" },
      { htmlValue: "No-Iron Textured Dress Shirt" },
    ];
    const response = [
      { htmlValue: "No-Iron Textured Dress Shirt" },
      { htmlValue: "Dress Shirts" },
      { htmlValue: "Clothing" },
      { htmlValue: "Mens" },
    ];

    store.dispatch(actions.getBreadCrumbs(response));

    const actualState = store.getState();
    expect(actualState).toEqual(expectedState);
  });
});
