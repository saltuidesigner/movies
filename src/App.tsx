import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TrangChu from "./pages/TrangChu/TrangChu";
import HomeTemplate from "./templates/HomeTemplate";
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<HomeTemplate path={"/"} component={TrangChu} />
			</BrowserRouter>
		</div>
	);
}

export default App;
