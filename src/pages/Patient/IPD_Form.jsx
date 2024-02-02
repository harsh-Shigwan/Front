import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Breadcrumb from '../../components/Breadcrumb';
const IPD_Form = () => {
  
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [ formData , setFormData]= useState({
    patient :"",
    admission_id:"",
    ward_type:"",
    bed_number:"",
      number:"",
        doctor:"",
        ward:"", 
        admission_date:"", 
    

  }); //1st
  const navigate = useNavigate(); //2nd
  const handle =()=>{
    navigate("/Patient/IPD")
  }
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value }); //3rd
  };
  // type='text' name="Name" onChange={handleChange} placeholder='Enter full name'
  // onChange={handleChange} 
  const [selectedFile, setSelectedFile] = useState(null);

 


  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);

   // Use Axios to send a POST request with the form data
    axios.post('http://127.0.0.1:8000/api/ipd/ipd-registrations/', formData)
      .then((response) => {
        console.log('API Response:', response.data);
        // Add logic to handle the API response, if needed
        navigate('/Patient/IPD');
      })
      .catch((error) => {
        console.error('API Error:', error);
        console.log("Error response data:", error.response?.data);
        // Add logic to handle the API error, if needed
      });
  };
  useEffect(() => {
    const fetchPatients = async () => {

      try {
        // Only fetch data if searchQuery has some input
        if (searchQuery.length > 0) {
          const response = await axios.get(`http://127.0.0.1:8000/api/patient/api/patients/?search=${searchQuery}`);
          setPatients(response.data);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
        console.log("Error response data:", error.response?.data);

      }
    };
    fetchPatients();
  }, [searchQuery]);
  formData.patient=searchQuery;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
return(
    <div>
   
 <fieldset>
      <form className="items-stretch w-[1100px] bg-slate-50 flex flex-col pt-5 pb-12 px-8 max-md:px-5" onSubmit={handleSubmit}>
      <div className="items-stretch bg-white flex flex-col justify-center py-1.5 max-md:max-w-full">
        <div className="flex flex-col justify-center pl-7 pr-16 py-2 items-start max-md:max-w-full max-md:px-5">
          <div className="backdrop-blur-[5px]  flex   max-w-full items-stretch justify-between gap-5 pl-4 pr-1 py-1.5 rounded-xl">
            <input className=" text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5"     type="text"
                placeholder="Search by name or ID"
                 value={searchQuery}
                  onChange={handleSearchChange} >
             
            </input>    
           
          
            
          </div>
          
        </div>
      </div>
      <div className="items-stretch bg-white flex flex-col mt-8 pb-7 px-7 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                  Full name
                </div>
                <div className='   h-10'>
                <div className=' text-slate-600 mb-10  overflow-hidden h-8 mt-2'>
                {patients.map((patient) => (
                  <div className='  bg-slate-50 h-7 overflow-hidden ' key={patient.PatientID}>
                    {patient.FirstName} 
                  </div>
                ))}
              </div>
              </div>
                
               
                <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                  Ward type
                </div>
                <div>
                
                <input  className="justify-between text-gray-500 border-transparent w-[480px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='text' name='ward_type' onChange={handleChange} placeholder='Select ward' value={formData.ward_type}>

   
                </input>

                </div>
                <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                  Bed number
                </div>
               
                <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="bed_number" onChange={handleChange} placeholder='Enter bed number' value={formData.bed_number}>
                 
                </input>
                   
                  </div>
             
            
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pt-7 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                  Phone number
                </div>
                <div className='   h-11'>
                <div className=' text-slate-600 mb-10  overflow-hidden h-8 mt-2'>
                {patients.map((patient) => (
                  <div className='  bg-slate-50 h-7 overflow-hidden ' key={patient.PatientID}>
                    {patient.phone} 
                  </div>
                ))}
              </div>
              </div>
              <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                  Ward number
                </div>
                 <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="ward" onChange={handleChange} placeholder='Enter ward number' value={formData.ward}>
                 
                </input>
                 <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                Date of arrival
                </div>
                <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='date' name="admission_date" onChange={handleChange} placeholder='Enter date' value={formData.admission_date}>
                 
                </input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-8 self-end">
          <div className="text-blue-700 text-base font-semibold leading-4 items-stretch border grow justify-center px-8 py-4 rounded-lg border-solid border-blue-700 max-md:px-5">
            Cancel
          </div>
          <button className="text-white text-base font-semibold leading-4 items-stretch border border-[color:var(--Theme-Primary-Default,#4C6FFF)] bg-blue-700 grow justify-center px-7 py-4 rounded-lg border-solid max-md:px-5" type='submit'   onClick={() => {
            handleSubmit();  // Manually call the submit function
            handle();  // Call any other functions if needed
          }}
        >
            Submit
          </button>
        </div>
      </div>
    </form></fieldset></div>
  )
}

export default IPD_Form

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const IPD_Form = () => {
  // const [patients, setPatients] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   const fetchPatients = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/patient/api/patients/?search=${searchQuery}`);
  //       setPatients(response.data);
  //     } catch (error) {
  //       console.error('Error fetching patients:', error);
  //     }
  //   };

  //   fetchPatients();
  // }, [searchQuery]);

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

//   return (
//     <div>
//       <h1>Patient List</h1>
//       <input
//         type="text"
//         placeholder="Search by name or ID"
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <ul>
//         {patients.map((patient) => (
//           <li key={patient.PatientID}>
//             {patient.fullname} - ID: {patient.PatientID}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default IPD_Form;