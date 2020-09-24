import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { get } from "../../api/client";
import StatusEnum from "../../constants/StatusEnum";

// Thunk action creators
export const fetchActivities = createAsyncThunk(
  "dashboard/fetchActivities",
  async () => {
    const response = await get("/list/20");
    return response;
  }
);

export const fetchActivity = createAsyncThunk(
  "dashboard/fetchActivity",
  async () => {
    const response = await get("");
    return response;
  }
);

// Slice
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    activities: [],
    searchedValue: null,
    status: StatusEnum.idle,
    error: null,
    randomActivity: null,
    randomActivityStatus: StatusEnum.idle
  },
  // Dashboard reducers
  reducers: {
    setSearchedValue: (state, action) => {
      state.searchedValue = action.payload.toLocaleLowerCase();
    }
  },
  // Thunk reducers
  extraReducers: {
    [fetchActivities.pending]: (state, action) => {
      state.status = StatusEnum.loading;
      state.searchedValue = null;
    },
    [fetchActivities.fulfilled]: (state, action) => {
      state.status = StatusEnum.succeeded;
      state.activities = action.payload.concat(state.activities);
    },
    [fetchActivities.rejected]: (state, action) => {
      state.status = StatusEnum.failed;
      state.error = action.error.message;
    },
    [fetchActivity.pending]: (state, action) => {
      state.randomActivityStatus = StatusEnum.loading;
      state.randomActivity = null;
    },
    [fetchActivity.fulfilled]: (state, action) => {
      state.randomActivityStatus = StatusEnum.succeeded;
      state.randomActivity = action.payload[0];
    },
    [fetchActivity.rejected]: (state, action) => {
      state.randomActivityStatus = StatusEnum.failed;
      state.error = action.error.message;
    }
  }
});

// Actions
export const { setSearchedValue } = dashboardSlice.actions;

// Selectors
export const selectActivities = state => {
  const {
    dashboard: { activities, searchedValue }
  } = state;
  if (searchedValue) {
    return activities.filter(
      activity =>
        activity.activity.toLocaleLowerCase().includes(searchedValue) ||
        activity.type.toLocaleLowerCase().includes(searchedValue)
    );
  }
  return activities;
};

export const selectActivitiesAreLoading = state => {
  const { status } = state.dashboard;
  return status === StatusEnum.loading || status === StatusEnum.idle;
};
export const selectRandomActivity = state => state.dashboard.randomActivity;
export const selectRandomActivityStatus = state =>
  state.dashboard.randomActivityStatus;

export default dashboardSlice.reducer;
