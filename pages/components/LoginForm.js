import React from 'react'

export default function LoginForm() {
  return (
    <div className="container">
      <form className="form-container">
          <input className="input-field" type="email"  placeholder="Enter your Email"/>
          <input className="input-field" type="password"  placeholder="Enter your Password here"/>
          <div className="utils-btn-container">
              <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Login"/>
          </div>
      </form>
    </div>
  )
}
