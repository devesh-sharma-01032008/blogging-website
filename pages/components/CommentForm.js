import React from "react";

export default function CommentForm() {
  return (
    <div className="container">
      <form className="form-container">
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
