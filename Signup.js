import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios';

function Signup() {

    const [cred,setFirst]=useState({name:"",email:"",password:"",geoloc:""})
    let navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault();

        await axios.post("https://ziiiii.onrender.com/api/createuser",{name:cred.name,email:cred.email,password:cred.password,location:cred.geoloc})
       .then(()=>{
        navigate("/")
       }).
       catch((err)=>{
        alert("Enter valid credentials")
      })
        



    }

    const onChangee=(event)=>{
        setFirst({...cred,[event.target.name]:event.target.value})
    }
  return (
    <div className='container'><form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1>SignUp</h1>
      <label for="name">Name</label>
      <input type="text" className="form-control" name='name' value={cred.name}onChange={onChangee}/>
    
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" name='email' value={cred.email} onChange={onChangee}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" name='password' value={cred.password} onChange={onChangee}/>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1">Address</label>
      <input type="text" className="form-control" name='geoloc' value={cred.geoloc} onChange={onChangee}/>
    </div>
   
    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
    <Link to="/" className='m-3 btn btn-danger'>Already user</Link>
  </form></div>
  )
}

export default Signup