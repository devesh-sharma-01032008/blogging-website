import React from "react";

export default function AddNewBlog() {
  return (
    <div className="container">
      <form className="form-container">
          <input className="input-field" type="text"  placeholder="Enter title"/>
          <input className="input-field" type="text"  placeholder="Enter url"/>
          <input className="input-field" type="text"  placeholder="Enter image source"/>
          <textarea className="input-field textarea-field" rows={5} column={150} placeholder="Enter description">
          </textarea>
          <div className="utils-btn-container">
              <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Send"/>
          </div>
      </form>
    </div>
  );
}
