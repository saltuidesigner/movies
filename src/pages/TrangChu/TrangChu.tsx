import React, { useEffect } from "react";

import { TCBanner } from "../Components/TChu/TCBanner";
import { TCDanhSachPhim } from "../Components/TChu/TCDanhSachPhim";
import { TCHeThongRap } from "../Components/TChu/TCHeThongRap";

type Props = {};

export default function TrangChu({}: Props) {
	return (
		<div className='container-fluid p-0'>
			<section className='tc_banner'>
				<div className='container-fluid p-0'>
					<TCBanner />
				</div>
			</section>
			<section className='tc_danhsachphim'>
				<div className='container pt-5 pb-5'>
					<TCDanhSachPhim />
					<TCHeThongRap />
				</div>
			</section>
		</div>
	);
}
