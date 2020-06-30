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

import { call, put, takeEvery } from "redux-saga/effects";
import filterRefinementsActionsTypes from "store/actionsTypes/filterRefinementsActionsTypes";
import filterRefinementsActions from "store/actions/filters/actions";
import filterRefinementsAPI from "services/filterRefinementsAPI";

function* getFilterRefinementsSaga({ params }) {
  try {
    const filterRefinements = yield call(
      filterRefinementsAPI.getFiltersRefinements,
      params
    );

    yield put(
      filterRefinementsActions.getFilterRefinementsSuccess(
        filterRefinements.data.refinements,
        filterRefinements.data.resources
      )
    );
  } catch (error) {
    yield put(filterRefinementsActions.getFilterRefinementsFailure());
  }
}

export default function* watchFilterRefinementsSagas() {
  yield takeEvery(
    filterRefinementsActionsTypes.GET_FILTER_REFINEMENTS__START,
    getFilterRefinementsSaga
  );
}
