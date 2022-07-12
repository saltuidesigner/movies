import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import TrangChu from "./pages/TrangChu/TrangChu";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { Contact } from "./pages/Contact/Contact";
import { News } from "./pages/News/News";
import "antd/dist/antd.css";
import TabCheckout from "./pages/Checkout/Checkout";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import "./App.css";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


export const history = createBrowserHistory();

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
			<Router history={history}>
				<Switch>
					<HomeTemplate path={"/contact"} Component={Contact} />
					<HomeTemplate path={"/news"} Component={News} />
					<CheckoutTemplate path={"/checkout/:id"} Component={TabCheckout} />
					<HomeTemplate path={"/"} Component={TrangChu} />
					<UserTemplate path={'/login'} Component={Login} />
					<Route path={'/register'} component={Register} />
				</Switch>
			</Router>
			</BrowserRouter>
		</div>
	);
}

export default App;
