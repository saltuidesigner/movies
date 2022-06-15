import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/configStore";
import { getDanhSachPhimApiAction } from "../../../redux/reducers/trangChuReducer";

type Props = {};

export const TCDanhSachPhim = (props: Props) => {
	const { arrDanhSachPhim } = useSelector((state: RootState) => {
		return state.trangChuReducer;
	});
	console.log(arrDanhSachPhim);
	const dispatch = useDispatch();
	useEffect(() => {
		//call api'
		const action: any = getDanhSachPhimApiAction();
		dispatch(action);
	}, []);
	function renderDanhSachPhim() {
		return arrDanhSachPhim.map((item, index) => {
			return (
				<div className='col-3' key={index}>
					<div className='card'>
						<img src={item.hinhAnh} alt='...' />
						<div className='card-body'>
							<p>{item.tenPhim}</p>
							<p className='rating'></p>
						</div>
					</div>
				</div>
			);
		});
	}
	return (
		<div className='row'>
			<h1 className='text-center p-3'>Danh Sach Phim</h1>
			{renderDanhSachPhim()}
		</div>
	);
};
