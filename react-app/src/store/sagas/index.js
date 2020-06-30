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

import { all, fork } from "redux-saga/effects";
import watchMenuSaga from "./menuSagas";
import watchProductsSaga from "./productsSagas";
import watchProductSaga from "./productSagas";
import watchFilterRefinementsSagas from "./filterRefinementsSagas";
import watchCartSagas from "./cartSagas";
import watchCheckoutSagas from "./checkoutSagas";
import watchUserSagas from "./userSagas";

export default function* () {
  yield all([
    fork(watchMenuSaga),
    fork(watchProductsSaga),
    fork(watchProductSaga),
    fork(watchCartSagas),
    fork(watchFilterRefinementsSagas),
    fork(watchCheckoutSagas),
    fork(watchUserSagas),
  ]);
}
