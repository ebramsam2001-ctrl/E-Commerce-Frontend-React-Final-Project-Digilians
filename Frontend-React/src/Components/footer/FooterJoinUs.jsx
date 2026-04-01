import React from 'react'

import image_9 from "../../assets/image_9.jpeg"
import { Link } from 'react-router-dom';

export default function FooterJoinUs() {
    return (
        <>
            <div
                className="w-100 overflow-hidden d-flex justify-content-center align-items-center"
                style={{
                    backgroundImage: `url(${image_9})`,
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >

                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
                    <h2 className='fs-1'>Join our Newsletter</h2>
                    <p>Sign up for deals, new products and promotions</p>

                    <div className="d-flex align-items-center border-bottom border-secondary-subtle py-2 mb-3">
                        <span className="bg-transparent border-0 pe-2 text-muted">
                            <i className="bi bi-envelope fs-5"></i>
                        </span>

                        <input
                            type="email"
                            className="form-control border-0 bg-transparent shadow-none ps-0"
                            placeholder="Email address"
                            style={{ fontSize: '16px' }}
                        />

                        <button
                            className="btn btn-link text-decoration-none text-muted fw-semibold p-0 border-0"
                            type="button"
                        >
                            <Link className='text-decoration-none text-dark' to="/signin"> SignIn</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}