import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await signUpAuth(data);

      console.log("Sign Up Successful!");

      navigate("/myaccount");
    } catch (error) {
      console.error("Sign up failed:", error.response?.data || error.message);
      alert("Sign up failed. Please try again.");
    }
  };

  const signUpAuth = async (userData) => {
    const { name, email, password } = userData;

    const response = await axios.post("http://localhost:5000/auth/register", {
      name,
      email,
      password
    });

    localStorage.setItem("LoginUser", JSON.stringify(response.data));
    return response;
  };

  return (
    <>
      <div className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSignUp} style={{ width: "100%", maxWidth: "400px" }}>

          <h1 className="fs-1 mb-5">Sign Up</h1>
          <p>Already have an account? &nbsp;
            <Link to="/signin" className='text-success-emphasis fw-bold'>Sign In</Link>
          </p>

          <div className="mb-3">
            <input
              name="name"
              type="text"
              className="form-control py-2 shadow-none border-0 border-bottom"
              id="userNameInput"
              placeholder="User Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              name="email"
              type="email"
              className="form-control py-2 shadow-none border-0 border-bottom"
              id="emailInput"
              placeholder="Email address"
              required
            />
          </div>

          <div className="mb-4">
            <input
              name="password"
              type="password"
              className="form-control rounded-3 py-2 shadow-none border-0 border-bottom"
              id="passInput"
              placeholder="Password"
              required
            />
          </div>

          <div className="d-flex align-items-center mb-2">
            <input
              name="agreePolicy"
              type="checkbox"
              className="form-check-input shadow-none border-2 me-3"
              id="policy"
              required
            />
            <label htmlFor="policy" className="mb-0">I agree with Privacy Policy and Terms of Use</label>
          </div>

          <div className="d-flex align-items-center mb-4">
            <input
              name="rememberMe"
              type="checkbox"
              className="form-check-input shadow-none border-2 me-3"
              id="remember"
            />
            <label htmlFor="remember" className="mb-0">Remember me</label>
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
