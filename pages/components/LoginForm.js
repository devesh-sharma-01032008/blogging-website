import React from 'react'

export default function LoginForm() {
  const loginAccount = async (event)=>{
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const info = {email,password};
      const response = await fetch("/api/SignUp",{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(info)
      });
      const data = await response.json();
      document.cookie = `API_KEY=${data.api_key}`
      document.location = "/";
  }
  return (
    <div className="container">
      <form className="form-container" onSubmit={loginAccount}>
          <input className="input-field" id='email' type="email"  placeholder="Enter your Email"/>
          <input className="input-field" id='password' type="password"  placeholder="Enter your Password here"/>
          <div className="utils-btn-container">
              <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Login"/>
          </div>
      </form>
    </div>
  )
}
