import { history } from "../../App";
import { QuanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService";
import {
	DANG_NHAP_ACTION,
	SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap: any) => {
	return async (dispatch: any) => {
		try {
			const result = await QuanLyNguoiDungService.dangNhap(thongTinDangNhap);

			if (result.data.status === 200) {
				dispatch({
					type: DANG_NHAP_ACTION,
					thongDangNhap: result.data.content,
				});
			}
			//chuyen huong dang nhap ve trang truoc do
			history.goBack();
			console.log("result", result);
		} catch (error: any) {
			console.log("error", error.response);
		}
	};
};
export const layThongTinNguoiDungAction = () => {
	return async (dispatch: any) => {
		try {
			const result = await QuanLyNguoiDungService.layThongTinNguoiDung();
			console.log(result);
			if (result.data.status === 200) {
				dispatch({
					type: SET_THONG_TIN_NGUOI_DUNG,
					thongTinNguoiDung: result.data.content,
				});
			}
		} catch (error: any) {
			console.log("error", error.data);
		}
	};
};
