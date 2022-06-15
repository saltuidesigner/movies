import axios from "axios";

//rxslice tao 1  reducer theo cau truc redux toolkit

import { createSlice } from "@reduxjs/toolkit";
import { http, TOKEN_CYBERSOFT } from "../../utility/setting";

const initialState = {
	arrBanner: [],
	arrDanhSachPhim: [],
	arrHeThongRap: [],
	arrLichChieuHeThongRap: [],
};

const trangChuReducer = createSlice({
	name: "trangChuReducer",
	initialState,
	reducers: {
		layBannerAction: (state, action) => {
			state.arrBanner = action.payload;
		},
		layDanhSachPhimAction: (state, action) => {
			state.arrDanhSachPhim = action.payload;
		},
		layDanhSachHeThongRap: (state, action) => {
			state.arrHeThongRap = action.payload;
		},
		layDanhSachLichChieuHeThongRap: (state, action) => {
			state.arrLichChieuHeThongRap = action.payload;
		},
	},
});

//action
export const {
	layBannerAction,
	layDanhSachPhimAction,
	layDanhSachHeThongRap,
	layDanhSachLichChieuHeThongRap,
} = trangChuReducer.actions;

export default trangChuReducer.reducer;

//------action-thunk------------------------

export const getBannerApiAction = () => {
	return async (dispatch) => {
		try {
			const result = await http.get(
				"http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner"
			);

			//data tra ve se o trong muc result.data.content
			const action = layBannerAction(result.data.content);
			dispatch(action);
		} catch (error) {
			console.log(error.msg);
		}
	};
};
export const getDanhSachPhimApiAction = () => {
	return async (dispatch) => {
		try {
			const result = await http.get(
				"https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
			);

			//data tra ve se o trong muc result.data.content
			const action = layDanhSachPhimAction(result.data.content);
			dispatch(action);
		} catch (error) {
			console.log(error.msg);
		}
	};
};
export const getDanhSachHeThongRapApiAction = () => {
	return async (dispatch) => {
		try {
			const result = await http.get(
				"https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
			);

			//data tra ve se o trong muc result.data.content
			const action = layDanhSachHeThongRap(result.data.content);
			dispatch(action);
		} catch (error) {
			console.log(error.msg);
		}
	};
};
export const getDanhSachLichChieuHeThongRapApiAction = () => {
	return async (dispatch) => {
		try {
			const result = await http.get(
				"https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
			);

			//data tra ve se o trong muc result.data.content
			const action = layDanhSachLichChieuHeThongRap(result.data.content);
			dispatch(action);
		} catch (error) {
			console.log(error.msg);
		}
	};
};
