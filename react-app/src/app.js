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
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import actions from "store/actions/user/actions";
import ThemeProvider from "./globalThemeProvider";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StyledPage from "./components/Page";
import { StyledToasts } from "./components/core/Notification/notificationStyled";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutLoginPage from "./pages/CheckoutLoginPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUserStatus());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <div className="storefront-app">
        <Router>
          <Header />
          <StyledPage>
            <StyledToasts />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <span>Here will be the main content</span>
                  </div>
                )}
              />
              <Route path="/products" component={ProductsPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/product/:pid" component={ProductDetailsPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/checkout-login" component={CheckoutLoginPage} />
              <Route path="/order-confirm" component={OrderConfirmationPage} />
            </Switch>
          </StyledPage>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
