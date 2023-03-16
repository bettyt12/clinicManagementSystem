import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

import Reception from "./pages/Reception/Reception";
import PatientRecordTable from "./pages/Reception/PatientRecordTable";
import ViewPatient from "./pages/Reception/ViewPatient";
import AddPatient from "./pages/Reception/AddPatient";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Staff from "./pages/Admin/Staff/Staff";
import AddNewBorn from "./pages/Nurse/AddNewBorn";
//import AdmittedPatientList from "./pages/Doctor/AdmittedPatientList";
import AddFamilyPlan from "./pages/Nurse/AddFamilyPlan";
import AddVitalSign from "./pages/Nurse/AddVitalSign"

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
              <Route path="addPatient" element={<AddPatient />} />
            </Route>

              {/* ADMIN */}
              <Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/staff" element={<Staff />} />
              </Route>

              {/* NURSE */}
              <Route>
                <Route path="/addNewBorn" index element={<AddNewBorn />} />
                <Route path="/addFamilyPlan" index element={<AddFamilyPlan />} />
                <Route path="/addVitalSign" index element={<AddVitalSign />} />
              </Route>

              {/* DOCTOR 
              <Route>
              <Route path="/patientrecord" exact element={<PatientRecordTable />} />
              <Route path="viewPatient/:id" element={<ViewPatient />} />
              <Route path="addPatient" element={<AddPatient />} />
            </Route>
            */}
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
