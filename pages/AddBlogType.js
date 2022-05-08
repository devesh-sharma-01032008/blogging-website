import React from "react";

export default function AddBlogType() {
  const addNewBlogType = async (event)=>{
    event.preventDefault();
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const password = document.getElementById("password").value;
    const description = document.getElementById("description").value;
      const info = {title,url,imageUrl,password, description};
      const response = await fetch("/api/AddBlogType",{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(info)
      });
  }

  return (
    <div className="container">
      <form className="form-container" onSubmit={addNewBlogType}>
          <input className="input-field" type="text" id="title"  placeholder="Enter title"/>
          <input className="input-field" type="text" id="url" placeholder="Enter url"/>
          <input className="input-field" type="text" id="imageUrl" placeholder="Enter image source"/>
          <input className="input-field" type="password" id="password" placeholder="Enter password"/>
          <textarea className="input-field textarea-field" rows={5} id="description" column={150} placeholder="Enter description">
          </textarea>
          <div className="utils-btn-container">
              <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Send"/>
          </div>
      </form>
    </div>
  );
}
