import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  search: string;
  region: string;
  startDate: string; 
  endDate: string;
  minAmount: string; 
  maxAmount: string;
}

const initialState: FilterState = {
  search: '',
  region: 'Todas',
  startDate: '',
  endDate: '',
  minAmount: '',
  maxAmount: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => { state.search = action.payload; },
    setRegion: (state, action: PayloadAction<string>) => { state.region = action.payload; },
    
    setStartDate: (state, action: PayloadAction<string>) => { state.startDate = action.payload; },
    setEndDate: (state, action: PayloadAction<string>) => { state.endDate = action.payload; },
    setMinAmount: (state, action: PayloadAction<string>) => { state.minAmount = action.payload; },
    setMaxAmount: (state, action: PayloadAction<string>) => { state.maxAmount = action.payload; },
    
    resetFilters: (state) => {
        return initialState;
    }
  },
});

export const { 
  setSearch, setRegion, 
  setStartDate, setEndDate, 
  setMinAmount, setMaxAmount,
  resetFilters 
} = filterSlice.actions;

export default filterSlice.reducer;