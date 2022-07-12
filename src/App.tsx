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
import Detail from "./pages/detail/Detail";


export const history = createBrowserHistory();

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
			<Router history={history}>
				<Switch>
					<HomeTemplate path={"/home"} Component={TrangChu} />
					<HomeTemplate path={"/contact"} Component={Contact} />
					<HomeTemplate path={"/news"} Component={News} />
					<HomeTemplate path={"/detail/:id"} Component={Detail} />






					<CheckoutTemplate path={"/checkout/:id"} Component={TabCheckout} />
					



					<UserTemplate path={'/login'} Component={Login} />
					<UserTemplate path={'/register'} Component={Register} />


					<HomeTemplate path={"/"} Component={TrangChu} />
				</Switch>
			</Router>
			</BrowserRouter>
		</div>
	);
}

export default App;
