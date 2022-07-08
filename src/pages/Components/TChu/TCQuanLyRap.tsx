import React, { Fragment, useEffect, useState } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { fetchHeThongRapApi } from "../../../redux/reducers/TrangChu/QuanLyRapReducer";
import { divide } from "lodash";
import { NavLink } from "react-router-dom";
import moment from "moment";

type Props = {};
type TabPosition = "left" | "right" | "top" | "bottom";
export const TCQuanLyRap = (props: Props) => {
	const { arrHeThongRap } = useSelector(
		(state: RootState) => state.QuanLyRapReducer
	);
	const { TabPane } = Tabs;
	const [tabPosition, setTabPosition] = useState<TabPosition>("left");
	console.log(arrHeThongRap);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchHeThongRapApi());
	}, []);

	//XU LY KHI HINH ANH BI ERROR
	const FALLBACK_IMAGE =
		"https://www.kindacode.com/wp-content/uploads/2021/08/oops.png";
	const imageOnErrorHandler = (
		event: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		event.currentTarget.src = FALLBACK_IMAGE;
		event.currentTarget.className = "error";
	};

	const renderHeThongRap = () => {
		return arrHeThongRap?.map((heThongRap, index) => {
			return (
				<TabPane
					tab={
						<img src={heThongRap.logo} className='rounded-full' width='50	' />
					}
					key={index}>
					<Tabs tabPosition={tabPosition}>
						{heThongRap.lstCumRap?.map((cumRap, index) => {
							return (
								<TabPane
									tab={
										<div style={{ width: "300px", display: "flex" }}>
											<img src={heThongRap.logo} width='50	' />
											<br />
											<div className='text-left ms-2'>
												{cumRap.tenCumRap}
												<p className='text-red-200'>Chi Tiet</p>
											</div>
										</div>
									}
									key={index}>
									{cumRap.danhSachPhim?.slice(0, 5).map((phim, index) => {
										return (
											<Fragment key={index}>
												<div className='my-2'>
													<div style={{ display: "flex" }}>
														<img
															style={{ width: 75, height: 75 }}
															src={phim.hinhAnh}
															alt={phim.tenPhim}
															onError={imageOnErrorHandler}
														/>
														<div className='ms-2'>
															<h3 className=' text-2xl'>{phim.tenPhim}</h3>
															<p>{cumRap.diaChi}</p>
															<div className='grid grid-cols-5 gap-2'>
																{phim.lstLichChieuTheoPhim
																	?.slice(0, 10)
																	.map((lichChieu, index) => {
																		return (
																			<NavLink
																				className='text-2xl text-green-600'
																				to='/'
																				key={index}>
																				{moment(
																					lichChieu.ngayChieuGioChieu
																				).format("hh:mm A")}
																			</NavLink>
																		);
																	})}
															</div>
														</div>
													</div>
												</div>
												<hr />
											</Fragment>
										);
									})}
								</TabPane>
							);
						})}
					</Tabs>
				</TabPane>
			);
		});
	};
	return (
		<div className='card'>
			<div className='card-body'>
				<Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
			</div>
		</div>
	);
};
