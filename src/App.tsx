import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route
						path={""}
						component={(prop: any) => {
							return <div className='container'>123</div>;
						}}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
