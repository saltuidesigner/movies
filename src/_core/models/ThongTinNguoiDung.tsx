import { Ghe } from "./ThongTinPhongVe";

export class ThongTinNguoiDung {
	nguoiDung = new ThongTinNguoiDungObject();
	thongTinDatVe: ThongTinDatVe[] = [];
}
export class ThongTinNguoiDungObject {
	email: string = "";
	hoTen: string = "";
	loaiNguoiDung: string = "";
	maNhom: string = "";
	matKhau: string = "";
	soDT: string = "";
	taiKhoan: string = "";
}
export class ThongTinDatVe {
	danhSachGhe: Ghe[] = [];
	giaVe: string | number = "";
	hinhAnh: string = "";
	maVe: string | number = "";
	ngayDat: string = "";
	tenPhim: string = "";
	thoiLuongPhim: string | number = "";
}
