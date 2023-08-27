import axios from "axios";
import SANKEY from "./constants";

export function fetchDataRequest() {
  return {
    type: SANKEY.LOAD
  };
}

export function fetchDataSuccess(item) {
  return {
    type: SANKEY.LOAD_SUCCESS,
    item
  };
}

export function fetchDataError(error) {
  return {
    type: SANKEY.LOAD_ERROR,
    payload: { error }
  };
}

// export const requestSankeyCharts = (data) => async (dispatch) => {
//   dispatch({
//     type: SANKEY.LOAD,
//   });
//   try {
//     const json = await axios.get("data.json");
//     console.log("Axios: ", json);
//     dispatch({
//       type: SANKEY.LOAD_SUCCESS,
//       sankeyData: json,
//       isError: false,
//     });
//   } catch (e) {
//     dispatch({
//       type: SANKEY.LOAD_SUCCESS,
//       sankeyData: [],
//       isError: true,
//     });
//   }
// };
