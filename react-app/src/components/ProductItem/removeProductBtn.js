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

/** Components */
import RemoveProductDialog from "components/Cart/RemoveProductDialog";
import Button from "components/core/Button";
import DeleteIcon from "components/core/DeleteIcon";

/** Custom Hooks */
import useModal from "components/core/Modal/hooks";

const RemoveProductBtn = ({ deleteProductFromCart, id, uuid }) => {
  const { isOpen, handleModalChange } = useModal();

  return (
    <>
      <Button
        size="sm"
        icon={<DeleteIcon />}
        plain
        onClick={handleModalChange(true)}
      />
      <RemoveProductDialog
        open={isOpen}
        handleClose={handleModalChange(false)}
        deleteProductFromCart={deleteProductFromCart}
        id={id}
        uuid={uuid}
      />
    </>
  );
};

RemoveProductBtn.propTypes = {
  deleteProductFromCart: PropTypes.func,
  id: PropTypes.string,
  uuid: PropTypes.string,
};

export default RemoveProductBtn;
