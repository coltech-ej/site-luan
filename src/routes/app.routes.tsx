import { Route, Routes } from "react-router-dom";
import { Contacts } from "../pages/contato";

import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Services } from "../pages/services";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/services" element={<Services />} />
			<Route path="/contacts" element={<Contacts />} />
		</Routes>
	);
}
