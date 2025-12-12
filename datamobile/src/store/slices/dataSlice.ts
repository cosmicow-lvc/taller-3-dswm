import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  items: any[]; // luego lo tipas
  loading: boolean;
}

const initialState: DataState = {
  items: [],
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setData, setLoading } = dataSlice.actions;
export default dataSlice.reducer;
