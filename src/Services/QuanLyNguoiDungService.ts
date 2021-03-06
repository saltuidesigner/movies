import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
	static dangNhap: any;
	static layThongTinNguoiDung: any;
	constructor() {
		super();
	}

	dangNhap = (thongTinDangNhap: any) => {
		// {taiKhoan:'',matKhau:''}
		return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
	};

	layThongTinNguoiDung = () => {
		return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
	};
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
