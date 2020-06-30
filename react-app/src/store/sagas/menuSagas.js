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

import { call, put, takeLatest } from "redux-saga/effects";
import menuActionsTypes from "store/actionsTypes/menuActionsTypes";
import menuActions from "store/actions/menuActions";
import menuAPI from "services/menuAPI";

function* getMenuCategoriesSaga() {
  try {
    const categories = yield call(menuAPI.getCategories);
    yield put(menuActions.getMenuCategoriesSuccess(categories.data));
  } catch (error) {
    yield put(menuActions.getMenuCategoriesFailure());
  }
}

export default function* watchMenuSagas() {
  yield takeLatest(
    menuActionsTypes.GET_MENU_CATEGORIES__START,
    getMenuCategoriesSaga
  );
}
