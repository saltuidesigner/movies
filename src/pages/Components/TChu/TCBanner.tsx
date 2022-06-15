import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/configStore";
import { getBannerApiAction } from "../../../redux/reducers/trangChuReducer";
type Props = {};

export const TCBanner = ({}: Props) => {
	const { arrBanner } = useSelector((state: RootState) => {
		return state.trangChuReducer;
	});
	const dispatch = useDispatch();
	useEffect(() => {
		//call api'
		const action: any = getBannerApiAction();
		dispatch(action);
	}, []);
	function renderBanner() {
		return arrBanner.map((item, index) => {
			return (
				<div className='carousel-item active' key={index}>
					<img src={item.hinhAnh} className='d-block w-100' alt='...' />
				</div>
			);
		});
	}
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide'
			data-bs-ride='true'>
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
			<div className='carousel-inner'>{renderBanner()}</div>
		</div>
	);
};
