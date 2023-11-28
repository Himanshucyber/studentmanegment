// import React,{useState,useEffect} from 'react'
// // import { useParams,Link } from 'react-router-dom';
// import ProductService from '../service/ProductService';
// import StudentService from '../services/StudentService';
// const StudentCard=()=> {
//  const params=useParams();
//  //sname,email,prn,rollno,course,password
//  const [formdetails,setformdetails]=useState({sname:"",
//     email:"",prn:"",rollno:"",course:"",password:""})
// useEffect(()=>{
//    StudentService.getById(params.pid)
//    .then((result)=>{
//     console.log(result.data);
//     setformdetails({...result.data});
//    }) 
// },[])
//   return (
//     <div>
//     <div class="card" style={{"width":" 18rem"}}>
//     <div class="card-body">
//       <h5 class="card-title">{formdetails.sname}</h5>
//       <h6 class="card-subtitle mb-2 text-muted">{formdetails.prn}</h6>
//       <p class="card-text">{formdetails.rollno}</p>
//       <p class="card-text">{formdetails.email}</p>
//       <p class="card-text">{formdetails.course}</p>
//       <p class="card-text">{formdetails.password}</p>
      
//     </div>
//     <Link to="/list">
//      <button type="button" name="btn" id="btn" value="btn">back</button>
//     </Link>
//   </div>
//   </div>
//   )
// }
// export default StudentCard;