import React, { useState, useRef, useEffect } from "react";
import generatePDF from "react-to-pdf";
import download from "../../Data/download.png";
 import jsPDF from "jspdf";
 import 'jspdf-autotable';
 import  logo_hospital from '../../Data/logo_hospital.png'
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
} from "@mui/material";
import TotalAmount from "./TotalAmount";
const ItemList = ({ items, selectedPatient, onDeleteItem , total }) => {
console.log(items)
    const targetRef = useRef();
    const [ showModal , setShowModel] = useState(false);
    const [hospitalName, setHospitalName] = useState("Your Hospital Name");
    const [hospitalAddress, setHospitalAddress] = useState("Your Hospital Address");
  
    const MyModal = () => {
      useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "auto";
        };
      }, []);
    
      return (
        <div>
          <div
            className="fixed inset-0  bg-sky-50 bg-opacity-80"
            onClick={()=>{ setShowModel(false)}}
          ></div>
          <div className="fixed top-2/4 left-2/4  transform -translate-x-2/4 -translate-y-2/4   rounded-md shadow-lg">
            <div className="max-h-[80vh] overflow-y-auto no-scrollbar">
              <div className="bg-theme-white-default box-border border-2  h-100 w-[850px]">
              <div className=" h-28 bg-slate-400"></div>
              </div>
            </div>
          
          </div>
        </div>
      );
    };
    
    const downloadPDF = () => {
      const doc = new jsPDF({
        orientation: "landscape", // Set landscape orientation for full width
        unit: "pt", // Use points as units for precise sizing
        format: [800, 1000], // Set paper size (adjust as needed)
      });
  
      // Hospital details (hidden in the web view)
      doc.setFontSize(10);
      doc.text(hospitalName, 50, 20); // Adjust horizontal position as needed
      doc.text(hospitalAddress, 50, 30); // Adjust horizontal position as needed
  
      // Table data
      const tableData = items.map((item) => [item.selectedItem, item.quantity, item.price]);
  
      // Create table with header, underline, and body
      const head = [["Item", "Quantity", "Price"]];
      doc.autoTable({
        // Adjust vertical starting position as needed
        head,
        headStyles: {
          fillColor: [224, 231, 255],
          textColor: [0, 0, 0],
        
        },
        body: tableData,
        bodyStyles: {
          fillColor: [255, 255, 255],
        },
        theme: "striped", // Use grid theme for consistent styling
      
       
      });
  
      doc.save("ItemList.pdf"); // Set filename
    };
  
  return (
    <div>
    
    <div className="self-stretch  mt-16  overflow-hidden shrink-0  items-start justify-start text-text-body-light">
    <div>
	<button
	className="absolute top-[70px] left-[1065px] rounded-md  h-10 bg-theme-white-default box-border w-[156px] flex flex-col items-start justify-start py-2.5 px-5 text-theme-primary-dark border-[1px] border-solid border-theme-primary-dark"
	onClick={()=>{ setShowModel(true)}}
  >
	<div className="w-24 my-0 mx-[!important] absolute top-[calc(50%_-_8px)] left-[calc(50%_-_48px)] flex flex-row items-center justify-start gap-[8px] z-[0]">
	  <img
		className="w-4 relative h-4 overflow-hidden shrink-0"
		alt=""
		src={download}
	  />
	  <div className="relative font-semibold">Download </div>
	</div>
  </button>{showModal && <MyModal/>}</div>
      <TableContainer ref={targetRef}>
        <Table>
          <TableHead className=" bg-indigo-100 w-full">
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>patient</TableCell>
              <TableCell>Price</TableCell>
			  <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
		  <TableBody>
		  {items.map((item, index) => (
			  <TableRow key={index}>
			  <TableCell>{item.selectedItem}</TableCell>
			  <TableCell>{item.quantity}</TableCell>
        <TableCell>{item.selectedPatient}</TableCell>
			  <TableCell>{item.price}</TableCell>
			  <buttons
			  className=" top-[13px] left-[71px] rounded flex flex-col items-center justify-start py-2 px-4 border-[1px] border-solid border-royalblue  w-28 mt-3 gap-[6px] leading-[10px] bg-btn font-medium text-white "
			  onClick={() => onDeleteItem(index)}
			>
			  Delete
			</buttons>
		
			  </TableRow>
		  ))}
		  </TableBody>
		
        </Table>
		<div className=" font-bold text-xl mt-20 ml-[750px] top-32 right-[200px]">
		Total Amount:
		Rupees {total.toFixed(2)}
		</div>
      </TableContainer>
    
   
    </div></div>
  );
};

export default ItemList;
