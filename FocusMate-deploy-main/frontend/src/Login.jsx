import { useState } from "react";


function Login() {
    const[email,setEmail]= useState("");
    const[userName,setUserName] = useState("");
    const handlelogin = ()=>{
        const name = email.split("@")[0];
        setUserName(name);
    };
  return (
    <>
    <input
    type = 'email'
    placeholder = "EnterYourEmail"
    onChange = {(e)=>setEmail(e.target.value)} 
    />
    <input 
    type = "password"
    placeholder = "enteryour password"
    />
    
    <button onClick={handlelogin}>"login"</button>
    </>
  )
}

export default Login
