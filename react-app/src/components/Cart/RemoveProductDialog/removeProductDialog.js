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
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/** Selectors */
import { selectCartResources } from "store/selectors/cart/selectors";

/** Components */
import Modal from "components/core/Modal";
import {
  StyledDialogContentText,
  StyledDialogContent,
} from "./removeProductStyled";

const RemoveProductDialog = ({
  open,
  handleClose,
  deleteProductFromCart,
  id,
  uuid,
}) => {
  const resources = useSelector(selectCartResources);

  const clickHandler = () => {
    deleteProductFromCart(id, uuid);
  };

  return (
    <Modal
      isOpen={open}
      handleClose={handleClose}
      modalTitle={resources?.cartRemoveProduct}
      submitAction={clickHandler}
      submitButtonText={resources?.remove}
    >
      <StyledDialogContent dividers>
        <StyledDialogContentText>
          {resources?.cartRemoveProductConfirmation}
        </StyledDialogContentText>
      </StyledDialogContent>
    </Modal>
  );
};

RemoveProductDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  deleteProductFromCart: PropTypes.func,
  id: PropTypes.string,
  uuid: PropTypes.string,
};

export default RemoveProductDialog;
