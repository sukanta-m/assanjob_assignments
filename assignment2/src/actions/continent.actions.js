import Client from "../graphql/client";
import axios from "axios";
import { getContinents, getContinent } from "../graphql/queries/continent";
import cancelRequest from "../utils/cancelRequest";
import * as actionTypes from "./continent.types";
import { GRAPHQL_URL } from "../constants";

// this action for fetching all continents
export const fetchContinents = () => (dispatch, getState) => {
  dispatch({ type: actionTypes.CONTINENETS_FETCH_REQUEST });
  return Client.query({
    query: getContinents
  }).then(response => {
    return dispatch({
      type: actionTypes.CONTINENETS_FETCH_SUCCESS,
      payload: response.data.continents
    });
  }).catch(error => {
    return dispatch({
      type: actionTypes.CONTINENETS_FETCH_FAILURE,
      error: error
    });
  });
}

/*
  .action for fetching selected continent
  .used axios for canceling request
  .cancelRequest(type) util method for canceling request
*/
export const fetchContinent = (code) => (dispatch, getState) => {
  dispatch({ type: actionTypes.CONTINENET_FETCH_REQUEST });
  return axios.post(GRAPHQL_URL, {
    query: getContinent,
    variables: { code }
  }, cancelRequest(actionTypes.CONTINENET_FETCH_REQUEST)).then(response => {
    return dispatch({
      type: actionTypes.CONTINENET_FETCH_SUCCESS,
      payload: response.data.data.continent
    });
  }).catch(error => {
    return dispatch({
      type: actionTypes.CONTINENET_FETCH_FAILURE,
      error: error
    });
  });
}