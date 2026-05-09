import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await loginAuth(data);
            console.log("Sign In Successful!");
            navigate('/myaccount');
        } catch (error) {
            console.error("Sign In Error:", error.response?.data || error.message);
            alert("Invalid email or password!"); // Show the user what went wrong
        }
    };

    const loginAuth = async ({ email, password }) => {
        const response = await axios.post("http://localhost:5000/auth/login", { email, password });

        localStorage.setItem("LoginUser", JSON.stringify(response.data));

        return response.data;
    };

    return (
        <>
            <div className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <form onSubmit={handleSignIn} style={{ width: "100%", maxWidth: "400px" }}>

                    <h1 className="fs-1 mb-5">Sign In</h1>

                    <p>Don't have an account yet? &nbsp; {/* space */}
                        <Link to="signup" className='text-success-emphasis fw-bold'>Sign Up</Link>
                    </p>

                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control py-2 shadow-none border-0 border-bottom"
                            id="emailInput"
                            name='email'
                            placeholder="Your user name or Email address"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            className="form-control rounded-3 py-2 shadow-none border-0 border-bottom"
                            id="passInput"
                            name='password'
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="form-check mb-3 d-flex align-items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            className="form-check-input shadow-none border-2 me-2"
                            id="rememberMe"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
}
