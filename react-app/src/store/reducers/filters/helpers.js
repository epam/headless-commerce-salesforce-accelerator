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

export const getSelectedRefinements = (refinements) => {
  const selectedRefinements = [];
  refinements
    .filter((el) => el.displayName !== "Category")
    .forEach((ref) => {
      if (ref.values.length === 0) return selectedRefinements;
      return selectedRefinements.push(
        ...ref.values.filter((el) => el.selected)
      );
    });
  return selectedRefinements;
};

export const capitalizeFirstLetter = (string) => {
  const capitalizedStr = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedStr.replace(/([A-Z])/g, " $1").trim();
};

const changeDisplayName = (refinement) => {
  let displayName =
    refinement.values.length > 0
      ? refinement.values[0].id
      : refinement.displayName;
  displayName = capitalizeFirstLetter(displayName);
  return { ...refinement, displayName };
};

export const getFormattedRefinements = (refinements) => {
  const formattedRefinements = refinements.map((ref) =>
    ref.displayName === "Type" ? changeDisplayName(ref) : ref
  );
  return formattedRefinements.filter(
    (el) => el.displayName !== "Category" && el.displayName !== "New Arrival"
  );
};

export default {
  getSelectedRefinements,
  getFormattedRefinements,
  capitalizeFirstLetter,
};
