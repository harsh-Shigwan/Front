

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Plus from "../../Data/Plus.png";
import download from "../../Data/download.png";
import search from "../../Data/search.png";
import edit from "../../Data/edit.png";

import generatePDF from "react-to-pdf";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  makeStyles,
  TBody,
  Paper,
  TableContainer,
  TablePagination,
  Button,
  Typography,
  TextField,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
const IPD = () => {


  const API = "http://127.0.0.1:8000/api/ipd/ipd-registrations/";
  const API1 = "http://127.0.0.1:8000/api/patient/api/patients/";
  const [myData, setMyData] = useState([]);
  const [myData1, setMyData1] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async (api , setDataFunction) => {
    try {
      const res = await axios.get(api);
      setDataFunction(res.data);
    } catch (error) {
      setIsError(error.toJSON().message);
    }
  };
  useEffect(() => {
    getApiData(API , setMyData);
    getApiData( API1 , setMyData1)
  }, []);

  const navigate = useNavigate();
  const handle = () => {
    navigate("/Patient/IPD/Add_Patient");
  };
  const navigate1 = useNavigate();

  const handlechangepage = (event, newpage) => {
    setPage(newpage);
  };
  const handleRowPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [page, setPage] = useState(0);
  const [rowperpage, setRowPerPage] = useState(10);

  const targetRef = useRef();
  const [searh, setSearch] = useState("");
  console.log(searh)
  return (
    <div>
     <Breadcrumb></Breadcrumb>
      <div className="w-[1000px] ml-[70px] mt-0 relative bg-whitesmoke h-[984px] flex flex-col items-center justify-start pt-0 px-[30px] pb-[30px] box-border text-left text-xs text-f2d3d font-table-body-heading">
        <div className="flex flex-col items-center justify-start pt-5 px-0 pb-0">
          <div className="h-[692px] flex flex-col items-start justify-start">
            <div className="w-[1110px] relative bg-theme-white-default h-[692px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[0px] w-[1110px] flex flex-col items-start justify-start">
                <div className="self-stretch relative h-[60px] overflow-hidden shrink-0">
                  <div className="absolute w-full top-[60px] right-[0px] left-[0px] bg-gray-200 box-border h-0 border-t-[1px] border-solid border-border-light" />
                  <div className="absolute top-[18px] left-[22px] text-[20px] leading-[24px] font-medium">
                    In Patient Discharged
                  </div>
                  <input className="absolute top-[11px] left-[588px] rounded-[30px] bg-theme-white-default box-border w-[161px] h-[38px] border-[1px] border-solid pl-5  border-black" defaultValue={searh} onChange={(e)=>{ setSearch(e.target.value)}} />
                  <div className="absolute  top-[18px] left-[600px] h-[23.75px] flex flex-row  ml-28 items-start justify-start">
                    <img
                      className="w-5 relative h-5  overflow-hidden shrink-0"
                      alt=""
                      src={search}
                    />
                  </div>

                  <button
                    className="absolute top-[11px] left-[937px] rounded-md bg-theme-primary-dark w-[156px] flex flex-col items-start justify-start py-2.5 px-5  h-10 box-border text-theme-white-default"
                    onClick={handle}
                  >
                    <div className="w-24 my-0 mx-[!important] absolute top-[10px] left-[30px] flex flex-row items-center justify-start gap-[8px] z-[0]">
                      <img
                        className="w-5 relative h-5 object-cover"
                        alt=""
                        src={Plus}
                      />
                      <div className="relative font-semibold">Add Patient</div>
                    </div>
                  </button>
                  <button
                    className="absolute top-[11px] left-[765px] rounded-md  h-10 bg-theme-white-default box-border w-[156px] flex flex-col items-start justify-start py-2.5 px-5 text-theme-primary-dark border-[1px] border-solid border-theme-primary-dark"
                    onClick={() =>
                      generatePDF(targetRef, {
                        filename: "IPD_Patient_List.pdf",
                      })
                    }
                  >
                    <div className="w-24 my-0 mx-[!important] absolute top-[calc(50%_-_8px)] left-[calc(50%_-_48px)] flex flex-row items-center justify-start gap-[8px] z-[0]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src={download}
                      />
                      <div className="relative font-semibold">Download </div>
                    </div>
                  </button>
                </div>
                <div className="self-stretch shrink-0  items-start justify-start text-text-body-light">
                  <page>
                    <TableContainer ref={targetRef}>
                      <Table>
                        <TableHead className=" bg-indigo-100 w-full">
                          <TableRow>
                            <TableCell>Admission Id</TableCell>
                            <TableCell>Admission Date </TableCell>
                            <TableCell>Ward</TableCell>
                            <TableCell>Bed Number</TableCell>
                            <TableCell>Full Name</TableCell>
                            
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {myData
                            .slice(
                              page * rowperpage,
                              page * rowperpage + rowperpage
                            ).filter((item)=>
                              searh.toLowerCase() === '' ||
                              item.ward.toLowerCase().includes(searh)
                            )
                            .map((user , index) => (
                              <TableRow key={index}>
                                <TableCell>{user.admission_id}</TableCell>
                                <TableCell>{user.admission_date} </TableCell>
                                <TableCell>{user.ward}</TableCell>
                                <TableCell>{user.bed_number}</TableCell>
                              <TableCell>{myData1[0]?.FirstName}</TableCell>
                               

                                <div className="w-[190px] relative my-0 mx-[!important] left-[0px] bg-theme-white-default shadow-[0px_-1px_0px_#edf2f7_inset] h-[52px] overflow-hidden shrink-0 z-[22]">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[24px] w-6 h-6 hidden"
                                    alt=""
                                    src=""
                                  />
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[21px] w-6 h-6 overflow-hidden"
                                    alt=""
                                    src={edit}
                                  />
                                  <Link
                                    className="absolute top-[13px] left-[71px] rounded flex flex-col items-center justify-start py-2 px-4 border-[1px] border-solid border-royalblue"
                                    to={`/Patient/IPD/Add_Patient/IPD_View/${user.admission_id}`}
                                  >
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                      <img
                                        className="w-2.5 relative h-2.5 hidden"
                                        alt=""
                                        src="/icon.svg"
                                      />
                                      <div className="relative leading-[10px] font-medium">
                                        View
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                      <TablePagination
                      count={20}
                      page={page}
                      rowperpage={rowperpage}
                      component="div"
                      onPageChange={handlechangepage}
                      onRowsPerPageChange={handleRowPerPage}
                    ></TablePagination>
                    </TableContainer>
                  </page>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPD;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const IPD = () => {
//   const [patientDetails, setPatientDetails] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch patient equipment data from the second API
//         const equipmentResponse = await axios.get('http://127.0.0.1:8000/inventory/api/patient-equipment-usage/');
//         console.log(equipmentResponse)
//         // Extract Patient_ID from the equipment data
//         const patientId = equipmentResponse.data.Patient_ID;

//         // Fetch patient details using the extracted Patient_ID
//         const patientResponse = await axios.get(`http://127.0.0.1:8000/api/patient/api/patients/${patientId}`);
// console.log( patientResponse.data)
//         // Extract FirstName and email from the patient details response
//         const { FirstName, email } = patientResponse.data;

//         // Set patientDetails state with extracted data
//         setPatientDetails({ FirstName, email });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         console.log("error")
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {patientDetails ? (
//         <div>
//           <h2>Patient Details</h2>
//           <p>First Name: {patientDetails.FirstName}</p>
//           <p>Email: {patientDetails.email}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default IPD;
