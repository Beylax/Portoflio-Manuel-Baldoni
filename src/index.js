import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);

reportWebVitals(sendToVercelAnalytics);
