import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DOMAIN, http } from "../../../utility/setting";

const initialState = {
	arrHeThongRap: [],
};

export const RapSlice = createSlice({
	name: "film",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchHeThongRapApi.fulfilled, (state, action) => {
			state.arrHeThongRap = [...action.payload];
		});
	},
});

export const {} = RapSlice.actions;

export default RapSlice.reducer;

//THUNK
export const fetchHeThongRapApi = createAsyncThunk(
	"rap/fetchHeThongRapApi",
	async () => {
		try {
			const result = await http.get(
				`${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`
			);
			return result.data.content;
		} catch (error) {
			console.log(error.msg);
		}
	}
);
