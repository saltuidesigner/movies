import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../Services/baseService";

const initialState = {
	arrFilm: [],
};

export const filmSlice = createSlice({
	name: "film",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchFilmApi.fulfilled, (state, action) => {
			state.arrFilm = [...action.payload];
		});
	},
});

export const {} = filmSlice.actions;

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
