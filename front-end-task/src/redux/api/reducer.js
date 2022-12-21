import types from "./actionTypes";
const INITIAL_STATE = {
  tipoBbollettino: "123",
  numeroContoCorrente: "42083204",
  companyName: "",
  diEuro: "",
  causale: "",
  person: "",
  nome: "",
  cognome: "",
  denominazione: "",
  indirizzo: "",
  citta: "",
  errorCompanyName: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FIRST_API:
      console.log(action);
      return {
        ...state,
      };
    case types.FIRST_API_IN_SUCCESS:
      console.log(action.payload);
      return { ...state, companyName: action.payload };

    case types.FIRST_API_IN_FAILURE:
      return {
        ...state,
        errorCompanyName: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
