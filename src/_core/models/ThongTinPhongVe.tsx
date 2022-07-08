export class ThongTinLichChieu {
	thongTinPhim = new ThongTinPhim();
	danhSachGhe: Ghe[] = [];
}

export class ThongTinPhim {
	maLichChieu: number | string = "";
	tenCumRap: string = "";
	tenRap: string = "";
	diaChi: string = "";
	tenPhim: string = "";
	hinhAnh: string = "";
	ngayChieu: string = "";
	gioChieu: string = "";
}

export class Ghe {
	maGhe: number | string = "";
	tenGhe: string = "";
	maRap: number | string = "";
	loaiGhe: string = "";
	stt: string = "";
	giaVe: number | string = "";
	daDat: boolean = false;
	taiKhoanNguoiDat: string | null = "";
}
