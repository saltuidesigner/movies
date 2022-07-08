import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export const Header = (props: Props) => {
	return (
		<header
			className='d-flex p-2 header align-items-center
			justify-content-around
			text-white bg-gray-500 '>
			<div className='header-logo'>
				<NavLink to='/' href='#'>
					<img
						src='https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png'
						alt=''
					/>
				</NavLink>
			</div>
			<ul className='nav'>
				<li className='nav-item'>
					<NavLink
						className='nav-link text-white active'
						activeClassName='active'
						style={(isActive) => ({
							color: isActive ? "blue" : "white",
						})}
						aria-current='page'
						href='#'
						to='/'>
						Home
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						activeClassName='active'
						style={(isActive) => ({
							color: isActive ? "blue" : "white",
						})}
						className='nav-link text-white'
						aria-current='page'
						href='#'
						to='/contact'>
						Contact
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						activeClassName='active'
						style={(isActive) => ({
							color: isActive ? "blue" : "white",
						})}
						className='nav-link text-white'
						aria-current='page'
						href='#'
						to='/news'>
						News
					</NavLink>
				</li>
			</ul>
		</header>
	);
};
