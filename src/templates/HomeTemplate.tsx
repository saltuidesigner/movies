import React from "react";
import { Link, Route } from "react-router-dom";

type Props = {
	component: React.ElementType; //day la data type cua 1 component
	path: string;
	mobileComponent?: (props: React.ElementType) => React.FC<Props>;
};

// React.ElementType : <div></div>
//React.FC<Props> : HomeTemplate

//const HomeTemplate = ()=>{
// return <div>HomeTemplate</div>}

export default function HomeTemplate(props: Props) {
	return (
		<Route
			path={props.path}
			render={(propsRoute) => {
				return (
					<>
						<header className='bg-dark text-light text-center p-4'>
							<nav>
								<ul className='nav-link'>
									<li className='nav-item'>
										<Link className='nav-link' to='/'>
											Trang Chu
										</Link>
									</li>
								</ul>
							</nav>
						</header>
						<props.component {...propsRoute} />
						<footer className='bg-dark text-light text-center p-4'>
							Footer
						</footer>
					</>
				);
			}}
		/>
	);
}
