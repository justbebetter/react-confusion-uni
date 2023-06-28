import React, { useEffect, useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="col-lg-4">
        Name:
        <input
          placeholder="Enter your name "
          class="form-control"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </label>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
export default Login;
