import { Student } from './../Student';
import axios from 'axios';
let baseURL = "http://localhost:3000/students";

class StudentService{

    constructor(){
       // sname,email,prn,rollno,course,password
        this.studentArr=[new Student("Himanshu","phimanshu925@gmail.com",234529069,2309033,"pgdac","1627279"),
                         new Student("Himanshu","phimanshu925@gmail.com",234529069,2309033,"pgdac","1627279"),
                         new Student("Himanshu","phimanshu925@gmail.com",234529069,2309033,"pgdac","1627279")
                        ];
    }
    getAllStudents(){
        return axios.get(baseURL);
    }
    addStudent(s){
        console.log("in service",s)
       return axios.post(baseURL+"/student/"+s.rollno,s)
    }
    updateStudent(s){
        console.log("in service",s)
       return axios.put(baseURL+"/student/"+s.rollno,s)
    }
    getByRollNo(rollno){
        return axios.get(baseURL+"/"+rollno);
    }
    deleteStudent(rollno){
        return axios.delete(baseURL+"/"+rollno);
    }

}
export default new StudentService();
