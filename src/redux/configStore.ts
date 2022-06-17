import CarouselReducer from "./reducers/TrangChu/CarouselReducer";
import { configureStore } from "@reduxjs/toolkit";
import QuanLyPhimReducer from "./reducers/TrangChu/QuanLyPhimReducer";
import QuanLyRapReducer from "./reducers/TrangChu/QuanLyRapReducer";

export const store = configureStore({
	reducer: {
		CarouselReducer,
		QuanLyPhimReducer,
		QuanLyRapReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
