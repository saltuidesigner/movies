import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DOMAIN, http } from "../../../utility/setting";

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
		const result = await http.get(
			`${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
		);
		return result.data.content;
	} catch (error) {
		console.log(error.msg);
	}
});
