import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { fetchFilmApi } from "../../../redux/reducers/TrangChu/QuanLyPhimReducer";
import { MultipleRows } from "../RSlick/MultipleRowSlick";

type Props = {};

export const TCQuanLyPhim = (props: Props) => {
	const { arrFilm } = useSelector(
		(state: RootState) => state.QuanLyPhimReducer
	);
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchFilmApi());
	}, []);
	// <<<<<<< HEAD

	return (
		<div className='row'>
			<div className='container p-5'>
				<MultipleRows arrFilm={arrFilm} />
			</div>
		</div>
	);
	// =======
	function renderFilms() {
		return arrFilm.map((item, index) => {
			return (
				<div className='col-3 p-2' key={index}>
					<div className='card' style={{ height: "500px" }}>
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
							<p className='card-text text-xl'>{item.tenPhim}</p>
						</div>
						<div className='bg-green-400 text-white p-2 text-center cursor-pointer'>
							<NavLink to={`/detail/${item.maPhim}`}>ĐẶT VÉ</NavLink>
						</div>
					</div>
				</div>
			);
		});
	}
	return <div className='row'>{renderFilms()}</div>;
	// >>>>>>> 04349cf7c650a85464f7d967730e364fff3132c3
};
