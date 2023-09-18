import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginnn() {

  const [cred,setFirst]=useState({email:"",password:""})
  let navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault();
        // const response= await fetch("https://ziiiii.onrender.com/api/loginuser",{
        //     method:'POST',
        //     headers:{
        //         'Content-type':'application/json'
        //     },
        //     body:JSON.stringify({email:cred.email,password:cred.password})
        // })
       await axios.post("https://ziiiii.onrender.com/api/loginuser",{email:cred.email,password:cred.password})
       .then(()=>{
        navigate("/home")
       }).
       catch((err)=>{
        alert("Enter valid credentials")
      })
      //   const json=await data.json()
      //   console.log(json)

      //   if(!json.success){
      //       alert("Enter valid Credentials")

      //   }
      //   if(json.success){
      //    navigate("/home")

      // }

        



    }

    const onChangee=(event)=>{
        setFirst({...cred,[event.target.name]:event.target.value})
    }
  return (
    <div><div className='container'><form onSubmit={handleSubmit}>
   
<div className="mb-5 m-5">
  <h1>Login</h1>
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" className="form-control" name='email' value={cred.email} onChange={onChangee}/>
  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div className="mb-5 m-5">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" className="form-control" name='password' value={cred.password} onChange={onChangee}/>
</div>
<Link to="/home">
<button type="submit" className=" m-5 btn btn-success " onClick={handleSubmit}>Submit</button>
</Link>

<Link to="/createuser" className=' btn btn-danger'>I'm a new User</Link>
</form></div></div>
  )
}

export default Loginnn 