import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/configStore";
import {
	getDanhSachHeThongRapApiAction,
	getDanhSachLichChieuHeThongRapApiAction,
} from "../../../redux/reducers/trangChuReducer";
import { TCCumRap } from "./TCCumRap";
import { TCDanhSachPhimTheoCumRap } from "./TCDanhSachPhimTheoCumRap";

type Props = {};

export const TCHeThongRap = (props: Props) => {
	const { arrHeThongRap, arrLichChieuHeThongRap } = useSelector(
		(state: RootState) => {
			return state.trangChuReducer;
		}
	);
	const [dsCumRap, changeDSCumRap] = useState(arrLichChieuHeThongRap[0]);

	const dispatch = useDispatch();

	useEffect(() => {
		//call api'
		const action1: any = getDanhSachHeThongRapApiAction();
		dispatch(action1);
		const action2: any = getDanhSachLichChieuHeThongRapApiAction();
		dispatch(action2);
	}, []);
	const handleChangeCumRap = (ma) => {
		const newDSCumRap = arrLichChieuHeThongRap.find((item) => {
			return item.maHeThongRap === ma;
		});
		changeDSCumRap(newDSCumRap);
	};

	const renderHeThongRap = () => {
		return arrHeThongRap.map((item, index) => {
			return (
				<img
					onClick={() => {
						handleChangeCumRap(item.maHeThongRap);
					}}
					width='30'
					height='30'
					src={item.logo}
					alt=''
					key={index}
				/>
			);
		});
	};
	return (
		<div className='card'>
			<div className='row'>
				<div className='col-2'>{renderHeThongRap()}</div>
				<div className='col-10'>
					<div className='row'>
						<div className='col-4'>
							<TCCumRap dsCumRap={dsCumRap} />
						</div>
						<div className='col-8'>
							<TCDanhSachPhimTheoCumRap />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
