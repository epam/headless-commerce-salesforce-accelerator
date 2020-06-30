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

/** UI Components */
import Grid from "@material-ui/core/Grid";

/** Components */
import Modal from "components/core/Modal";
import Carousel from "components/ProductDetails/Carousel";
import Description from "components/ProductDetails/Description";
import VariantSelectors from "components/ProductDetails/VariantSelectors";
import StyledDialogContent from "./editProductDialogStyled";

const EditProductDialog = ({ open, handleClose, updateProductInCart }) => (
  <Modal
    isOpen={open}
    handleClose={handleClose}
    modalTitle="Edit Item"
    submitAction={updateProductInCart}
    submitButtonText="Update"
  >
    <StyledDialogContent dividers>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Carousel />
        </Grid>
        <Grid item xs={6}>
          <VariantSelectors />
          <Description
            titleFontSize={14}
            lineheight={24}
            titleMargin="24px 0px 8px 0px"
            contentMargin="0px 0px 24px 0px"
          />
        </Grid>
      </Grid>
    </StyledDialogContent>
  </Modal>
);

EditProductDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  updateProductInCart: PropTypes.func,
};

export default EditProductDialog;
