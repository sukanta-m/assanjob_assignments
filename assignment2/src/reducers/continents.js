import * as actionTypes from "../actions/continent.types";
const INITIAL_STATE = {
  list: []
};

export default function continents(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.CONTINENETS_FETCH_REQUEST:
      return { ...state, loading: true };
    case actionTypes.CONTINENETS_FETCH_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case actionTypes.CONTINENETS_FETCH_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}