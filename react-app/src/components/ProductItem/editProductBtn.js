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
import { useDispatch, useSelector } from "react-redux";

/** Actions */
import productActions from "store/actions/product/actions";

/** Components */
import EditProductDialog from "components/Cart/EditProductDialog";
import Button from "components/core/Button";
import EditIcon from "components/core/EditIcon";

/** Custom Hooks */
import useModal from "components/core/Modal/hooks";

/** Selectors */
import {
  selectProductQuantities,
  selectProductId,
} from "store/selectors/product/selectors";

const EditProductBtn = ({ updateProductInCart, id, uuid }) => {
  const { isOpen, handleModalChange } = useModal();
  const quantity = useSelector(selectProductQuantities);
  const productId = useSelector(selectProductId);
  const dispatch = useDispatch();

  const handleClick = () => {
    handleModalChange(true)();
    dispatch(productActions.getProductById(id));
  };

  const updateProduct = () => {
    handleModalChange(false)();
    const [quantityValue] = quantity?.filter((el) => el.selected);
    updateProductInCart(productId, uuid, quantityValue.value);
  };

  return (
    <>
      <Button size="sm" icon={<EditIcon />} plain onClick={handleClick} />
      <EditProductDialog
        updateProductInCart={updateProduct}
        id={id}
        open={isOpen}
        handleClose={handleModalChange(false)}
      />
    </>
  );
};

EditProductBtn.propTypes = {
  updateProductInCart: PropTypes.func,
  id: PropTypes.string,
  uuid: PropTypes.string,
};

export default EditProductBtn;
