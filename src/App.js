import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Reception from "./pages/Reception/Reception";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" index element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" exact element={<Reception />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
