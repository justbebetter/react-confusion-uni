import React, { useEffect, useRef } from "react";

function Login() {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    alert(`Name: ${formData.get(`name`)}`);
    console.log(`Name: ${formData.get(`name`)}`);
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label className="col-lg-4">
        Name:
        <input
          name="name"
          placeholder="Enter your name "
          class="form-control"
          type="text"
        ></input>
      </label>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
export default Login;
