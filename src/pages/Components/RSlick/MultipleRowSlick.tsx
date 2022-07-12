import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
	phimDangChieu,
	phimSapChieu,
} from "../../../redux/reducers/TrangChu/QuanLyPhimReducer";
import slickStyle from "./MultiRowSlick.module.css";
type Props = {
	arrFilm: any[];
};

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} ${slickStyle["slick-prev"]}`}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} ${slickStyle["slick-next"]}`}
			style={{ ...style }}
			onClick={onClick}
		/>
	);
}
export const MultipleRows = (props: Props) => {
	const dispatch = useDispatch<AppDispatch>();
	const { dangChieu, sapChieu } = useSelector(
		(state: RootState) => state.QuanLyPhimReducer
	);
	console.log("dagChieu", dangChieu);
	console.log("sapChieu", sapChieu);
	let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
	let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
	const settings = {
		className: "center variable-width",

		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		rows: 1,
		slidesPerRow: 2,
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	const { arrFilm } = props;
	const renderArrFilm = () => {
		return arrFilm.map((item, index) => {
			return (
				<div key={index} className={`p-2 ${slickStyle["width-item"]}`}>
					<div className='card ' style={{ height: "550px" }}>
						<img
							style={{
								objectFit: "cover",
								height: "300px",
								minHeight: "300px",
								display: "block",
							}}
							src={item.hinhAnh}
							className='card-img-top'
							alt='...'
						/>
						<div className='card-body'>
							<p className='card-text text-xl'>
								{item.tenPhim.length >= 35
									? item.tenPhim + "..."
									: item.tenPhim}
							</p>
						</div>
						<button className='bg-green-400 text-white p-2'>ĐẶT VÉ</button>
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<div>
				<button
					onClick={() => {
						dispatch(phimDangChieu());
					}}
					type='button'
					className={` px-8 py-3 font-semibold rounded bg-gray-800 text-white  me-2 ${activeClassDC}`}>
					PHIM ĐANG CHIẾU
				</button>
				<button
					onClick={() => {
						dispatch(phimSapChieu());
					}}
					type='button'
					className={` px-8 py-3 font-semibold rounded text-gray-800 bg-white  border-gray-800 border ${activeClassSC}`}>
					PHIM SẮP CHIẾU
				</button>
			</div>

			<Slider {...settings}>{renderArrFilm()}</Slider>
		</div>
	);
};
