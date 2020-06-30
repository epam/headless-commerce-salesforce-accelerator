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

import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import filterRefinementsReducer from "./filters/reducer";
import productsReducer from "./products/reducer";
import productReducer from "./product/reducer";
import breadCrumbsReducer from "./breadCrumbsReducer";
import cartReducer from "./cart/reducer";
import checkoutReducer from "./checkout/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  menuCategories: menuReducer,
  productsInfo: productsReducer,
  productDetails: productReducer,
  filterRefinements: filterRefinementsReducer,
  breadcrumbs: breadCrumbsReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  user: userReducer,
});
