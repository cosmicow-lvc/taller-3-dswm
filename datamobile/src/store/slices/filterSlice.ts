import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  region: string;
}

const initialState: FilterState = {
  region: 'Todas',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
  },
});

export const { setRegion } = filterSlice.actions;
export default filterSlice.reducer;