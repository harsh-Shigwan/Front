import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Tab1 = () => {
    const [ myData , setMyData] = useState([])
    let {PatientID} = useParams();
    useEffect(()=>{
        getPatient()
    })

    const getPatient =()=>{
        fetch("http://127.0.0.1:8000/api/patient/api/patients/").then( res =>{
            if(res.ok){
                return res.json()
            }else {
                console.log("Error")
            }
        }).then((data)=> {
            const newPatient = data.find((item)=> item.PatientID ===parseInt(PatientID))
            setMyData(newPatient)
        }).catch((err)=> console.log(err))
    }
   
  return (
    <div className=' bg-slate-300 text-neutral-950 h-full w-full'> {
        <div>
      <h1> { myData.FirstName}</h1>
        <h2>{myData.phone}</h2>
        <h2>{myData.DOB}</h2>
        <h2>{myData.Gender}</h2>
        </div>
    }</div>
  )
}

export default Tab1