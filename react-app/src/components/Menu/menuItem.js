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

import React, { useMemo, useCallback } from "react";
import { useHistory } from "react-router-dom";

const MenuItem = ({ category, children }) => {
  const { id, isPLP, name } = category;
  const history = useHistory();

  const handleSelect = useCallback(
    (e) => {
      history.push(`${isPLP ? "/products" : "/categories"}?cgid=${id}`);

      e.stopPropagation();
      e.preventDefault();
    },
    [history, id, isPLP]
  );

  return useMemo(
    () => (
      <div
        key={id}
        role="link"
        tabIndex={id}
        className="nav-link nav-item dropdown"
        onClick={handleSelect}
        onKeyDown={handleSelect}
      >
        {name}
        {children}
      </div>
    ),
    [children, handleSelect, id, name]
  );
};

export default MenuItem;
