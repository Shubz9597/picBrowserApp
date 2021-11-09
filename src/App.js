import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { DisplayList } from "./pages/DisplayList";
import { DetailPage } from "./pages/DetailPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://www.reddit.com/r/pics/.json?jsonp=")
			.then((res) => res.json())
			.then((data) => {
				setList(data.data.children);
			});
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/images" />}></Route>
				<Route path="/images" element={<DisplayList list={list} />} />
				<Route path="images/:id" element={<DetailPage list={list} />} />
			</Routes>
		</Router>
	);
};

export default App;
