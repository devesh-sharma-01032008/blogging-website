import React from "react";

export default function ContactForm() {
  return (
    <div className="container">
      <form className="form-container">
          <input className="input-field" type="text"  placeholder="Enter your Name"/>
          <input className="input-field" type="email"  placeholder="Enter your Email"/>
          <input className="input-field" type="number"  placeholder="Enter your Mobile Number"/>
          <textarea className="input-field textarea-field" rows={5} column={150} placeholder="Enter your Experience or FeedBack here">

          </textarea>
          <div className="utils-btn-container">
              <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Send"/>
          </div>
      </form>
    </div>
  );
}
