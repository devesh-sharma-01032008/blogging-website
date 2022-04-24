import React from "react";

export default function ContactForm() {
  const addFeedback = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("number").value;
    const feedback = document.getElementById("feedback").value;
    const info = { name, email, phone_number, feedback };
    await fetch("/api/AddUserFeedback", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    document.location = "/";
  };
  return (
    <div className="container">
      <form className="form-container" onSubmit={addFeedback}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter your Name"
          id="name"
        />
        <input
          className="input-field"
          type="email"
          placeholder="Enter your Email"
          id="email"
        />
        <input
          className="input-field"
          type="number"
          placeholder="Enter your Mobile Number"
          id="number"
        />
        <textarea
          className="input-field textarea-field"
          rows={5}
          column={150}
          placeholder="Enter your Experience or FeedBack here"
          id="feedback"
        ></textarea>
        <div className="utils-btn-container">
          <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Send" />
        </div>
      </form>
    </div>
  );
}
