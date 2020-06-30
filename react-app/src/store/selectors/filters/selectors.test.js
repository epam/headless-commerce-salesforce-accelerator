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

import { selectRefinements, selectSelectedRefinements } from "./selectors";

describe("refinements selectors", () => {
  const store = {
    filterRefinements: {
      refinements: [],
      selectedRefinements: [],
    },
  };
  describe("selectRefinemets", () => {
    it("should return all refinements from store", () => {
      expect(selectRefinements(store)).toEqual(
        store.filterRefinements.refinements
      );
    });
  });

  describe("selectSelectedRefinements", () => {
    it("should return all selected refinements from store", () => {
      expect(selectSelectedRefinements(store)).toEqual(
        store.filterRefinements.selectedRefinements
      );
    });
  });
});
