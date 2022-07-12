import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../Services/baseService";

import { ThongTinDatVe } from "../../../_core/models/ThongTinDatVe";
import { ThongTinLichChieu } from "../../../_core/models/ThongTinPhongVe";

const initialState = {
	chiTietPhongVe: new ThongTinLichChieu(),
	danhSachGheDangDat: [],
};

export const QuanLyDatVeSlice = createSlice({
	name: "datve",
	initialState,
	reducers: {
		datGhe: (state, action) => {
			let danhSachGheCapNhap = [...state.danhSachGheDangDat];
			let index = danhSachGheCapNhap.findIndex((gheDD) => {
				return gheDD.maGhe === action.payload.maGhe;
			});
			if (index !== -1) {
				danhSachGheCapNhap.splice(index, 1);
			} else {
				danhSachGheCapNhap.push(action.payload);
			}
			state.danhSachGheDangDat = danhSachGheCapNhap;
		},
		datVe: (state, action) => {},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchQuanLyDatVeApi.fulfilled, (state, action) => {
			state.chiTietPhongVe = { ...action.payload };
		});
	},
});

export const { datGhe } = QuanLyDatVeSlice.actions;

export default QuanLyDatVeSlice.reducer;

//THUNK
export const fetchQuanLyDatVeApi = createAsyncThunk(
	"datve/fetchQuanLyDatVeApi",
	async (maLichChieu: string | number) => {
		try {
			let fetchQuanLyDatVeApiObj = new baseService();
			const result = await fetchQuanLyDatVeApiObj.get(
				`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
			);
			return result.data.content;
		} catch (error) {
			console.log(error.msg);
		}
	}
);

export const postQuanLyDatVeApi = createAsyncThunk(
	"datve/postQuanLyDatVeApi",
	async (thongTinDatVe: ThongTinDatVe) => {
		try {
			let postQuanLyDatVeApiObj = new baseService();
			const result = await postQuanLyDatVeApiObj.post(
				`/api/QuanLyDatVe/DatVe`,
				thongTinDatVe
			);
		} catch (error) {
			console.log(error.msg);
		}
	}
);
