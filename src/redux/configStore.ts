import { configureStore } from "@reduxjs/toolkit";
import trangChuReducer from "./reducers/trangChuReducer";

export const store = configureStore({
	reducer: {
		trangChuReducer: trangChuReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
