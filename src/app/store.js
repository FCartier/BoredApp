import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
});
