import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { fetchCarouselApi } from "../../../redux/reducers/TrangChu/CarouselReducer";

type Props = {};

export const TCCarousel = ({}: Props) => {
	const contentStyle = {
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100%",
		height: "450px",
		lineHeight: "160px",
	};
	const { arrCarousel } = useSelector(
		(state: RootState) => state.CarouselReducer
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchCarouselApi());
	}, []);

	function renderArrCarousel() {
		return arrCarousel.map((item, index) => {
			return (
				<div
					style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
					key={index}
					className='carousel-item active'>
					<img
						// src={item.hinhAnh}
						style={{ opacity: 0 }}
						className='d-block w-100 h-100'
						alt='...'
					/>
				</div>
			);
		});
	}
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide'
			data-bs-ride='carousel'>
			<div className='carousel-indicators'>
				<button
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide-to={0}
					className='active'
					aria-current='true'
					aria-label='Slide 1'
				/>
				<button
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide-to={1}
					aria-label='Slide 2'
				/>
				<button
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide-to={2}
					aria-label='Slide 3'
				/>
			</div>
			<div className='carousel-inner'>{renderArrCarousel()}</div>
		</div>
	);
};
