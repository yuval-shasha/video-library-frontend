import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<main className="container">
				<Routes>
					<Route path="/login" element={<LoginForm />} />
					<Route path="/movies/:id" element={<MovieForm />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/customers" element={<Customers />} />
					<Route path="/rentals" element={<Rentals />} />
					<Route path="/not-found" element={<NotFound />} />
					<Route path="/" element={<Navigate to="/movies" replace />} />
					<Route path="*" element={<Navigate to="/not-found" replace />} />
				</Routes>
			</main>
		</React.Fragment>
	);
}

export default App;
