import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

import Reception from "./pages/Reception/Reception";
import PatientRecordTable from "./pages/Reception/PatientRecordTable";
import ViewPatient from "./pages/Reception/ViewPatient";
import AddPatient from "./pages/Reception/AddPatient";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" index element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" exact element={<Reception />}/>
            <Route>
              <Route path="/patientrecord" exact element={<PatientRecordTable />} />
              <Route path="viewPatient/:id" element={<ViewPatient />} />
              <Route
                path="addPatient"
                element={<AddPatient />}
              />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
