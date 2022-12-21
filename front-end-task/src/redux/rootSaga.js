import { all, call } from 'redux-saga/effects';

import { Apisagas } from './api/sagas';

export default function* rootSaga() {
    yield all([call(Apisagas)]);
}
