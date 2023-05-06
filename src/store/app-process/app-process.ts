import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories, NameSpace } from './../../const';

type AppProcess = {
  selectedCategory: string;
  dataIsLoading: boolean;
};

const initialState: AppProcess = {
  selectedCategory: categories[0].name,
  dataIsLoading: false,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setDataIsLoading: (state, action: PayloadAction<boolean>) => {
      state.dataIsLoading = action.payload;
    },
  },
});

export const { changeCategory, setDataIsLoading } = appProcess.actions;
