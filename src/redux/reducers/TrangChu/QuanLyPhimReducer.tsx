import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../Services/baseService";

const initialState = {
	arrFilm: [],
	dangChieu: true,
	sapChieu: false,
	arrFilmDefault: [],
};

export const filmSlice = createSlice({
	name: "film",
	initialState,
	reducers: {
		phimDangChieu: (state) => {
			state.dangChieu = !state.dangChieu;
			state.arrFilm = state.arrFilmDefault.filter((item) => {
				return item.dangChieu === state.dangChieu;
			});
		},
		phimSapChieu: (state) => {
			state.sapChieu = !state.sapChieu;
			state.arrFilm = state.arrFilmDefault.filter((item) => {
				return item.sapChieu === state.sapChieu;
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFilmApi.fulfilled, (state, action) => {
			state.arrFilm = action.payload.filter((item) => {
				return (
					item.dangChieu === state.dangChieu && item.sapChieu === state.sapChieu
				);
			});
			state.arrFilmDefault = state.arrFilm;
		});
	},
});

export const { phimDangChieu, phimSapChieu } = filmSlice.actions;

export default filmSlice.reducer;

//THUNK
export const fetchFilmApi = createAsyncThunk("film/fetchFilmApi", async () => {
	try {
		let fetchFilmApiObj = new baseService();
		const result = await fetchFilmApiObj.get(
			`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
		);
		return result.data.content;
	} catch (error) {
		console.log(error.msg);
	}
});
