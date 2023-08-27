import SANKEY from "./constants";

const initalState = {
  sankeyData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SANKEY.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SANKEY.LOAD_SUCCESS:
      return {
        ...state,
        sankeyData: action.item,
        isLoading: false,
      };
    case SANKEY.LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        sankeyData: []
      }
    default:
      return state;
  }
};

export default reducer;
