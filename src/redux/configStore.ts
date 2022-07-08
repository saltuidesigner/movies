import CarouselReducer from "./reducers/TrangChu/CarouselReducer";
import { configureStore } from "@reduxjs/toolkit";
import QuanLyPhimReducer from "./reducers/TrangChu/QuanLyPhimReducer";
import QuanLyRapReducer from "./reducers/TrangChu/QuanLyRapReducer";
import QuanLyDatVeReducer from "./reducers/TrangDatVe/QuanLyDatVeReducer";

export const store = configureStore({
	reducer: {
		CarouselReducer,
		QuanLyPhimReducer,
		QuanLyRapReducer,
		QuanLyDatVeReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
