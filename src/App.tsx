import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routers/Approutes";
import "./App.css";

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="dark"
        limit={1}
      />
    </>
  );
}

export default App;
