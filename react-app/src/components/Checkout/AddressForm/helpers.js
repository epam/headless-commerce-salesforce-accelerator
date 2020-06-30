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

export const createInputProps = (data) => {
  return {
    id: data?.htmlName,
    name: data?.htmlName,
    labelName: data?.label,
    required: !!data?.mandatory,
    pattern: data?.regEx,
    defaultValue: data?.htmlValue,
    ...data,
  };
};

export const renameKey = (object, key, newKey) => {
  const clonedObj = { ...object };
  const targetKey = clonedObj[key];

  delete clonedObj[key];
  clonedObj[newKey] = targetKey;

  return clonedObj;
};

export const modifyRequestData = (data) => {
  const modifiedData = Object.entries(data).map((el) => [
    el[0].split("_").pop(),
    el[1],
  ]);
  let newDataObject = Object.fromEntries(modifiedData);
  newDataObject = renameKey(newDataObject, "country", "countryCode");
  return newDataObject;
};

export const createErrorsObject = (errors) => {
  const errorObject = errors?.map((el) => {
    const entries = Object.entries(el);
    return entries.map(([name, message]) => {
      return {
        type: "required",
        name,
        message,
      };
    });
  });

  return errorObject.flat();
};
