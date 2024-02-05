import React, { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Patient from './pages/Patient';
import Appointment from './pages/Appointment';
import Doctor from './pages/Doctor/Doctor';
import Inventory from './pages/Inventory/Inventory';
import Pharmacy from './pages/Pharmacy/Pharmacy';
import Sidebar from './components/Sidebar';
import Report from './pages/Report';
import OPD from './pages/Patient/OPD';
import IPD from './pages/Patient/IPD';
import OPD_New from './pages/Patient/OPD_New';
import Patient_Detail from './pages/Patient/Patient_Detail';
import Add_Patient from './pages/Patient/Add_Patient';
import Patient_Profile from './pages/Patient/Patient_Profile';
import Detail from './pages/Doctor/Details';
import Details from './pages/Doctor/Details';
import Add_Doctor from './pages/Doctor/Add_Doctor';
import Records from './pages/Records/Records';
import RecordsPage2 from './pages/Records/RecordsPage2';
import IPD_Form from './pages/Patient/IPD_Form';
import Home from './pages/Patient/Home';
import Add_Records from './pages/Pharmacy/Add_Records';
import Medicines from './pages/Pharmacy/Medicines';
import Add_Medicines from './pages/Pharmacy/Add_Medicines';
import Add_Medicine_Inventory from './pages/Inventory/Add_Medicine_Inventory';
import Equipment from './pages/Inventory/Equipment';
import Add_Equipment from './pages/Inventory/Add_Equipment';
import Accounts from './pages/Accounts/Accounts';
import Account_Profile from './pages/Accounts/Account_Profile';
import Recipt_Form from './pages/Accounts/Tabs/Recipt_Form';
//import Medicine from './pages/Pharmacy/Medicine';
const App = () => {

  return (
   
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Appointment" element={<Appointment />}></Route>
            <Route path="/Doctor" element={<Doctor />}></Route>
            <Route path="/Inventory" element={<Inventory />}></Route>
            <Route path="/Inventory/Equipment" element={<Equipment />}></Route>
            <Route path="/Inventory/Equipment/Add_Equipment" element={<Add_Equipment/>}></Route>
            <Route path="/Inventory/Add_Medicine_Inventory" element={<Add_Medicine_Inventory />}></Route>
            <Route path="/Pharmacy" element={<Pharmacy />}></Route>
            <Route path="/Report" element={<Report />}></Route>
            <Route path="/Patient/OPD" element={<OPD />}></Route>
            <Route path="/Patient/IPD" element={<IPD />}></Route>
            <Route path="/Patient/IPD/Add_Patient" element={<IPD_Form />}></Route>
            <Route path="/Patient/OPD/AddPatient" element={<OPD_New />}></Route>
            <Route path='/Patient/Patient_Details' element={<Patient_Detail/>}></Route>
            <Route path='/Patient/Patient_Details/Add_Patient' element={<Add_Patient/>}></Route>
            <Route path='/Patient/Patient_Details/:PatientID' element={<Patient_Profile/>}></Route>
            <Route path='/Doctor/Details' element={<Details/>}/>
            <Route path='/Doctor/Details/Add_Doctor' element={<Add_Doctor/>}/>
            <Route path='/Records' element={<Records/>}></Route>
            <Route path='/Records/Recodrsupload' element={<RecordsPage2/>}></Route>
            <Route path='/Pharmacy/Add_Records' element={<Add_Records/>}></Route>
            <Route path='/Pharmacy/Medicines' element={<Medicines/>}></Route>
            <Route path='/Pharmacy/Medicines/Add_Medicines' element={<Add_Medicines/>}></Route>
            <Route path='/Accounts' element={<Accounts/>}></Route>
            <Route path='/Accounts/Account_Profile' element={<Account_Profile/>}></Route>
            <Route path='/Accounts/Account_Profile/Recipt_Voucher' element={<Recipt_Form/>}></Route>
          </Routes>
        </Sidebar>
      </Router>
  
  );
}

export default App