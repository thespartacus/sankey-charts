import { createSlice } from '@reduxjs/toolkit';

export const sankeyChartSlice = createSlice({
  name: 'sankeyChart',
  initialState: {},
  reducers: {
    fetchSankeyCharts: (state) => {
      return state;
    },
    changeNode: (state, action) => {
      state = {
        ...state
        (state?.nodes.id === action.payload.nodeId) ? state.nodes.label = action.payload.label : null
      }
    }
  }
});

export const { fetchSankeyCharts, changeNode } = sankeyChartSlice.actions;

export default sankeyChartSlice.reducer;
