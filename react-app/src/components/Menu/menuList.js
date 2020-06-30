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
import PropTypes from "prop-types";

import Arrow from "components/core/ArrowIcon";
import MenuItem from "./menuItem";

const MenuList = ({ menuItems }) => {
  if (menuItems?.length > 0) {
    return menuItems.map((category) => {
      return (
        <MenuItem key={category.id} className="dropdown" category={category}>
          {category?.subCategories && (
            <>
              <Arrow />
              <div className="dropdown-menu">
                <MenuList menuItems={category.subCategories} />
              </div>
            </>
          )}
        </MenuItem>
      );
    });
  }
  return null;
};

MenuList.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      isPLP: PropTypes.bool,
      url: PropTypes.string,
      complexSubCategories: PropTypes.bool,
      subCategories: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.string,
          isPLP: PropTypes.bool,
          url: PropTypes.string,
          complexSubCategories: PropTypes.bool,
        })
      ),
    })
  ),
};

export default MenuList;
