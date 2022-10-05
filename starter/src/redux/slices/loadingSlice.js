import { createSlice } from "@reduxjs/toolkit"

export const loadingSlice = createSlice({
  name: "isLoading",
  initialState: {
    value: false,
  },
  reducers: {
    setLoadingTrue: (state) => {
      state.value = true
    },
    toggleLoading: (state) => {
      state.value = !state.value;
  },
    setLoadingFalse: (state) => {
      state.value = false
    },
  }
})

export const { setLoadingTrue, setLoadingFalse } = loadingSlice.actions

export const selectLoading = (state) => state.isLoading.value;

export default loadingSlice.reducer;