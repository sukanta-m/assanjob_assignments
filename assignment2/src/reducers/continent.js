import * as actionTypes from "../actions/continent.types";
const INITIAL_STATE = {
  countries: []
};

export default function continent(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.CONTINENET_FETCH_REQUEST:
      return { ...state, loading: true };
    case actionTypes.CONTINENET_FETCH_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.CONTINENET_FETCH_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}