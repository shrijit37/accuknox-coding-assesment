// checkboxSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cloudAccounts: true,
  cloudAccountsRiskAssessments: false,
};

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCloudAccounts: (state) => {
      state.cloudAccounts = !state.cloudAccounts;
    },
    toggleCloudAccountsRiskAssessments: (state) => {
      state.cloudAccountsRiskAssessments = !state.cloudAccountsRiskAssessments;
    },
  },
});

export const { toggleCloudAccounts, toggleCloudAccountsRiskAssessments } = checkboxSlice.actions;
export default checkboxSlice.reducer;
