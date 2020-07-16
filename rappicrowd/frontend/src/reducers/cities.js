import { GET_CITIES, SEARCH_CITY_NAME } from "../actions/types.js";

const initialState = {
  cities: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload
      };    
      		  
    default:
      return state;
  }
}


