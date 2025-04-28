import React, { useState } from "react";
import Styles from "../styles/login.module.css";

export default function LoginForm() {
  console.log("LoginForm", Styles);
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/login", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
    if (response.status === 200) {
      // Redirect to the dashboard or another page
      window.location.href = "/";
    }
  }

  return (
    <form onSubmit={submit}>
      <div className={Styles.field}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Username" name="username" autoComplete="name" required></input>
      </div>
      <div className={Styles.field}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" name="password" autoComplete="off" required></input>
      </div>
      <button>Submit</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}