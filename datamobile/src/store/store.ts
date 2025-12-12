import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filterSlice";
import dataReducer from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
