import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { fetchHeThongRapApi } from "../../../redux/reducers/TrangChu/QuanLyRapReducer";

type Props = {};

export const TCQuanLyRap = (props: Props) => {
	const { arrHeThongRap } = useSelector(
		(state: RootState) => state.QuanLyRapReducer
	);

	console.log(arrHeThongRap);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchHeThongRapApi());
	}, []);

	function renderHeThongRap() {
		return arrHeThongRap.map((heThongRap, index) => {
			return (
				<div className='row'>
					<div className='col-1'>
						<img
							key={index}
							className='mt-2 d-block text-center'
							style={{ width: "50px", height: "50px" }}
							src={heThongRap.logo}
							alt=''
						/>
					</div>
					<div className='col-11'>
						{heThongRap.lstCumRap.map((cumrap, index) => {
							return <p>{cumrap.tenCumRap}</p>;
						})}
					</div>
				</div>
			);
		});
	}
	return (
		<div className='card'>
			<div className='card-body'>{renderHeThongRap()}</div>
		</div>
	);
};
