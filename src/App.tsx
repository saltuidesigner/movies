import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import TrangChu from "./pages/TrangChu/TrangChu";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { Contact } from "./pages/Contact/Contact";
import { News } from "./pages/News/News";
import "antd/dist/antd.css";
import TabCheckout from "./pages/Checkout/Checkout";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import "./App.css";
export const history = createBrowserHistory();

function App() {
	return (
		<div className='App'>
			<Router history={history}>
				<Switch>
					<HomeTemplate path={"/contact"} Component={Contact} />
					<HomeTemplate path={"/news"} Component={News} />
					<CheckoutTemplate path={"/checkout/:id"} Component={TabCheckout} />
					<HomeTemplate path={"/"} Component={TrangChu} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
