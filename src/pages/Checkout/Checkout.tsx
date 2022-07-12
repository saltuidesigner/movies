import React, { Fragment, useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import style from "./Checkout.module.css";
import "./Checkout.css";

import { Tabs } from "antd";
import {
	datGhe,
	fetchQuanLyDatVeApi,
	postQuanLyDatVeApi,
} from "../../redux/reducers/TrangDatVe/QuanLyDatVeReducer";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
type Props = {
	match: any;
};
const Checkout = (props: Props) => {
	const { userLogin } = useSelector(
		(state: RootState) => state.QuanLyNguoiDungReducer
	);
	const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
		(state: RootState) => state.QuanLyDatVeReducer
	);
	const { danhSachGhe, thongTinPhim } = chiTietPhongVe;

	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchQuanLyDatVeApi(props.match.params.id));
	}, []);
	const addGhe = (ghe) => {
		dispatch(datGhe(ghe));
	};
	//renderSEAT
	const renderSeats = () => {
		return danhSachGhe.map((ghe, index) => {
			let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
			let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
			let classGheDangDat = "";
			let indexGheDD = danhSachGheDangDat.findIndex((gheDD) => {
				return gheDD.maGhe === ghe.maGhe;
			});
			if (indexGheDD != -1) {
				classGheDangDat = "gheDangDat";
			}

			let classGheDaDuocDat = "";
			if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
				classGheDaDuocDat = "gheDaDuocDat";
			}

			return (
				<Fragment key={index}>
					<button
						onClick={() => {
							addGhe(ghe);
						}}
						disabled={ghe.daDat}
						className={`ghe ${classGheVip} ${classGheDaDat}
						${classGheDangDat}
						${classGheDaDuocDat}
						`}
						key={index}>
						{ghe.daDat ? <i className='fa-solid fa-xmark'></i> : ghe.stt}
					</button>
					{(index + 1) % 15 === 0 ? <br /> : ""}
				</Fragment>
			);
		});
	};

	return (
		<div>
			<div className='row mt-5'>
				<div className='col-8 p-0 d-flex flex-column align-items-center'>
					<div
						className='bg-dark'
						style={{ width: "80%", height: "15px" }}></div>
					<div className={`${style["trapezoid"]}`}>
						<h4 className='text-center'>Man Hinh</h4>
					</div>

					<div className='container mt-3'>{renderSeats()}</div>
					<div className='mt-5'>
						<table className='table table-borderless '>
							<thead>
								<tr>
									<th>Ghe chua dat</th>
									<th>Ghe dang dat</th>
									<th>Ghe vip</th>
									<th>Ghe da dat</th>
									<th>Ghe minh dat</th>
								</tr>
							</thead>
							<tbody>
								<tr className='text-center'>
									<td>
										<button className='ghe text-center'></button>
									</td>
									<td>
										<button className='ghe gheDangDat text-center'></button>
									</td>
									<td>
										<button className='ghe gheVip text-center'></button>
									</td>
									<td>
										<button className='ghe gheDaDat text-center'></button>
									</td>
									<td>
										<button className='ghe gheDaDuocDat text-center'></button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className='p-0 col-4 d-flex flex-column'>
					<div className='tdvContent'>
						<h3 className='text-center text-green-400 text-4xl'>
							{danhSachGheDangDat
								.reduce((tongTien, ghe, index) => {
									return (tongTien += ghe.giaVe);
								}, 0)
								.toLocaleString()}
							d
						</h3>
						<hr />
						<h3>{thongTinPhim.tenPhim}</h3>
						<p>
							Dia diem: {thongTinPhim.tenCumRap}-{thongTinPhim.tenRap}
						</p>
						<p>
							Ngay chieu:{thongTinPhim.ngayChieu}-{thongTinPhim.gioChieu}
						</p>
						<hr />
						<div className='my-2 '>
							<span style={{ color: "red", fontSize: "20px" }}>Ghe</span>
							{_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
								return (
									<span
										style={{ fontSize: "18px" }}
										key={index}
										className='ms-1'>
										{gheDD.stt}
									</span>
								);
							})}
						</div>
						<hr />
						<div className='my-2'>
							<i>Email</i>
							<br />
							323232@gmail.com
						</div>
						<hr />
						<div className='my-2'>
							<i>Phone</i>
							<br />
							12323131
						</div>
					</div>
					<div className='mt-5'>
						<button
							onClick={() => {
								const thongTinDatVe = new ThongTinDatVe();
								thongTinDatVe.maLichChieu = props.match.params.id;
								thongTinDatVe.danhSachVe = danhSachGheDangDat;

								dispatch(postQuanLyDatVeApi(thongTinDatVe));
							}}
							style={{ width: "100%", cursor: "pointer" }}
							className='btn bg-green-500 text-xl text-white p-2 fs-5 rounded-0'>
							DAT VE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const { TabPane } = Tabs;

const onChange = (key: string) => {
	console.log(key);
};

const TabCheckout: React.FC = (props: Props) => (
	<div className='p-5'>
		<Tabs defaultActiveKey='1' onChange={onChange}>
			<TabPane tab='01 CHON GHE VA THANH TOAN' key='1'>
				<Checkout {...props} />
			</TabPane>
			<TabPane tab='02 KET QUA DAT VE	' key='2'>
				<KetQuaDatVe {...props} />
			</TabPane>
		</Tabs>
	</div>
);
export default TabCheckout;

function KetQuaDatVe(props) {
	const { thongTinNguoiDung } = useSelector((state: RootState) => {
		return state.QuanLyNguoiDungReducer;
	});
	// console.log("thongTinNguoiDungDatVe", thongTinNguoiDung);
	const dispatch = useDispatch<AppDispatch>();
	const { userLogin } = useSelector(
		(state: RootState) => state.QuanLyNguoiDungReducer
	);
	useEffect(() => {
		const action = layThongTinNguoiDungAction();
		dispatch(action);
	}, []);
	console.log("thongTin");
	return (
		<div>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-green-600'>
							Lich Su Dat Ve Khach Hang
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							Hay xem thong tin dia diem va thoi gian de xem phim vui ve ban
							nhe!
						</p>
					</div>
					<div className='flex flex-wrap -m-2'>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/80x80'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Holden Caulfield
									</h2>
									<p className='text-gray-500'>UI Designer</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/84x84'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Henry Letham
									</h2>
									<p className='text-gray-500'>CTO</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/88x88'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Oskar Blinde
									</h2>
									<p className='text-gray-500'>Founder</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/90x90'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										John Doe
									</h2>
									<p className='text-gray-500'>DevOps</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/94x94'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Martin Eden
									</h2>
									<p className='text-gray-500'>Software Engineer</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/98x98'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Boris Kitua
									</h2>
									<p className='text-gray-500'>UX Researcher</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/100x90'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Atticus Finch
									</h2>
									<p className='text-gray-500'>QA Engineer</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/104x94'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Alper Kamu
									</h2>
									<p className='text-gray-500'>System</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/108x98'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										Rodrigo Monchi
									</h2>
									<p className='text-gray-500'>Product Manager</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
