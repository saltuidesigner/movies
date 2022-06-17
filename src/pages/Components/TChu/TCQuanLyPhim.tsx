import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { fetchFilmApi } from "../../../redux/reducers/TrangChu/QuanLyPhimReducer";
type Props = {};

export const TCQuanLyPhim = (props: Props) => {
	const { arrFilm } = useSelector(
		(state: RootState) => state.QuanLyPhimReducer
	);
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchFilmApi());
	}, []);
	function renderFilms() {
		return arrFilm.map((item, index) => {
			return (
				<div className='col-3 p-2' key={index}>
					<div className='card' style={{ height: "450px" }}>
						<img
							style={{
								objectFit: "cover",
								height: "350px",
								minHeight: "350px",
								display: "block",
							}}
							src={item.hinhAnh}
							className='card-img-top'
							alt='...'
						/>
						<div className='card-body'>
							<p className='card-text'>{item.tenPhim}</p>
						</div>
					</div>
				</div>
			);
		});
	}
	return <div className='row'>{renderFilms()}</div>;
};
