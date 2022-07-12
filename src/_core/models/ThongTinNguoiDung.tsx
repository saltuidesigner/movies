export class ThongTinNguoiDung {
	nguoiDung = new ThongTinNguoiDungObject();
	thongTinDatVe: ThongTinDatVe[] = [];
}
export class ThongTinNguoiDungObject {
	email: string = "";
	hoTen: string = "";
	loaiNguoiDung: loaiNguoiDung = {
		maLoaiNguoiDung: "",
		tenLoai: "",
	};
	maLoaiNguoiDung: string = "";
	maNhom: string = "";
	matKhau: string = "";
	soDT: string = "";
	taiKhoan: string = "";
}
export interface loaiNguoiDung {
	maLoaiNguoiDung: string;
	tenLoai: string;
}
export class ThongTinDatVe {
	danhSachGhe: gheNguoiDung[] = [];
	giaVe: string | number = "";
	hinhAnh: string = "";
	maVe: string | number = "";
	ngayDat: string = "";
	tenPhim: string = "";
	thoiLuongPhim: string | number = "";
}
export class gheNguoiDung {
	maHeThongRap: string = "";
	tenHeThongRap: string = "";
	maCumRap: string = "";
	tenCumRap: string = "";
	maRap: string | number = "";
	tenRap: string = "";
	maGhe: string | number = "";
	tenGhe: string = "";
}
