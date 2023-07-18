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
import AddFamilyPlan from "./pages/Nurse/AddFamilyPlan";
import AddVitalSign from "./pages/Nurse/AddVitalSign";

import LabReport from "./pages/Laboratory/LabReport";
import LabInvestigation from "./pages/Laboratory/LabInvestigation";
import LabRequest from "./pages/Laboratory/LabRequest";

import PatientRecord from "./pages/Doctor/PatientRecord";
import DoctorLabRequest from "./pages/Doctor/DoctorLabRequest";
import ViewDoctorPatient from "./pages/Doctor/ViewDoctorPatient";

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

              {/* DOCTOR */}
              <Route>
              <Route path="/doctorPatientRecord" exact element={<PatientRecord />} />
              <Route path="viewdoctorPatient/:id" element={<ViewDoctorPatient />} />
              <Route path="/doctorLabRequest" index element={<DoctorLabRequest />} />
            </Route>

              {/* Laboratory */}
              <Route>
                <Route path="/labReport" index element={<LabReport />} />
                <Route path="/labResults" index element={<LabRequest />} />
                <Route path="/labInvestigation" index element={<LabInvestigation/>} />
              </Route>
 
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
