import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../Services/baseService";

const initialState = {
	arrCarousel: [],
};

export const carouselSlice = createSlice({
	name: "carousel",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCarouselApi.fulfilled, (state, action) => {
			state.arrCarousel = [...action.payload];
		});
	},
});

export const {} = carouselSlice.actions;

export default carouselSlice.reducer;

//THUNK
export const fetchCarouselApi = createAsyncThunk(
	"carousel/fetchCarouselApi",
	async () => {
		try {
			let fetchCarouselApiObj = new baseService();
			const result = await fetchCarouselApiObj.get(
				`/api/QuanLyPhim/LayDanhSachBanner`
			);
			return result.data.content;
		} catch (error) {
			console.log(error.msg);
		}
	}
);
