import StudentService from "..services/StudentService";
import {useState,useEffect} from 'react'
import { StudentService } from '/Student';
import { Student } from './../Student';
const StudentTable=(props)=>{
    const[studentArr,setstudentArr]=useState([]);

    //this useeffect will get executed only once at the time 
    //of initialization of component
    //in class component same thing will be added in lifecycle
    //method componentDidMount
    useEffect(()=>{
      //let arr=ProductService.getAllProducts()
      //setprodarr(arr);
      StudentService.getAllProducts()
      .then((result)=>{
        console.log(result)
        setprodarr([...result.data]);
      })
    },[])
   return (
    <div>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Student Name  </th>
      <th scope="col">PRN  </th>
      <th scope="col">Roll No </th>
      <th scope="col">Course </th>
      <th scope="col" >Email</th>
    </tr>
  </thead>
  <tbody>
  {/* use map function to covert array into rows of the table */}
    {studentArr.map(s=><tr key={s.rollno}>
        <td>{s.sname}</td>
        <td>{s.email}</td>
        <td>{s.prn}</td>
        <td>{s.rollno}</td>
        <td>{s.course}</td>
    </tr>)}
  </tbody>
</table>
    </div>
   ) 

}

export default ProductTable;