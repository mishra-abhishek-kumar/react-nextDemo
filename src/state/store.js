import { configureStore } from "@reduxjs/toolkit";
import { amountSlice } from "./slice/AmountSlice";

export const store = configureStore({
	reducer: {
		amount: amountSlice.reducer,
	},
});
