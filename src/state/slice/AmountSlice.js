import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
	initialState: 1005,
	name: "amount",
	reducers: {
		increament(state, action) {
			console.log("increament:", action);
			return state + action.payload;
		},
		decreament(state, action) {
			return state - action.payload;
		},
	},
});
