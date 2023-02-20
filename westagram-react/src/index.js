import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import "./pages/Login/Login.css";
import "./pages/Main/Main.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login />); // 초기 설정
// Main 컴포넌트 확인 시에는 root.render(<Main />);
// Login 컴포넌트 확인 시에는 root.render(<Login />);
