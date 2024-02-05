import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import { useNavigate } from 'react-router-dom'

const Recipt_Form = () => {
  const navigate = useNavigate();
  const handle =()=>{
    navigate("/Accounts/Tabs/Recipt");
  }
  return (
    <div> <Breadcrumb></Breadcrumb><div className="flex flex-col justify-center w-[1100px] px-7 py-12 bg-slate-50 max-md:px-5">
    <div className="flex flex-col pt-3 pb-12 mt-11 bg-white max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between mx-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-auto my-auto text-xl font-medium leading-6 text-slate-800">
          Payment Voucher{" "}
        </div>
    
      </div>
      <div className="shrink-0 mt-2 h-px bg-slate-100 max-md:max-w-full" />
      <div className="flex flex-col px-7 mt-6 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
        <div className="text-sm text-slate-600 max-md:max-w-full">
          Payer Name
        </div>
        <input className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full" name='name' type='number' 
        placeholder=' enter the payer name' >
         
        </input>
      </div>
      <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
        <div className="text-sm text-slate-600 max-md:max-w-full">
          {" "}
          Amount
        </div>
        <input className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full" name='Amount' type='number' placeholder=' enter the amount'>
       
        </input>
      </div>
    </div>
      
    <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
    <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
      <div className="text-sm text-slate-600 max-md:max-w-full">
        Date
      </div>
      <input className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full" name='date' type='date' 
      placeholder=' enter the date' >
       
      </input>
    </div>
    <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
      <div className="text-sm text-slate-600 max-md:max-w-full">
        {" "}
        description / Purpose
      </div>
      <input className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full" name='description' type='area' placeholder=' enter the description'>
     
      </input>
    </div>
  </div>
      </div>
      <div className="flex gap-5 justify-between self-end mt-36 mr-8 text-base font-semibold leading-4 whitespace-nowrap max-md:mt-10 max-md:mr-2.5">
        <div className="grow justify-center px-8 py-4 text-blue-700 rounded-lg border border-blue-700 border-solid max-md:px-5">
          Cancel
        </div>
        <div className="grow justify-center px-10 py-4 text-white bg-blue-700 rounded-lg border border-solid border-[color:var(--Theme-Primary-Default,#4C6FFF)] max-md:px-5" onClick={handle}>
          Add
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Recipt_Form