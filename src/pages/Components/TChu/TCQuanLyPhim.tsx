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
					<div className='card' style={{ height: "600px" }}>
						<div style={{ background: `url(${item.hinhAnh})` }}>
							<img
								style={{
									objectFit: "cover",
									height: "350px",
									minHeight: "350px",
									display: "block",
								}}
								src={item.hinhAnh}
								className='card-img-top w-full'
								alt='...'
							/>
						</div>
						<div className='card-body'>
							<h1 className='card-text text-2xl'>{item.tenPhim}</h1>
							<p>
								{item.moTa.length > 100
									? item.moTa.slice(0, 100) + "..."
									: item.moTa}
							</p>
						</div>
						<div className='text-center bg-green-700 text-white'>
							<a href='#' className='p-2  text-xl inline-flex items-center'>
								DAT VE
							</a>
						</div>
					</div>
				</div>
			);
		});
	}
	return <div className='row'>{renderFilms()}</div>;
};
