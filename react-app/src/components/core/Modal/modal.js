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
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/** Components */
import Button from "components/core/Button";
import ModalTitle from "./modalTitle";
import { StyledDialogActions, StyledDialog } from "./modalStyled";

const Modal = ({
  isOpen,
  handleClose,
  modalTitle = "",
  children,
  submitAction,
  submitButtonText,
}) =>
  isOpen &&
  ReactDOM.createPortal(
    <StyledDialog
      onClose={handleClose}
      open={isOpen}
      aria-labelledby="customized-dialog-title"
    >
      <ModalTitle titleName={modalTitle} onClose={handleClose} />
      {children}
      <StyledDialogActions>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={submitAction} minWidth="160px">
          {submitButtonText}
        </Button>
      </StyledDialogActions>
    </StyledDialog>,
    document.body
  );

Modal.propTypes = {
  isOpen: PropTypes.bool,
  modalTitle: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.node,
  submitAction: PropTypes.func,
  submitButtonText: PropTypes.string,
};

export default Modal;
