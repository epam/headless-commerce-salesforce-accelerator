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

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";

import actions from "store/actions/cart/actions";

import ShoppingBagIcon from "components/core/ShoppingBagIcon";
import CartValidationMsg from "components/Cart/CartValidationMsg";
import ProductItem from "components/ProductItem";
import {
  selectNumItems,
  selectItems,
  selectTotals,
  selectCartValidation,
} from "store/selectors/cart/selectors";
import Button from "../core/Button";
import { selectUserStatus } from "store/selectors/user/selectors";

import {
  StyledMiniCart,
  StyledPopupContent,
  StyledTotal,
  StyledHeading,
  StyledCount,
  StyledButton,
  StyledProductItems,
  StyledMiniCartTrigger,
  StyledProductsQuantity,
} from "./miniCartStyled";

const MiniCart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userStatus = useSelector(selectUserStatus);
  const productsInCartQuantity = useSelector(selectNumItems);
  const productsInCart = useSelector(selectItems);
  const totalPriceInfo = useSelector(selectTotals);
  const cartValidation = useSelector(selectCartValidation);

  useEffect(() => {
    dispatch(actions.getCartData());
  }, [dispatch]);

  const redirectToCheckout = () => {
    if (userStatus === "AUTHENTICATED" || userStatus === "IDENTIFIED") {
      history.push("/checkout");
    } else {
      history.push("/checkout-login");
    }
  };

  const redirectToCart = () => {
    history.push("/cart");
  };

  const renderProductItems = () => {
    return productsInCart?.map(
      ({
        productName,
        id,
        UUID,
        quantity,
        images,
        price,
        productType,
        available,
      }) => (
        <ProductItem
          key={id}
          id={id}
          uuid={UUID}
          productName={productName}
          price={price}
          banner={images.small[0].absURL}
          quantity={quantity}
          type={productType}
          available={available}
          isPreview
        />
      )
    );
  };

  return (
    <StyledMiniCart>
      <Popup
        trigger={
          <StyledMiniCartTrigger onClick={() => history.push("/cart")}>
            <ShoppingBagIcon />
            <StyledProductsQuantity>
              {productsInCartQuantity}
            </StyledProductsQuantity>
          </StyledMiniCartTrigger>
        }
        on="hover"
        disabled={!productsInCartQuantity}
        arrow={false}
        position="bottom right"
        contentStyle={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "21.5rem",
          padding: "16px 0",
          border: "none",
          borderRadius: "2px",
        }}
        closeOnDocumentClick
        hoverable
      >
        <StyledPopupContent>
          <StyledHeading>
            <span>
              Your Shopping Cart
              <StyledCount>{productsInCartQuantity}</StyledCount>
            </span>
            <Button variant="link" link="/cart" onClick={redirectToCart}>
              View Cart
            </Button>
          </StyledHeading>
          {cartValidation ? <CartValidationMsg margin="16px" /> : ""}
          <StyledProductItems>{renderProductItems()}</StyledProductItems>

          <StyledTotal>
            <span>Estimated Total</span>
            <span>{totalPriceInfo?.subTotal}</span>
          </StyledTotal>

          <StyledButton size="sm" onClick={redirectToCheckout}>
            Checkout
          </StyledButton>
        </StyledPopupContent>
      </Popup>
    </StyledMiniCart>
  );
};

export default MiniCart;
