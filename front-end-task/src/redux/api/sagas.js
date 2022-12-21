import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { firstApi, firstApiInSuccess, firstApiFailure } from "./actions";
import types from "./actionTypes";

const api1 = async (numero_conto_corrente, tipologia) => {
  const response = await axios.post(
    "https://staging-api.bpoint.store/api/sepafin/freeBookBollettini/codiceFiscaleRequired",
    {
      numero_conto_corrente,
      tipologia,
    }
  );
  return response.data.companyName;
};

export function* firstApiFetch({
  payload: { numero_conto_corrente, tipologia },
}) {
  console.log(numero_conto_corrente, tipologia);
  try {
    const codiceFiscaleRequired = yield api1(numero_conto_corrente, tipologia);
    console.log(codiceFiscaleRequired);
    yield put(firstApiInSuccess(codiceFiscaleRequired));
  } catch (error) {
    yield put(firstApiFailure(error));
  }
}

export function* onFirstApiStart() {
  console.warn("saga started");
  yield takeLatest(types.FIRST_API, firstApiFetch);
}

export function* Apisagas() {
  yield all([call(onFirstApiStart)]);
}
