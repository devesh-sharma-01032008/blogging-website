import React from 'react'

export default function SignUpForm() {
  const createAccount = async (event)=>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("c-password").value;
    if(password == cpassword && password.length >= 8 && phone_number.length == 10){
      const info = {name,email,phone_number,password};
      const response = await fetch("/api/SignUp",{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(info)
      });
      const data = await response.json();
      localStorage.setItem("Api_key",data.api_key);
      document.location = "/";
    }else{
      alert("Please fill the form correcctly.");
    }
  }
  return (
    <div className="container">
      <form className="form-container" onSubmit={createAccount}>
          <input className="input-field" name='name' id='name' type="text"  placeholder="Enter your Name" required/>
          <input className="input-field" name='email' id='email' type="email"  placeholder="Enter your Email" required/>
          <input className="input-field" name='number' id='number' type="number"  placeholder="Enter your Mobile Number" required/>
          <input className="input-field" name='password' id='password' type="password" autoComplete='true'  placeholder="Enter your Password here" required/>
          <input className="input-field" name='c-password' id='c-password' autoComplete='true' type="password"  placeholder="Confirm your Password here" required/>
          <div className="utils-btn-container">
              <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Send"/>
          </div>
      </form>
    </div>
  )
}
