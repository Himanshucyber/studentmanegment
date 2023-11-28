import React, { useEffect, useState } from 'react'
import StudentService from '../services/StudentService';
import StudentDetails from './StudentDetails'
import {Link} from 'react-router-dom';
export default function StudentList(props) {
  
          const [studentArr,setstudentArr]=useState([]);

          const fetchStudent=()=>{
            StudentService.getAllStudent()
            .then((result)=>{
              console.log(result);
              setstudentArr([...result.data]);
            }).catch((err)=>{
              console.log("error occured",err)
            })
          }
          useEffect(()=>{
            console.log("in List Initialization useEffect");
            fetchStudent();
          },[])


  return (
    <div>
    <Link to="/form">
     <button type="button" name="btn" className="btn btn-primary" >Add new Product</button>&nbsp;&nbsp;&nbsp;
     </Link>
    {/* step-5 add productDetails component */}
      {studentArr.map(s=><StudentDetails key={s.rollno}  getData={fetchStudent} student={s}></StudentDetails>)}
     
      </div>
  )
}
