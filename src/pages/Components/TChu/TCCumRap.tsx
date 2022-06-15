import React, { useEffect, useState } from "react";
import { DSCumRapModel } from "../../../_core/models/DSCumRapModel";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";
type Props = {
	dsCumRap: DSCumRapModel;
};
interface Item {
	danhSachPhim: Object[];
	diaChi: string;
	hinhAnh: string;
	maCumRap: string;
	tenCumRap: string;
}
export const TCCumRap = ({ dsCumRap }: Props) => {
	console.log("dsCumRap", dsCumRap);
	function renderDSCumRap() {
		// if (dsCumRap.lstCumRap) {
		// 	return dsCumRap.lstCumRap.map((item: Item, index) => {
		// 		<div className='row'>
		// 			<div className='col-2'>
		// 				<img src={item.hinhAnh} alt='' />
		// 			</div>
		// 		</div>;
		// 	});
		// } else {
		// 	return <p>error</p>;
		// }
	}
	return <>{renderDSCumRap()}</>;
};
