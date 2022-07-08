import React from "react";
import { Route } from "react-router-dom";

type Props = {
	Component: React.ElementType; //day la data type cua 1 component
	path: string;
	mobileComponent?: (props: React.ElementType) => React.FC<Props>;
};

export default function CheckoutTemplate(props: Props) {
	const { Component, ...restProps } = props;
	// if (!localStorage.getItem(USER_LOGIN)) {
	// 	return <Redirect to='/login' />;
	// }
	return (
		<Route
			{...restProps}
			render={(propsRoute) => {
				return (
					<>
						<Component {...propsRoute} />
					</>
				);
			}}
		/>
	);
}
