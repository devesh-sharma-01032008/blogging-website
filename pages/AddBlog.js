import React from "react";

export default function AddNewBlog() {
  const addNewBlog = async (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const password = document.getElementById("password").value;
    const description = document.getElementById("desc").value;
    const authorName = document.getElementById("author-name").value;
    const metaTitle = document.getElementById("meta-title").value;
    const metaDesc = document.getElementById("meta-desc").value;
    const keywords = document.getElementById("keywords").value;
    const info = { title, url, imageUrl, password, description, authorName, metaTitle, metaDesc, keywords };
    await fetch("/api/AddBlog", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    });
  }
  return (
    <div className="container">
      <form className="form-container" onSubmit={addNewBlog}>
        <input className="input-field" id="title" type="text" placeholder="Enter title" />
        <input className="input-field" id="url" type="text" placeholder="Enter url" />
        <input className="input-field" id="imageUrl" type="text" placeholder="Enter image source" />
        <input className="input-field" id="password" type="password" placeholder="Enter password here" />
        <input className="input-field" id="author-name" type="text" placeholder="Enter author name here" />
        <input className="input-field" id="meta-title" type="text" placeholder="Enter meta title here" />
        <input className="input-field" id="meta-desc" type="text" placeholder="Enter meta description here" />
        <input className="input-field" id="keywords" type="text" placeholder="Enter keywords here" />
        <textarea className="input-field textarea-field" id="desc" rows={5} column={150} placeholder="Enter description">
        </textarea>
        <div className="utils-btn-container">
          <input className="btn reset-btn" type="reset" value="Reset Form" />
          <input type="submit" className="btn send-btn" value="Send" />
        </div>
      </form>
    </div>
  );
}
