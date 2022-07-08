import React from "react";
import { Route } from "react-router-dom";
import { Footer } from "./Layout/Footer/Footer";
import { Header } from "./Layout/Header/Header";

type Props = {
	Component: React.ElementType; //day la data type cua 1 component
	path: string;
	mobileComponent?: (props: React.ElementType) => React.FC<Props>;
};

export default function HomeTemplate(props: Props) {
	const { Component, ...restProps } = props;
	return (
		<Route
			{...restProps}
			render={(propsRoute) => {
				return (
					<>
						<Header />
						<Component {...propsRoute} />
						<Footer />
					</>
				);
			}}
		/>
	);
}
