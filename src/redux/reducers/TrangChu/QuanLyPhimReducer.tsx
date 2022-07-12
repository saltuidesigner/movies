import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../Services/baseService";
import {
	SET_DANH_SACH_PHIM,
	SET_FILM_SAP_CHIEU,
	SET_FILM_DANG_CHIEU,
	SET_THONG_TIN_PHIM,
} from "../../actions/types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../../actions/types/QuanLyRapType";

const initialState = {
	arrFilm: [],
	dangChieu: true,
	sapChieu: false,
	arrFilmDefault: [],
	filmDetail: {},
	thongTinPhim: {},
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
//DETAIL
export const quanLyPhimReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DANH_SACH_PHIM: {
			state.arrFilm = action.arrFilm;
			state.arrFilmDefault = state.arrFilm;
			return { ...state };
		}
		case SET_FILM_DANG_CHIEU: {
			state.dangChieu = !state.dangChieu;

			state.arrFilm = state.arrFilmDefault.filter(
				(film) => film.dangChieu === state.dangChieu
			);
			return { ...state };
		}
		case SET_FILM_SAP_CHIEU: {
			state.sapChieu = !state.sapChieu;

			state.arrFilm = state.arrFilmDefault.filter(
				(film) => film.sapChieu === state.sapChieu
			);
			return { ...state };
		}

		case SET_CHI_TIET_PHIM: {
			state.filmDetail = action.filmDetail;
			return { ...state };
		}

		case SET_THONG_TIN_PHIM: {
			state.thongTinPhim = action.thongTinPhim;
			return { ...state };
		}

		default:
			return { ...state };
	}
};
