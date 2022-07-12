import { TCCarousel } from "../Components/TChu/TCCarousel";
import { TCQuanLyRap } from "../Components/TChu/TCQuanLyRap";
import { TCQuanLyPhim } from "../Components/TChu/TCQuanLyPhim";

type Props = {};

export default function TrangChu({}: Props) {
	return (
		<div className='container-fluid p-0'>
			
			<section className='tc_carousel'>
				<div className='container-fluid p-0'>
					<TCCarousel />
				</div>
			</section>
			<section className='tc_danhsachphim'>
				<div className='container pt-5 pb-5'>
					<TCQuanLyPhim />
				</div>
			</section>
			<section className='tc_cumrap'>
				<div className='container pt-5 pb-5'>
					<TCQuanLyRap />
				</div>
			</section>
		</div>
	);
}
