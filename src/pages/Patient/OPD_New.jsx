import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OPD_New = () => {
  const [ formData , setFormData]= useState({
    
    visit_date:"",
    ddepartment:"",
    patient_id:"",
    doctor_id:""
  }); //1st
  const navigate = useNavigate(); //2nd
  const handle =()=>{
    navigate("/Patient/OPD")
  }

 
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value }); //3rd
  };

//-------------------------------------------------------
 
  const baseUrl = 'http://127.0.0.1:8000/api/opd/api/opd-register/';

  const SubmitForm = async (event) => {
    event.preventDefault();
    setFormData({
    
    visit_date:"",
    ddepartment:"",
    patient_id:"",
    doctor_id:""
    })
      alert("Registration is Done.")
    try {
      const patientFormData = new FormData();
      for (const key in formData) {
        patientFormData.append(key, formData[key]);
      }

      const response = await axios.post(baseUrl, patientFormData);
      console.log("Response from server:", response);
      // Check the response and handle accordingly
      if (response.status === 201) {
        console.log("Patient registered successfully!");
        setFormData({
          // ... (reset form fields)
        });
      } else {
        console.log("Registration failed. Status code:", response.status);
        console.log("Response data:", response.data); // Log the response data for more details
        setFormData({ 'status': 'error' });
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      console.log("Error response data:", error.response?.data);
    
      // Log additional details about the error
      if (error.response?.data) {
        console.log("Detailed error:", error.response.data);
      }
    
      setFormData({ 'status': 'error' });
    }
  };

 
  return (
    <div className=' '><Breadcrumb></Breadcrumb>
    <fieldset>
    
    <form  onSubmit={SubmitForm} className="m-0 w-[1110px] bg-theme-white-default overflow-hidden flex flex-col items-center justify-start py-6 pr-[22px] pl-[26px] box-border gap-[30px] mt-5" >
    <div className="w-[1062px] overflow-x-auto flex flex-row items-start justify-start gap-[42px]">
      <div className="w-[510px] shrink-0 flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative text-sm font-medium font-forms-label text-text-body-light text-left">
            visit_date
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-input-muted-background self-stretch h-[46px] rounded-md flex flex-row items-center justify-start pt-3.5 px-4 pb-[17px] box-border font-forms-label font-medium text-mini text-slategray min-w-[250px]"
            placeholder="XYZ"
            type="date" name='visit_date' value={formData.visit_date} onChange={handleChange} 
          />
          <div className="self-stretch h-3 relative hidden">
            <div className="absolute w-full top-[0%] left-[0%] text-2xs leading-[12px] font-forms-label text-text-body-muted text-left flex items-center">
              This is a helper text
            </div>
          </div>
        </div>
      </div>
      <div className="w-[510px] shrink-0 flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative text-sm font-medium font-forms-label text-text-body-light text-left">
            doctor_id
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-input-muted-background self-stretch h-[46px] rounded-md flex flex-row items-center justify-start pt-3.5 px-4 pb-[17px] box-border font-forms-label font-medium text-mini text-slategray min-w-[250px]"
            placeholder="doctor_id"
            type="text"  name='doctor_id' value={formData.doctor_id} onChange={handleChange} 
          />
          <div className="self-stretch h-3 relative hidden">
            <div className="absolute w-full top-[0%] left-[0%] text-2xs leading-[12px] font-forms-label text-text-body-muted text-left flex items-center">
              This is a helper text
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-end justify-start gap-[43px]">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[42px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[331px]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative text-sm font-medium font-forms-label text-text-body-light text-left">
            Patient ID
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-input-muted-background self-stretch h-[46px] rounded-md flex flex-row items-center justify-start pt-3.5 px-4 pb-[17px] box-border font-forms-label font-medium text-mini text-slategray min-w-[250px]"
            placeholder="XYZ" name='patient_id'
            type="number" onChange={handleChange} value={formData.patient_id}
          />
          <div className="self-stretch h-3 relative hidden">
            <div className="absolute w-full top-[0%] left-[0%] text-2xs leading-[12px] font-forms-label text-text-body-muted text-left flex items-center">
              This is a helper text
            </div>
          </div>
        </div>
        <div className="h-[71px] flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border min-w-[331px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[8px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 relative text-sm font-medium font-forms-label text-text-body-light text-left">
              Department
              </div>
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-input-muted-background self-stretch h-[46px] rounded-md flex flex-row items-center justify-start pt-3.5 px-4 pb-[17px] box-border font-forms-label font-medium text-mini text-slategray min-w-[250px]"
              placeholder="Enter doctor name" name='ddepartment'
              type="text" onChange={handleChange} value={formData.ddepartment}
            />
            <div className="self-stretch h-3 relative hidden">
              <div className="absolute w-full top-[0%] left-[0%] text-2xs leading-[12px] font-forms-label text-text-body-muted text-left hidden items-center">
                Must be 8 characters at least
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[252px] flex flex-row items-start justify-start gap-[26px]">
     
       
      </div> <button  type="submit" className="bg-sky-500 h-10 w-28 rounded-xl  pt-1 absolute left-[1177px] top-[397px] ">Submit</button>  
      <img
        className="h-3.5 w-3.5 relative hidden min-h-[14px]"
        alt=""
        src="/chevronright.svg"
      />
    </div>
  </form></fieldset>
    </div>
  );
};

export default OPD_New;