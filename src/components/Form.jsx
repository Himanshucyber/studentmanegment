import React from 'react'

export default function Form() {
  return (
      <div className="mb-3">
      <form action="/student">
        <label htmlFor="sname">Student Name : </label>
        <input type="text" name="sname" /><br />
        <label htmlFor="email">Email : </label>
        <input type="email" name='email' /><br />
        <label htmlFor="prn">PRN : </label>
        <input type="Number" name='prn' /><br />
        <label htmlFor="rollno">Roll No : </label>
        <input type="Number" name='rollno' /><br />
        <label htmlFor="course"> Course : </label>
        <select name="course" id="">
          <option value="pgdac">PG-DAC</option>
          <option value="dbda">DBDA</option>
          <option value="ditiss">DITISS</option>
        </select> <br />
        <label htmlFor="password">PassWord : </label>
        <input type="password" name='password' />  <br />
        <button type='button'>Ressister</button>
       
        
      </form>
    </div>
  )
}
