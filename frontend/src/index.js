import React from "react";
import ReactDOM from "react-dom/client";
import App from "./utils/App";
import { AuthProvider } from "./utils/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AuthProvider> <App /> </AuthProvider>);
