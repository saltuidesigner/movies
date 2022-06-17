import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DOMAIN, http } from "../../../utility/setting";

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
			const result = await http.get(
				`${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`
			);
			return result.data.content;
		} catch (error) {
			console.log(error.msg);
		}
	}
);
