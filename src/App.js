import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent';
import {Routes,Route} from 'react-router-dom';
import StudentDetails from './components/StudentDetails';
import StudentList from './components/StudentList';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
function App() {
  return (
    <div className="App">
     <h1 style={{"backgroundColor":"blue",color:"white","border":"2px solid red"}}>IACSD student managment</h1>
      
        {/* <MainNavBar></MainNavBar> */}
       <Routes>
            <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/table" element={<StudentDetails></StudentDetails>}></Route>
            <Route path="/list" element={<StudentList></StudentList>}></Route>
            {/* <Route path="/form" element={<From></From>}></Route> */}
            {/* <Route path="/edit/:pid" element={<ProductEdit></ProductEdit>}></Route>
            <Route path="/view/:pid" element={<StudentCard></StudentCard>}></Route> */}
           
       </Routes>
    </div>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

export default App;
