import axios from "axios";

import { GET_CITIES, SEARCH_CITY_NAME } from "./types";

export const getCities = () => dispatch => {
  axios
    .get("/cities")
    .then(res => {
      dispatch({
        type: GET_CITIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
